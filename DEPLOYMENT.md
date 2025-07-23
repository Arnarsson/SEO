# AI Growth Advisors - Deployment Guide

## Domain Configuration

Domain: `aigrowthadvisors.cc`

## Environment Variables

Create a `.env.production` file with the following variables:

```bash
# Database (Use a production PostgreSQL database)
DATABASE_URL="postgresql://username:password@your-db-host:5432/aigrowthadvisors"

# Better Auth
BETTER_AUTH_SECRET="generate-a-secure-32-character-secret-key"
NEXT_PUBLIC_APP_URL="https://aigrowthadvisors.cc"

# Email Settings
EMAIL_FROM="hello@aigrowthadvisors.cc"

# Autumn Billing (if using)
AUTUMN_SECRET_KEY="your-production-autumn-api-key"

# Stripe (if using)
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email Service (Resend)
RESEND_API_KEY="re_..."

# AI Providers (add as needed)
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."
GOOGLE_GENERATIVE_AI_API_KEY="..."
PERPLEXITY_API_KEY="pplx-..."

# Environment
NODE_ENV="production"
```

## Deployment Steps

### 1. Vercel Deployment (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel --prod
   ```

3. Configure domain in Vercel dashboard:
   - Add custom domain: `aigrowthadvisors.cc`
   - Add www subdomain: `www.aigrowthadvisors.cc`

4. Set environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add all production environment variables

### 2. Database Setup

1. Create a PostgreSQL database (recommended providers):
   - Neon (https://neon.tech)
   - Supabase (https://supabase.com)
   - Railway (https://railway.app)

2. Run database migrations:
   ```bash
   npm run db:push
   ```

### 3. Email Configuration

1. Set up email domain with Resend:
   - Add domain: `aigrowthadvisors.cc`
   - Verify DNS records
   - Create API key for production

2. Configure SPF, DKIM, and DMARC records for email deliverability

### 4. SSL/HTTPS

- Vercel automatically provides SSL certificates
- Ensure all URLs use HTTPS in production

### 5. Post-Deployment Checklist

- [ ] Test user registration and login
- [ ] Verify email sending (password reset, notifications)
- [ ] Check client portal functionality
- [ ] Test contact forms
- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Test payment integration (if using)
- [ ] Monitor error logs

## Custom Deployment (Alternative)

If deploying to a custom server:

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Use a process manager like PM2:
   ```bash
   pm2 start npm --name "aigrowthadvisors" -- start
   ```

4. Configure Nginx reverse proxy:
   ```nginx
   server {
       listen 80;
       server_name aigrowthadvisors.cc www.aigrowthadvisors.cc;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. Set up SSL with Let's Encrypt:
   ```bash
   sudo certbot --nginx -d aigrowthadvisors.cc -d www.aigrowthadvisors.cc
   ```

## Monitoring

1. Set up error tracking (e.g., Sentry)
2. Configure uptime monitoring
3. Set up Google Analytics or similar
4. Monitor database performance
5. Set up backup strategies

## Security Considerations

1. Keep all dependencies updated
2. Use strong passwords for all services
3. Enable 2FA where available
4. Regularly audit access logs
5. Keep backups of database and environment variables
6. Use rate limiting for API endpoints
7. Implement CORS properly

## Support

For deployment issues, check:
- Vercel logs: `vercel logs`
- Application logs in production
- Database connection status
- Email service status