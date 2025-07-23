# URGENT: Authentication Setup Instructions

The authentication is failing because the `.env.local` file needs to be updated with your actual Vercel environment variables.

## Immediate Actions Required:

### 1. Copy Database URL from Vercel

You MUST update the `DATABASE_URL` in `.env.local` with your actual database URL from Vercel:

1. Go to: https://vercel.com/[your-team]/[your-project]/settings/environment-variables
2. Find and copy the `DATABASE_URL` value
3. Replace the placeholder in `.env.local`:
   ```
   DATABASE_URL="[paste your actual database URL here]"
   ```

### 2. Copy Authentication Secret

Copy the `BETTER_AUTH_SECRET` from Vercel and update it in `.env.local`.

### 3. Restart the Server

After updating the environment variables:
```bash
# Stop the current server (Ctrl+C)
# Start it again
npm run dev
```

### 4. Run Database Migrations

If this is your first time setting up locally, you may need to run migrations:
```bash
npx @better-auth/cli migrate
```

## Current Status:
- ✅ Server is running at http://localhost:3000
- ✅ Environment variables are loaded
- ❌ Database connection is failing (using placeholder URL)
- ❌ Authentication tables may not exist

## Test User Credentials:
- Email: test@test.dk
- Password: testtest

Once you update the `.env.local` with the actual DATABASE_URL from Vercel, the login should work!