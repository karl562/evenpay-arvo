#!/bin/bash

# Simple deployment script for GitHub Pages
# This script builds the project and pushes to gh-pages branch

set -e

echo "🚀 Starting deployment process..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Please initialize git first."
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: You have uncommitted changes. Consider committing them first."
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deployment cancelled."
        exit 1
    fi
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
NODE_ENV=production npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

# Deploy to gh-pages branch
echo "📤 Deploying to gh-pages branch..."

# Create a temporary directory for gh-pages
TEMP_DIR=$(mktemp -d)
cp -r dist/* "$TEMP_DIR"

# Switch to gh-pages branch (create if it doesn't exist)
git checkout gh-pages 2>/dev/null || git checkout -b gh-pages

# Clear current contents (except .git)
find . -maxdepth 1 ! -name '.git' ! -name '.' -exec rm -rf {} \;

# Copy built files
cp -r "$TEMP_DIR"/* .

# Add .nojekyll file to prevent Jekyll processing
touch .nojekyll

# Add all files and commit
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

# Push to origin
echo "⬆️  Pushing to GitHub..."
git push origin gh-pages

# Switch back to main branch
git checkout main 2>/dev/null || git checkout master 2>/dev/null || echo "Could not switch back to main branch"

# Clean up
rm -rf "$TEMP_DIR"

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://$(git config --get remote.origin.url | sed 's/.*github.com[:/]\([^/]*\)\/\([^.]*\).*/\1.github.io\/\2/')/"
echo "📝 Note: It may take a few minutes for GitHub Pages to update."
