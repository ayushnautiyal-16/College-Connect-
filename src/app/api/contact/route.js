import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// Parse connection string format: user:password@host:port/database
// Falls back to individual env variables for local dev
function getDbConfig() {
    // Check DB_HOST first — if it contains a full connection string, parse it
    const dbHost = (process.env.DB_HOST || "").trim();
    if (dbHost.includes("@")) {
        const match = dbHost.match(/^(.+?):(.+?)@(.+?)(?::(\d+))?\/(.+)$/);
        if (match) {
            return {
                user: match[1],
                password: match[2],
                host: match[3],
                port: parseInt(match[4] || "3306"),
                database: match[5],
            };
        }
    }

    // Also check DATABASE_URL
    const dbUrl = (process.env.DATABASE_URL || "").trim();
    if (dbUrl.includes("@")) {
        const match = dbUrl.match(/^(.+?):(.+?)@(.+?)(?::(\d+))?\/(.+)$/);
        if (match) {
            return {
                user: match[1],
                password: match[2],
                host: match[3],
                port: parseInt(match[4] || "3306"),
                database: match[5],
            };
        }
    }

    // Fallback to individual env variables (for local dev)
    return {
        host: dbHost || undefined,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306,
    };
}

export async function POST(request) {
    let connection;

    try {
        const body = await request.json();
        const { name, phone, email, course } = body;

        // ===========================
        // ✅ Validation
        // ===========================

        if (!name || !phone || !course) {
            return NextResponse.json(
                { success: false, message: "Name, phone, and course are required." },
                { status: 400 }
            );
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            return NextResponse.json(
                { success: false, message: "Phone number must be 10 digits." },
                { status: 400 }
            );
        }

        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { success: false, message: "Invalid email format." },
                { status: 400 }
            );
        }

        // ===========================
        // ✅ Connect to MySQL
        // ===========================

        const dbConfig = getDbConfig();
        connection = await mysql.createConnection(dbConfig);

        // ===========================
        // ✅ Insert into Database
        // ===========================

        await connection.execute(
            `INSERT INTO student_applications 
       (full_name, phone, email, course_interest)
       VALUES (?, ?, ?, ?)`,
            [name, phone, email || null, course]
        );

        console.log("New student application saved:", {
            name,
            phone,
            email,
            course,
            submittedAt: new Date().toISOString(),
        });

        return NextResponse.json(
            { success: true, message: "Form submitted successfully." },
            { status: 200 }
        );

    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            {
                success: false,
                message: error.code === "ENOTFOUND"
                    ? "Cannot reach database server. Check DB_HOST."
                    : error.code === "ECONNREFUSED"
                        ? "Database connection refused. Check security group."
                        : error.code === "ER_ACCESS_DENIED_ERROR"
                            ? "Database credentials incorrect. Check DB_USER/DB_PASSWORD."
                            : error.code === "ETIMEDOUT"
                                ? "Database connection timed out. Check security group/VPC."
                                : `Database error: ${error.code || error.message}`,
            },
            { status: 500 }
        );

    } finally {
        if (connection) {
            await connection.end();
        }
    }
}
