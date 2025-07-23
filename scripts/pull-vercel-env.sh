#!/bin/bash

echo "🔄 Pulling environment variables from Vercel..."
echo "============================================="

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm i -g vercel
fi

# Pull environment variables
echo "📥 Pulling environment variables..."
vercel env pull .env.local

if [ -f .env.local ]; then
    echo "✅ Successfully pulled environment variables to .env.local"
    echo ""
    echo "📋 Next steps:"
    echo "1. Run 'npm install' to install dependencies"
    echo "2. Run 'npm run dev' to start the development server"
    echo "3. Test login at http://localhost:3000/login"
    echo ""
    echo "🔍 Debug endpoints:"
    echo "   - http://localhost:3000/api/auth/debug"
    echo "   - http://localhost:3000/api/auth/session"
else
    echo "❌ Failed to pull environment variables"
    echo "Please make sure you're logged in to Vercel CLI"
    echo "Run: vercel login"
fi