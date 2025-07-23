# AI Growth Advisors - Deployment Guide

This guide will help you deploy AI Growth Advisors to Vercel.

## Prerequisites

- A Vercel account
- A PostgreSQL database (Supabase, Neon, or similar)
- Your domain: aigrowthadvisors.cc

## Required Environment Variables

Add these environment variables in your Vercel project settings:

### Required Variables

```
DATABASE_URL="your-postgresql-connection-string"
BETTER_AUTH_SECRET="your-32-character-secret-key"
NEXT_PUBLIC_APP_URL="https://aigrowthadvisors.cc"
```

### Optional Variables

```
# Email (recommended)
EMAIL_FROM="hello@aigrowthadvisors.cc"
RESEND_API_KEY="re_YOUR_API_KEY"

# Firecrawl (required for brand monitoring features)
FIRECRAWL_API_KEY="fc-d8dd388f5f3640e896e67daf194a3de2"

# Billing (optional)
AUTUMN_SECRET_KEY="your-autumn-api-key"
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."

# AI Providers (add as needed)
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."
GOOGLE_GENERATIVE_AI_API_KEY="..."
PERPLEXITY_API_KEY="pplx-..."
```

## Deployment Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Prepare for deployment"
git push origin terragon/build-aigrowthadvisors-site
```

### 2. Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Select the branch: `terragon/build-aigrowthadvisors-site`

### 3. Configure Environment Variables

1. In Vercel project settings, go to "Environment Variables"
2. Add each required variable from the list above
3. For production deployment, update:
   - `NEXT_PUBLIC_APP_URL` to `https://aigrowthadvisors.cc`
   - `NODE_ENV` to `production`

### 4. Configure Domain

1. In Vercel project settings, go to "Domains"
2. Add your domain: `aigrowthadvisors.cc`
3. Follow Vercel's instructions to update your DNS settings

### 5. Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Your site will be live at your domain!

## Post-Deployment

### Initialize Database

After deployment, you need to initialize your database:

1. Access your Vercel project's Functions logs
2. Visit: `https://aigrowthadvisors.cc/api/auth/test-db` to verify database connection
3. The database schema will be automatically created on first use

### Test Authentication

1. Visit your site at `https://aigrowthadvisors.cc`
2. Click "Get Started" to create an account
3. Verify email functionality works (if RESEND_API_KEY is configured)

### Enable Features

- **Brand Monitoring**: Requires `FIRECRAWL_API_KEY`
- **AI Chat**: Requires at least one AI provider API key
- **Billing**: Requires `AUTUMN_SECRET_KEY` and Stripe keys

## Troubleshooting

### Build Errors

If you see build errors about missing environment variables:
1. Ensure all required variables are set in Vercel
2. Check that variable names match exactly (case-sensitive)

### Database Connection Issues

1. Verify your `DATABASE_URL` is correct
2. Ensure your database allows connections from Vercel's IPs
3. For Supabase: Use the "Transaction" pooler mode

### Authentication Issues

1. Ensure `BETTER_AUTH_SECRET` is a secure 32-character string
2. Verify `NEXT_PUBLIC_APP_URL` matches your deployment URL

## Security Notes

- Never commit `.env.local` to version control
- Use strong, unique values for `BETTER_AUTH_SECRET`
- Regularly rotate API keys
- Enable 2FA on all service accounts

## Support

For issues specific to:
- FireGEO features: Check the [FireGEO documentation](https://github.com/mendableai/firegeo)
- Deployment: Check [Vercel documentation](https://vercel.com/docs)
- Database: Check your database provider's documentation