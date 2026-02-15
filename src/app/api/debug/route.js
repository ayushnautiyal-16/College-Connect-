import { NextResponse } from "next/server";

export async function GET() {
    const dbHost = process.env.DB_HOST;
    const dbUser = process.env.DB_USER;
    const dbPass = process.env.DB_PASSWORD;
    const dbName = process.env.DB_NAME;

    return NextResponse.json({
        env_check: {
            DB_HOST: dbHost ? `SET (${dbHost.substring(0, 15)}...)` : "❌ MISSING",
            DB_USER: dbUser ? `SET (${dbUser.substring(0, 3)}***)` : "❌ MISSING",
            DB_PASSWORD: dbPass ? "SET (****)" : "❌ MISSING",
            DB_NAME: dbName ? `SET (${dbName})` : "❌ MISSING",
        },
        node_env: process.env.NODE_ENV,
        timestamp: new Date().toISOString(),
    });
}
