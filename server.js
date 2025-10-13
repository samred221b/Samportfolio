const express = require('express');
const path = require('path');
const app = express();

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Serve static files from the React app build directory with caching
app.use(express.static(path.join(__dirname, 'build'), {
  maxAge: '1y',
  etag: false
}));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Use Render's PORT environment variable or default to 3000
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${port}`);
  console.log(`📱 Portfolio is live at http://localhost:${port}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
