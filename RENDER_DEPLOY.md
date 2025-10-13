# 🚀 Render Deployment Guide

Your portfolio is now **Render-ready**! Follow this guide to deploy your React portfolio on Render.

## 📋 Prerequisites

1. **Render Account**: Sign up at [render.com](https://render.com)
2. **GitHub Repository**: Push your code to GitHub
3. **Node.js 18+**: Ensure compatibility

## 🔧 Deployment Methods

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Render deployment ready"
   git push origin main
   ```

2. **Create Web Service on Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your portfolio repository

3. **Configure Build Settings**
   ```
   Name: samuel-portfolio
   Environment: Node
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

4. **Advanced Settings**
   ```
   Node Version: 18
   Health Check Path: /api/health
   Auto-Deploy: Yes (recommended)
   ```

### Method 2: Infrastructure as Code

Use the included `render.yaml` file:

1. **Fork/Import Repository**
   - In Render dashboard, click "New +" → "Blueprint"
   - Connect your repository
   - Render will automatically use `render.yaml` configuration

## 📁 Render-Specific Files Created

- **`render.yaml`** - Infrastructure as code configuration
- **`server.js`** - Optimized Express server with security headers
- **Updated `package.json`** - Render-specific scripts

## 🔄 Build Process

Render will automatically:
1. **Install Dependencies**: `npm install`
2. **Build React App**: `npm run build`
3. **Start Server**: `npm start`
4. **Health Checks**: Monitor `/api/health`

## 🌐 Environment Variables

Set these in Render dashboard if needed:

```bash
NODE_ENV=production
REACT_APP_API_URL=https://your-api.render.com
# Add any other environment variables
```

## 🔒 Security Features

Your deployment includes:
- **Security Headers**: X-Frame-Options, X-Content-Type-Options
- **Static File Caching**: 1-year cache for optimal performance
- **Health Monitoring**: Built-in health check endpoint
- **HTTPS**: Automatic SSL certificate

## 🌍 Custom Domain

1. **In Render Dashboard**:
   - Go to your service → "Settings"
   - Scroll to "Custom Domains"
   - Add your domain

2. **DNS Configuration**:
   ```
   Type: CNAME
   Name: www (or @)
   Value: your-app-name.onrender.com
   ```

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

## 📊 Monitoring & Logs

- **Health Check**: `https://your-app.onrender.com/api/health`
- **Logs**: Available in Render dashboard
- **Metrics**: CPU, Memory, Response times in dashboard
- **Uptime**: Automatic monitoring and alerts

## 🔧 Troubleshooting

### Build Fails (npm ci issues)
If you get `npm ci` errors about lockfile sync:

```bash
# Option 1: Use the fix script
node fix-dependencies.js

# Option 2: Manual fix
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run build
```

### Build Fails (General)
```bash
# Check Node.js version
node --version  # Should be 18+

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### App Won't Start
- Verify `build` folder exists after build
- Check server logs in Render dashboard
- Ensure all dependencies are in `package.json`

### 404 on Page Refresh
- Express server handles SPA routing automatically
- Check `server.js` catch-all route is working

### Slow Performance
- Static files are cached for 1 year
- Use Render's CDN for better global performance
- Consider upgrading to paid plan for better resources

## 💰 Render Plans

- **Free Tier**: 
  - 750 hours/month
  - Sleeps after 15 minutes of inactivity
  - Perfect for portfolios

- **Paid Plans**: 
  - Always-on services
  - Custom domains
  - Better performance

## 🚀 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Render service created
- [ ] Build completed successfully
- [ ] Health check passing
- [ ] All routes working (test navigation)
- [ ] Environment variables set (if needed)
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active

## 📞 Support Resources

- **Render Docs**: [render.com/docs](https://render.com/docs)
- **Community**: [community.render.com](https://community.render.com)
- **Status Page**: [status.render.com](https://status.render.com)

## 🎯 Performance Tips

1. **Enable Compression**: Already configured in server
2. **Static Asset Caching**: Configured for 1 year
3. **Health Monitoring**: Use `/api/health` for uptime monitoring
4. **CDN**: Consider Render's CDN for global performance

Your portfolio is now **Render-ready**! 🎉

The deployment will be live at: `https://your-app-name.onrender.com`
