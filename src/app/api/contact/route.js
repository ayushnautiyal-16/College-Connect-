import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

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
        const { name, phone, email, course, collegeId, otherCourse } = body;

        // If course is empty and otherCourse is provided, use otherCourse
        const courseName = course || otherCourse || '';

        // Determine college name for special IDs
        let collegeName = '';
        if (collegeId === '1' || collegeId === 1) {
            collegeName = 'Graphic Era';
        } else if (collegeId === '2' || collegeId === 2) {
            collegeName = 'DIT University';
        }

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
            [name, phone, email || null, courseName]
        );


        console.log("New student application saved:", {
            name,
            phone,
            email,
            course: courseName,
            submittedAt: new Date().toISOString(),
        });

        // ===========================
        // ✅ Send Email Notification (Resend)
        // ===========================

        try {
            await resend.emails.send({
                from: "College Connect <noreply@collegeconnectedu.com>",
                to: [process.env.EMAIL_USER],
                subject: `New Callback Request - ${name} | ${courseName}${collegeName ? ' | ' + collegeName : ''}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 22px;">📞 New Callback Request${collegeName ? ' - ' + collegeName : ''}</h1>
                        </div>
                        <div style="padding: 24px;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555; width: 140px;">👤 Name</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #333;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">📱 Mobile Number</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #333;">
                                        <a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">📧 Email</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #333;">${email || "Not provided"}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; font-weight: bold; color: #555;">🏫 College</td>
                                    <td style="padding: 12px; color: #333;">${collegeName || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; font-weight: bold; color: #555;">📚 Course Interest</td>
                                    <td style="padding: 12px; color: #333;">${courseName}</td>
                                </tr>
                            </table>
                        </div>
                        <div style="background: #f8f9fa; padding: 16px; text-align: center; font-size: 12px; color: #888;">
                            Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
                        </div>
                    </div>
                `,
            });
            console.log("Email notification sent successfully via Resend.");
        } catch (emailError) {
            // Log email error but don't fail the request — DB save was successful
            console.error("Failed to send email notification via Resend:", emailError);
        }

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
