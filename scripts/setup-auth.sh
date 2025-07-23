#!/bin/bash

echo "🚀 AI Growth Advisors - Authentication Setup Script"
echo "================================================="

# Check if .env.local exists
if [ -f .env.local ]; then
    echo "⚠️  .env.local already exists. Please backup and remove it first."
    exit 1
fi

# Generate secure secret
echo "🔐 Generating secure BETTER_AUTH_SECRET..."
SECRET=$(openssl rand -base64 32)

# Create .env.local
echo "📝 Creating .env.local file..."
cat > .env.local << EOF
# Database (Required)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/aigrowthadvisors"

# Better Auth (Required)
BETTER_AUTH_SECRET="$SECRET"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Email Settings (Required for password reset)
EMAIL_FROM="noreply@aigrowthadvisors.cc"
RESEND_API_KEY=""

# Environment
NODE_ENV="development"

# Optional AI Providers
OPENAI_API_KEY=""
ANTHROPIC_API_KEY=""

# Optional Billing
AUTUMN_SECRET_KEY=""
STRIPE_SECRET_KEY=""
STRIPE_PUBLISHABLE_KEY=""
EOF

echo "✅ .env.local created successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Update DATABASE_URL with your PostgreSQL credentials"
echo "2. Add your RESEND_API_KEY for email functionality"
echo "3. Add any optional API keys as needed"
echo ""
echo "🗄️  Database setup:"
echo "   createdb aigrowthadvisors"
echo "   npm run db:migrate"
echo ""
echo "🏃 Start the development server:"
echo "   npm run dev"
echo ""
echo "🔍 Check auth setup at: http://localhost:3000/api/auth/debug"