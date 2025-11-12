# Hostinger Deployment Guide - Trinity Ceipal Integration

## 🚀 Quick Fix Steps

### 1. Test Ceipal Connection Locally
```bash
node test-ceipal.js
```

### 2. Upload Files to Hostinger
Upload these files to your Hostinger hosting:
- `hostinger-deploy.js` (main server file)
- `api/jobs.js` (API endpoint)
- `trinity-website-875b5b.webflow.io/` (entire folder)
- `package.json`
- `.env`

### 3. Hostinger Configuration

#### Option A: Node.js Hosting (Recommended)
1. Set main file to: `hostinger-deploy.js`
2. Set Node.js version: 18 or higher
3. Install dependencies: `npm install`
4. Start command: `node hostinger-deploy.js`

#### Option B: Static Hosting + Serverless
1. Upload `trinity-website-875b5b.webflow.io/` to public_html
2. Create serverless function for `/api/jobs`
3. Use the iframe approach in jobs.html

### 4. Environment Variables
Set these in Hostinger control panel:
```
CEIPAL_API_KEY=YjRoeE5zeXJuNUV2eHRLdUVTY1JUdz09
CEIPAL_CP_ID=Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09
CEIPAL_TALENTHIRE_HOST=https://talenthire.ceipal.com
PORT=3000
```

## 🔧 Troubleshooting

### Issue: Jobs not showing
1. Check if iframe loads: Open browser dev tools → Network tab
2. Test API directly: `https://yourdomain.com/api/jobs`
3. Verify Ceipal credentials in dashboard

### Issue: CORS errors
- Ensure API has proper CORS headers
- Check if domain is whitelisted in Ceipal

### Issue: 500 errors
- Check server logs in Hostinger
- Verify all dependencies are installed
- Test locally first

## 📋 Verification Checklist

- [ ] Website loads at your domain
- [ ] Jobs page shows Ceipal iframe
- [ ] API endpoint `/api/jobs` returns data
- [ ] No console errors in browser
- [ ] Mobile responsive design works

## 🆘 Emergency Fallback

If Ceipal API fails, the system will show sample jobs. Update `api/jobs.js` with your actual job listings as fallback data.

## 📞 Support

If issues persist:
1. Check Hostinger error logs
2. Test with `node test-ceipal.js`
3. Verify Ceipal account status
4. Contact Ceipal support for API issues