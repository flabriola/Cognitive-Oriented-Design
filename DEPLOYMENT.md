# 🚀 GitHub Pages Deployment Guide

## Quick Setup

### 1. Enable GitHub Pages
1. Go to your repository settings
2. Scroll down to "Pages" section
3. Under "Source", select "GitHub Actions"

### 2. Push Your Code
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 3. Automatic Deployment
- The GitHub Action will automatically run on every push to main branch
- Your site will be available at: `https://[username].github.io/Cognitive-Oriented-Design/`

## Manual Deployment (if needed)
```bash
npm run deploy
```

## Configuration Files

### Vite Config
- Base path is set to `/Cognitive-Oriented-Design/` for GitHub Pages
- Builds to `dist/` folder

### GitHub Actions
- Automatically builds and deploys on push to main
- Uses Node.js 18
- Caches npm dependencies for faster builds

## Troubleshooting

### Common Issues
1. **Build fails**: Check the Actions tab for error logs
2. **Site not loading**: Ensure base path matches repository name
3. **Assets not loading**: Verify all SVG files are committed

### Check Deployment Status
1. Go to Actions tab in your repository
2. Look for "Deploy to GitHub Pages" workflow
3. Check if it completed successfully

## Custom Domain (Optional)
If you want a custom domain:
1. Add CNAME file to `public/` folder
2. Configure DNS settings
3. Update base path in `vite.config.ts` 