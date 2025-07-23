# Login Issue Fix Instructions

The login functionality is not working because the required environment variables are not configured. Follow these steps to fix the issue:

## 1. Create .env.local file

Create a `.env.local` file in the root directory with the following required variables:

```bash
# Database (Required)
DATABASE_URL="postgresql://username:password@localhost:5432/your_database"

# Better Auth (Required)
BETTER_AUTH_SECRET="your-32-character-secret-key-here"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Email Settings (Required for password reset)
EMAIL_FROM="noreply@aigrowthadvisors.cc"
RESEND_API_KEY="re_your_resend_api_key"

# Optional but recommended
NODE_ENV="development"
```

## 2. Generate a secure BETTER_AUTH_SECRET

Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

## 3. Set up PostgreSQL Database

Ensure you have PostgreSQL installed and running, then:

1. Create a database:
```sql
CREATE DATABASE aigrowthadvisors;
```

2. Update the DATABASE_URL in .env.local with your actual database credentials.

## 4. Run Database Migrations

After setting up the environment variables, run the migrations:

```bash
# Install dependencies if not already done
npm install

# Run Better Auth migrations
npx @better-auth/cli migrate

# Run app-specific migrations
psql $DATABASE_URL -f migrations/001_create_app_schema.sql
```

## 5. Verify Setup

1. Start the development server:
```bash
npm run dev
```

2. Visit http://localhost:3000/api/auth/debug to verify:
   - All environment variables are set
   - Database connection is working
   - Auth tables are created

3. Try registering a new account at http://localhost:3000/register

## Common Issues

### Missing Environment Variables
The application requires these environment variables to be set:
- DATABASE_URL
- BETTER_AUTH_SECRET
- NEXT_PUBLIC_APP_URL

### Database Connection Issues
- Ensure PostgreSQL is running
- Verify database credentials in DATABASE_URL
- Check if the database exists

### Email Sending (for password reset)
- Set up a Resend account at https://resend.com
- Add your RESEND_API_KEY to .env.local
- Configure EMAIL_FROM with a verified domain

## Debug Endpoints

- `/api/auth/debug` - Check auth configuration and database connection
- `/api/auth/session` - Check current session status

## Next Steps

After fixing the environment setup:
1. Register a new user account
2. Test login functionality
3. Test password reset flow (requires email configuration)