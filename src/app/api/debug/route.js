import { NextResponse } from "next/server";

export async function GET() {
    const dbHost = (process.env.DB_HOST || "").trim();
    const dbUrl = (process.env.DATABASE_URL || "").trim();
    const isConnectionString = dbHost.includes("@");

    return NextResponse.json({
        env_check: {
            DB_HOST: dbHost ? `SET (length=${dbHost.length}, is_connection_string=${isConnectionString})` : "❌ MISSING",
            DATABASE_URL: dbUrl ? `SET (length=${dbUrl.length})` : "not set (ok if DB_HOST is connection string)",
        },
        mode: isConnectionString ? "✅ Using DB_HOST as connection string" : dbUrl ? "✅ Using DATABASE_URL" : "Using individual env vars",
        node_env: process.env.NODE_ENV,
        timestamp: new Date().toISOString(),
    });
}
