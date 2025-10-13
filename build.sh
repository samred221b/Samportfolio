#!/bin/bash

# Render Build Script for Samuel's Portfolio
echo "🚀 Starting Render build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production=false

# Build React application
echo "🔨 Building React application..."
npm run build

# Verify build directory exists
if [ -d "build" ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build directory created with $(ls -1 build | wc -l) files"
else
    echo "❌ Build failed - build directory not found"
    exit 1
fi

echo "🎉 Ready for deployment!"
