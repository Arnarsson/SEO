import { betterAuth } from 'better-auth';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

// Load environment variables for CLI
dotenv.config({ path: '.env.local' });

const env = {
  DATABASE_URL: process.env.DATABASE_URL!,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET!,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  NODE_ENV: process.env.NODE_ENV || 'development',
};

export const auth = betterAuth({
  database: new Pool({
    connectionString: env.DATABASE_URL,
  }),
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.NEXT_PUBLIC_APP_URL,
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: (() => {
    const origins = [
      env.NEXT_PUBLIC_APP_URL,
      'http://localhost:3000',
    ];
    
    // Add Vercel preview URLs
    if (process.env.VERCEL_URL) {
      origins.push(`https://${process.env.VERCEL_URL}`);
    }
    
    // Add Vercel deployment patterns
    origins.push('https://*.vercel.app');
    origins.push('https://*-arnarssons-projects.vercel.app');
    
    return origins;
  })(),
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // Update session if older than 1 day
    cookieOptions: {
      httpOnly: true,
      sameSite: 'lax',
      secure: env.NODE_ENV === 'production',
      path: '/',
    },
  },
  advanced: {
    crossSubDomainCookies: {
      enabled: env.NODE_ENV === 'production',
    },
  },
});
