import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * POST /api/chatbot-lead
 * Receives chatbot lead data and sends it via email using Resend.
 */
export async function POST(request) {
    try {
        const lead = await request.json();

        // Validate required fields
        if (!lead.email || !lead.name) {
            return NextResponse.json(
                { success: false, error: "Name and email are required." },
                { status: 400 }
            );
        }

        const {
            name,
            course = "Not specified",
            college = "Not specified",
            percentage = "Not specified",
            email,
            phone = "Not provided",
        } = lead;

        const submittedAt = new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
        });

        // ===========================
        // ✅ Send Email via Resend
        // ===========================

        await resend.emails.send({
            from: "College Connect <onboarding@resend.dev>",
            to: [process.env.EMAIL_USER],
            subject: `🤖 New Chatbot Lead - ${name} | ${course}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                    <div style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%); padding: 24px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">🤖 New Chatbot Lead</h1>
                        <p style="color: #e9d5ff; margin: 8px 0 0; font-size: 13px;">Collected via Neha — Admission Assistant</p>
                    </div>
                    <div style="padding: 24px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555; width: 150px;">👤 Name</td>
                                <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #333;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">📧 Email</td>
                                <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #333;">
                                    <a href="mailto:${email}" style="color: #7c3aed; text-decoration: none;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">📱 Phone</td>
                                <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #333;">
                                    <a href="tel:${phone}" style="color: #7c3aed; text-decoration: none;">${phone}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">📚 Course Interest</td>
                                <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #333;">${course}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">🏛️ College</td>
                                <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; color: #333;">${college}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; font-weight: bold; color: #555;">📊 12th %</td>
                                <td style="padding: 12px; color: #333;">${percentage}</td>
                            </tr>
                        </table>
                    </div>
                    <div style="background: #f8f9fa; padding: 16px; text-align: center; font-size: 12px; color: #888;">
                        Submitted on ${submittedAt} IST via Chatbot
                    </div>
                </div>
            `,
        });

        console.log("✅ Chatbot lead email sent:", name, email);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("❌ Chatbot lead error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to process lead." },
            { status: 500 }
        );
    }
}
