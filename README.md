<<<<<<< HEAD
# AI Growth Advisors - AI Brand Visibility Platform

<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjh4N3VwdGw2YXg2ZXpvMHBlNDFlejd1MjBpZXBxNHZ5YXJxOGk5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/x2sTqbCW5m7z0qaNJM/giphy.gif" alt="AI Growth Advisors Demo" width="100%" />

Track how AI models rank your brand against competitors. Get your AI brand monitoring platform running in minutes with authentication, billing, AI chat, and brand monitoring. Zero-config setup with Next.js 15, TypeScript, and PostgreSQL.

![Next.js](https://img.shields.io/badge/Next.js-15.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?style=flat-square&logo=postgresql)

## Features

- 🚀 **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS v4
- 🔐 **Authentication**: Secure client portal with Better Auth
- 💼 **Professional Design**: Clean, corporate design optimized for conversions
- 📊 **Client Dashboard**: Project tracking, resources, and meeting management
- 📧 **Contact Forms**: Lead capture with email notifications
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🎯 **SEO Optimized**: Built-in SEO features for better visibility
- 🔧 **Easy Deployment**: One-click deploy to Vercel

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database
- Domain: aigrowthadvisors.cc

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd ai-growth-advisors

# Copy environment variables
cp .env.example .env.local

# Install dependencies
npm install

# Set up database
npm run db:push

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app!

## Environment Variables

Create a `.env.local` file with:

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/aigrowthadvisors"

# Authentication
BETTER_AUTH_SECRET="your-32-character-secret-key"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Email
EMAIL_FROM="hello@aigrowthadvisors.cc"
RESEND_API_KEY="re_..."

# Optional: AI Providers
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."
```

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── (auth)/          # Authentication pages
│   ├── about/           # About page
│   ├── case-studies/    # Case studies
│   ├── contact/         # Contact form
│   ├── dashboard/       # Client portal
│   ├── resources/       # Resource center
│   ├── services/        # Services pages
│   └── page.tsx         # Homepage
├── components/          # Reusable components
├── lib/                 # Utilities and configurations
└── public/             # Static assets
```

## Key Pages

- **Homepage**: AI consulting value proposition and CTAs
- **Services**: Comprehensive AI solutions overview
- **Case Studies**: Success stories and client results
- **Resources**: Downloadable guides and webinars
- **Contact**: Lead generation form
- **Client Portal**: Secure dashboard for existing clients

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Configure custom domain: aigrowthadvisors.cc

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Database commands
npm run db:generate    # Generate migrations
npm run db:push       # Push schema to database
npm run db:studio     # Open Drizzle Studio
```

## Customization

### Branding
- Logo: Update `/components/logo.tsx`
- Colors: Modify Tailwind config and component styles
- Content: Update text in page components

### Features
- Add new pages in `/app` directory
- Create reusable components in `/components`
- Extend database schema in `/db/schema`

## Tech Stack Details

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth
- **Email**: Resend
- **Deployment**: Vercel

## Support

For issues or questions:
- Check the [deployment guide](./DEPLOYMENT.md)
- Review environment variables
- Ensure database is properly configured

## License

This project is proprietary software for AI Growth Advisors.