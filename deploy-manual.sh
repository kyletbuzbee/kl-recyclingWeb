#!/bin/bash

echo "🏗️  Building K&L Recycling Website..."
npm run build

echo "📁 Creating deployment directory..."
mkdir -p dist

echo "📄 Copying HTML pages..."
cp -r .next/server/pages/*.html dist/

echo "📦 Copying Next.js static assets..."
cp -r .next/static dist/_next/

echo "🖼️  Copying public assets..."
cp -r public/* dist/ 2>/dev/null || true

echo "🎯 Creating 404 fallback..."
cp dist/index.html dist/404.html 2>/dev/null || true

echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d dist -t true

echo "✅ Deployment complete!"
echo "🌐 Your website is live at: https://kyletbuzbee.github.io/kl-recyclingWeb/"
