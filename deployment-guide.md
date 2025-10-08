# Trinity Website Deployment Guide

## Frontend Deployment (Hostinger)

1. **File Manager Upload**:
   - Login to Hostinger → File Manager
   - Navigate to `public_html`
   - Upload all files: index.html, about-us.html, services.html, contact.html, career.html, jobs.html
   - Upload folders: css/, js/, images/, services/

2. **Domain Configuration**:
   - Ensure your domain points to public_html
   - Set index.html as default page

## Backend Deployment Options

### Option A: Hostinger Node.js Hosting
```bash
# 1. Create package.json in your backend folder
npm init -y

# 2. Install dependencies
npm install express cors axios dotenv

# 3. Create .env file with your credentials
CEIPAL_API_KEY=YjRoeE5zeXJuNUV2eHRLdUVTY1JUdz09
CEIPAL_CP_ID=Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09
CEIPAL_TALENTHIRE_HOST=https://talenthire.ceipal.com
PORT=5000

# 4. Upload backend files to Hostinger Node.js app
```

### Option B: External Hosting (Heroku/Railway)
```bash
# Deploy to Railway (Free)
npm install -g @railway/cli
railway login
railway init
railway up
```

### Option C: Serverless Functions
```javascript
// Use Hostinger's serverless functions or Vercel
// Create api/jobs.js
export default async function handler(req, res) {
  // Your CEIPAL API logic here
}
```

## Quick Setup Commands

```bash
# 1. Prepare for deployment
cd trinity-main
zip -r trinity-website.zip . -x "node_modules/*" ".git/*"

# 2. Environment variables for production
echo "CEIPAL_API_KEY=YjRoeE5zeXJuNUV2eHRLdUVTY1JUdz09" > .env
echo "CEIPAL_CP_ID=Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09" >> .env
echo "CEIPAL_TALENTHIRE_HOST=https://talenthire.ceipal.com" >> .env
```

## Update jobs.html for Production

Replace localhost URLs with your actual domain:
```javascript
// Change from:
fetch('http://localhost:5000/api/jobs')

// To:
fetch('https://yourdomain.com/api/jobs')
// or
fetch('/api/jobs') // if backend is on same domain
```