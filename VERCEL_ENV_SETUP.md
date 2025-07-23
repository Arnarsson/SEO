# Setting Up Local Development with Vercel Environment Variables

Since your environment variables are stored in Vercel, you need to copy them to your local development environment.

## Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Link your project:
```bash
vercel link
```

4. Pull environment variables:
```bash
vercel env pull .env.local
```

## Option 2: Manual Copy from Vercel Dashboard

1. Go to your Vercel project settings: https://vercel.com/[your-team]/[your-project]/settings/environment-variables

2. Copy `.env.local.template` to `.env.local`:
```bash
cp .env.local.template .env.local
```

3. For each environment variable in Vercel:
   - Click on the variable to reveal its value
   - Copy the value
   - Paste it into your `.env.local` file

4. Make sure to copy these critical variables:
   - `BETTER_AUTH_SECRET`
   - `DATABASE_URL` 
   - `RESEND_API_KEY`
   - All the AI API keys you're using

## Option 3: Quick Script (if you have the values)

Run the setup script and manually add your values:
```bash
./scripts/setup-auth.sh
```

## Testing Your Setup

1. Start the development server:
```bash
npm run dev
```

2. Check if environment is properly configured:
   - Visit: http://localhost:3000/api/auth/debug
   - You should see all environment variables as "true" or actual values

3. Test login:
   - Visit: http://localhost:3000/login
   - Try logging in with an existing account

## Common Issues

### Database Connection
- Make sure your `DATABASE_URL` is accessible from your local machine
- If using a cloud database, ensure your IP is whitelisted

### CORS/Origin Issues
- Update `NEXT_PUBLIC_APP_URL` to `http://localhost:3000` for local development

### Missing Tables
If you get database table errors, run migrations:
```bash
npx @better-auth/cli migrate
npm run db:migrate
```

## Security Note
⚠️ Never commit `.env.local` to git! It's already in `.gitignore`.