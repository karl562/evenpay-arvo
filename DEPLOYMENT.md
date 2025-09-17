# GitHub Pages Deployment Guide

This guide will help you deploy your React app to GitHub Pages for free hosting and testing.

## 🚀 Quick Setup

### 1. Push to GitHub Repository

First, make sure your code is in a GitHub repository:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit"

# Add your GitHub repository as origin (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/evenpay-arvo.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your app when you push to `main` or `master` branch
- Deploy to GitHub Pages
- Provide a public URL at: `https://YOUR_USERNAME.github.io/evenpay-arvo/`

## 📝 Manual Deployment

You can also deploy manually using the provided script:

```bash
# Run the deployment script
./deploy.sh
```

This script will:
- Build your project
- Create/switch to `gh-pages` branch
- Deploy the built files
- Push to GitHub

## 🔧 Configuration Details

### Vite Configuration
The `vite.config.ts` has been updated to handle GitHub Pages deployment:
- Sets the correct base path for production builds
- Maintains local development functionality

### GitHub Actions Workflow
The workflow (`.github/workflows/deploy.yml`):
- Triggers on pushes to main/master branch
- Uses Node.js 18
- Builds the project with `npm run build`
- Deploys to GitHub Pages automatically

## 🌐 Accessing Your Site

After deployment, your site will be available at:
```
https://YOUR_USERNAME.github.io/evenpay-arvo/
```

**Note:** It may take a few minutes for changes to appear after deployment.

## 🛠️ Troubleshooting

### Common Issues

1. **404 Error on GitHub Pages**
   - Make sure GitHub Pages is enabled in repository settings
   - Check that the workflow completed successfully in the Actions tab

2. **Build Fails**
   - Check the Actions tab for error details
   - Ensure all dependencies are listed in `package.json`

3. **Assets Not Loading**
   - The base path is automatically configured for GitHub Pages
   - If issues persist, check browser console for 404 errors

### Manual Deployment Issues

1. **Permission Denied on deploy.sh**
   ```bash
   chmod +x deploy.sh
   ```

2. **Git Branch Issues**
   - The script will create a `gh-pages` branch automatically
   - Make sure you have committed your changes before running

## 🔄 Development Workflow

1. Make changes to your code
2. Test locally with `npm run dev`
3. Commit and push to main branch
4. GitHub Actions will automatically deploy
5. Check your live site at the GitHub Pages URL

## 📊 Monitoring Deployments

- View deployment status in the **Actions** tab of your GitHub repository
- Each deployment creates a new commit in the `gh-pages` branch
- Check the **Environments** section in your repo for deployment history

## 🎯 Next Steps

- **Custom Domain**: You can add a custom domain in GitHub Pages settings
- **HTTPS**: GitHub Pages provides HTTPS by default
- **Analytics**: Consider adding Google Analytics or similar tracking
- **Performance**: Use Lighthouse to optimize your site performance

Happy deploying! 🚀
