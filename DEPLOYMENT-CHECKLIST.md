# AI Growth Advisors - Deployment Checklist

## ✅ Local Testing Results

- [x] Homepage loads correctly with title "AI Growth Advisors - Transform Your Business with AI"
- [x] All main pages are accessible:
  - /services ✓
  - /about ✓
  - /contact ✓
  - /case-studies ✓
  - /resources ✓
- [x] Development server runs without errors
- [x] Logo displays correctly
- [x] Navigation works properly

## 📋 Pre-Deployment Checklist

### 1. Environment Variables
Create these in Vercel dashboard under Project Settings > Environment Variables:

```bash
# Required
DATABASE_URL="your-production-postgres-url"
BETTER_AUTH_SECRET="generate-32-char-secret"
NEXT_PUBLIC_APP_URL="https://aigrowthadvisors.cc"

# Email (Required for contact form)
EMAIL_FROM="hello@aigrowthadvisors.cc"
RESEND_API_KEY="your-resend-api-key"

# Optional AI Providers
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."
```

### 2. Database Setup
- [ ] Create PostgreSQL database (Neon, Supabase, or Railway recommended)
- [ ] Update DATABASE_URL with production connection string
- [ ] Run migrations after first deployment: `npm run db:push`

### 3. Email Configuration (Resend)
- [ ] Sign up at https://resend.com
- [ ] Add domain: aigrowthadvisors.cc
- [ ] Verify DNS records (SPF, DKIM, DMARC)
- [ ] Generate API key and add to environment variables

### 4. Domain Configuration
- [ ] Purchase/configure aigrowthadvisors.cc domain
- [ ] In Vercel: Add custom domain
- [ ] Configure DNS records to point to Vercel

### 5. Git Repository
```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: AI Growth Advisors website"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/ai-growth-advisors.git
git push -u origin main
```

### 6. Deploy to Vercel

#### Option A: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts and add environment variables
```

#### Option B: Via Vercel Dashboard
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables
5. Deploy

### 7. Post-Deployment Verification
- [ ] Visit production URL
- [ ] Test all pages load correctly
- [ ] Submit contact form test
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate is active
- [ ] Test client portal login/registration

### 8. DNS Records for Email
Add these to your domain DNS:

```
Type  Name    Value
TXT   @       v=spf1 include:resend.com ~all
CNAME resend._domainkey    [value from Resend]
TXT   _dmarc  v=DMARC1; p=none; rua=mailto:hello@aigrowthadvisors.cc
```

## 🚀 Ready for Deployment!

The site has been tested locally and is ready for production deployment. Follow the checklist above to ensure smooth deployment.

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Ensure database connection is working
4. Check browser console for client-side errors