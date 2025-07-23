# Fix Authentication on Vercel Deployment

The 403 errors on your Vercel deployment indicate that the authentication system is rejecting requests. Here's how to fix it:

## 1. Update Environment Variables on Vercel

Go to your Vercel project settings and ensure these environment variables are set correctly:

### Required Variables:
- `NEXT_PUBLIC_APP_URL` - Set this to your deployment URL (e.g., `https://seo-qi9pae3m7-arnarssons-projects.vercel.app`)
- `BETTER_AUTH_SECRET` - Your authentication secret
- `DATABASE_URL` - Your PostgreSQL connection string
- `VERCEL_URL` - This should be automatically set by Vercel

### Important: NEXT_PUBLIC_APP_URL Configuration
The `NEXT_PUBLIC_APP_URL` must match your actual deployment URL. Based on your error logs, it should be:
```
NEXT_PUBLIC_APP_URL=https://seo-qi9pae3m7-arnarssons-projects.vercel.app
```

## 2. Redeploy After Changes

After updating the environment variables:
1. Go to your Vercel dashboard
2. Click on your project
3. Go to the "Deployments" tab
4. Click "Redeploy" on the latest deployment
5. Select "Redeploy with existing Build Cache"

## 3. Alternative: Use Production Domain

If you have a custom domain (e.g., aigrowthadvisors.com), update:
```
NEXT_PUBLIC_APP_URL=https://aigrowthadvisors.com
```

## 4. Verify Configuration

After redeployment, check:
- https://[your-deployment-url]/api/auth/debug

This should show:
- All environment variables as configured
- Database connection status
- Auth configuration with correct baseURL

## Code Changes Made

I've updated the authentication configuration to accept requests from:
- Your specific Vercel deployment URL
- Any Vercel preview deployments
- Localhost for development

The changes are in:
- `/lib/auth.ts` - Added dynamic trusted origins
- `/better-auth.config.ts` - Updated for CLI compatibility

## Testing

After redeployment:
1. Clear your browser cache and cookies
2. Try logging in with your test credentials:
   - Email: test@test.dk
   - Password: testtest

## If Still Not Working

1. Check Vercel function logs for specific errors
2. Ensure database is accessible from Vercel (check IP whitelisting)
3. Verify all environment variables are properly set in Vercel dashboard