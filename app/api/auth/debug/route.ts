import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { validateEnv } from '@/lib/env-validation';

export async function GET(request: Request) {
  try {
    // Check environment variables
    const envCheck = {
      DATABASE_URL: !!process.env.DATABASE_URL,
      BETTER_AUTH_SECRET: !!process.env.BETTER_AUTH_SECRET,
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'not set',
      NODE_ENV: process.env.NODE_ENV || 'not set',
    };

    // Try to validate env
    let envValidation = { valid: false, error: null as string | null };
    try {
      validateEnv();
      envValidation.valid = true;
    } catch (error: any) {
      envValidation.error = error.message;
    }

    // Check if we can connect to the database
    let dbStatus = 'unknown';
    let authTables: any = null;
    try {
      const { Pool } = require('pg');
      const pool = new Pool({
        connectionString: process.env.DATABASE_URL!,
      });
      
      const result = await pool.query('SELECT 1');
      dbStatus = 'connected';
      
      // Check auth tables
      const tablesResult = await pool.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name IN ('user', 'session', 'account', 'verification')
        ORDER BY table_name;
      `);
      authTables = tablesResult.rows.map((r: any) => r.table_name);
      
      await pool.end();
    } catch (error: any) {
      dbStatus = `error: ${error.message || 'Unknown error'}`;
      console.error('Database connection error:', error);
    }

    // Check auth config
    const authConfig = {
      baseURL: auth.options?.baseURL || 'not configured',
      hasDatabase: !!auth.options?.database,
      hasSecret: !!auth.options?.secret,
    };

    // Try to get session
    let sessionCheck = { hasSession: false, error: null as string | null };
    try {
      const session = await auth.api.getSession({
        headers: request.headers,
      });
      sessionCheck.hasSession = !!session;
    } catch (error: any) {
      sessionCheck.error = error.message;
    }

    return NextResponse.json({
      status: 'Auth Debug Info',
      timestamp: new Date().toISOString(),
      environment: envCheck,
      envValidation,
      database: {
        status: dbStatus,
        authTables: authTables || 'not checked',
      },
      authConfig,
      sessionCheck,
      headers: {
        cookie: request.headers.get('cookie') || 'no cookies',
        origin: request.headers.get('origin') || 'no origin',
        referer: request.headers.get('referer') || 'no referer',
      },
    });
  } catch (error: any) {
    return NextResponse.json({
      error: 'Debug endpoint error',
      message: error.message,
      stack: error.stack,
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Test login using Better Auth API directly
    const loginUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/auth/sign-in/email`;
    
    const testLogin = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: body.email,
        password: body.password,
      }),
    });

    const loginResult = await testLogin.json();
    
    return NextResponse.json({
      loginUrl,
      status: testLogin.status,
      statusText: testLogin.statusText,
      headers: Object.fromEntries(testLogin.headers.entries()),
      result: loginResult,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: 'Test login error',
      message: error.message,
    }, { status: 500 });
  }
}