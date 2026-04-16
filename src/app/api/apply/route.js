import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

function getDbConfig() {
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
        const { fullName, mobileNumber, preferredCollege, preferredCourse } = body;

        // ===========================
        // Validation
        // ===========================

        if (!fullName || !mobileNumber || !preferredCollege) {
            return NextResponse.json(
                { success: false, message: "Full name, mobile number, and preferred college are required." },
                { status: 400 }
            );
        }

        if (!/^[0-9]{10}$/.test(mobileNumber)) {
            return NextResponse.json(
                { success: false, message: "Mobile number must be 10 digits." },
                { status: 400 }
            );
        }

        // ===========================
        // Connect to MySQL & Insert
        // ===========================

        const dbConfig = getDbConfig();
        connection = await mysql.createConnection(dbConfig);

        await connection.execute(
            `INSERT INTO apply_now_applications 
             (full_name, mobile_number, preferred_college, preferred_course)
             VALUES (?, ?, ?, ?)`,
            [fullName, mobileNumber, preferredCollege, preferredCourse || null]
        );

        console.log("New apply-now application saved:", {
            fullName,
            mobileNumber,
            preferredCollege,
            preferredCourse,
            submittedAt: new Date().toISOString(),
        });

        // ===========================
        // Send Email Notification (Resend)
        // ===========================

        try {
            await resend.emails.send({
            from: "College Connect <noreply@collegeconnectedu.com>",
                to: [process.env.EMAIL_USER],
                subject: `New Application - ${fullName} | ${preferredCollege}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                        <div style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%); padding: 24px; text-align: center;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 22px;">🎓 New Apply Now Application</h1>
                        </div>
                        <div style="padding: 24px;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555; width: 160px;">👤 Full Name</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #333;">${fullName}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">📱 Mobile Number</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #333;">
                                        <a href="tel:${mobileNumber}" style="color: #6366f1; text-decoration: none;">${mobileNumber}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">🏛️ Preferred College</td>
                                    <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #333;">${preferredCollege}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px; font-weight: bold; color: #555;">📚 Preferred Course</td>
                                    <td style="padding: 12px; color: #333;">${preferredCourse || "Not specified"}</td>
                                </tr>
                            </table>
                        </div>
                        <div style="background: #f8f9fa; padding: 16px; text-align: center; font-size: 12px; color: #888;">
                            Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
                        </div>
                    </div>
                `,
            });
            console.log("Apply-now email notification sent successfully via Resend.");
        } catch (emailError) {
            console.error("Failed to send apply-now email notification via Resend:", emailError);
        }

        return NextResponse.json(
            { success: true, message: "Application submitted successfully." },
            { status: 200 }
        );

    } catch (error) {
        console.error("Apply form error:", error);

        return NextResponse.json(
            {
                success: false,
                message: error.code === "ENOTFOUND"
                    ? "Cannot reach database server."
                    : error.code === "ECONNREFUSED"
                        ? "Database connection refused."
                        : error.code === "ER_ACCESS_DENIED_ERROR"
                            ? "Database credentials incorrect."
                            : error.code === "ETIMEDOUT"
                                ? "Database connection timed out."
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
