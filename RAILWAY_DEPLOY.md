# 🚀 Railway Deployment Guide

This portfolio is ready for deployment on Railway! Follow these steps to deploy your React portfolio.

## 📋 Prerequisites

1. **Railway Account**: Sign up at [railway.app](https://railway.app)
2. **GitHub Repository**: Push your code to GitHub
3. **Node.js 18+**: Ensure your local environment matches

## 🔧 Deployment Methods

### Method 1: GitHub Integration (Recommended)

1. **Connect Repository**
   ```bash
   # Push your code to GitHub first
   git add .
   git commit -m "Railway deployment ready"
   git push origin main
   ```

2. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - Click "Start a New Project"
   - Select "Deploy from GitHub repo"
   - Choose your portfolio repository
   - Railway will automatically detect it's a Node.js project

3. **Environment Variables** (Optional)
   - In Railway dashboard, go to your project
   - Click "Variables" tab
   - Add any needed environment variables

### Method 2: Railway CLI

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Deploy**
   ```bash
   railway login
   railway init
   railway up
   ```

## 📁 Files Created for Railway

- `railway.json` - Railway configuration
- `nixpacks.toml` - Build configuration
- `server.js` - Express server to serve React build
- `Dockerfile` - Container configuration
- `.dockerignore` - Docker ignore rules
- `.env.example` - Environment variables template

## 🔄 Build Process

Railway will automatically:
1. Install dependencies (`npm ci`)
2. Build React app (`npm run build`)
3. Start Express server (`npm start`)

## 🌐 Custom Domain (Optional)

1. In Railway dashboard, go to your service
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm start
```

## 📊 Monitoring

- **Health Check**: Available at `/api/health`
- **Logs**: View in Railway dashboard
- **Metrics**: Available in Railway dashboard

## 🔧 Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs in Railway dashboard

### App Won't Start
- Ensure `PORT` environment variable is used
- Check server logs for errors
- Verify `build` folder exists after build

### 404 Errors on Refresh
- The Express server handles this with catch-all route
- Ensure `server.js` is properly configured

## 🚀 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Railway project created
- [ ] Build completed successfully
- [ ] App accessible via Railway URL
- [ ] All routes working (including refresh)
- [ ] Environment variables set (if needed)
- [ ] Custom domain configured (optional)

## 📞 Support

- **Railway Docs**: [docs.railway.app](https://docs.railway.app)
- **Railway Discord**: [railway.app/discord](https://railway.app/discord)

Your portfolio is now Railway-ready! 🎉
