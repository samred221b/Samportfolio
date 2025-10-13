#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing dependency issues...');

try {
  // Remove existing node_modules and package-lock.json
  console.log('🧹 Cleaning up existing files...');
  
  if (fs.existsSync('node_modules')) {
    console.log('Removing node_modules...');
    execSync('rm -rf node_modules', { stdio: 'inherit' });
  }
  
  if (fs.existsSync('package-lock.json')) {
    console.log('Removing package-lock.json...');
    fs.unlinkSync('package-lock.json');
  }
  
  // Clear npm cache
  console.log('🧹 Clearing npm cache...');
  execSync('npm cache clean --force', { stdio: 'inherit' });
  
  // Install dependencies
  console.log('📦 Installing fresh dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Test build
  console.log('🔨 Testing build process...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ Dependencies fixed successfully!');
  console.log('🚀 Your project is ready for deployment!');
  
} catch (error) {
  console.error('❌ Error fixing dependencies:', error.message);
  process.exit(1);
}
