import { NextResponse } from "next/server";

export async function GET() {
    const dbUrl = process.env.DATABASE_URL || "";
    const dbHost = process.env.DB_HOST || "";

    return NextResponse.json({
        env_check: {
            DATABASE_URL: dbUrl ? `SET (length=${dbUrl.length})` : "❌ MISSING",
            DB_HOST: dbHost ? `SET (length=${dbHost.length})` : "not set (ok if DATABASE_URL is set)",
        },
        node_env: process.env.NODE_ENV,
        timestamp: new Date().toISOString(),
    });
}
