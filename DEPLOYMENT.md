# Vercel Deployment Guide

## Prerequisites
- GitHub account (recommended)
- Vercel account (free tier works fine)

## Option 1: Deploy via Vercel Dashboard (Recommended for beginners)

### Step 1: Push to GitHub
```bash
# If you haven't already, initialize git and push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Import Project to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js

### Step 3: Configure Environment Variables
In Vercel project settings, add these environment variables (if you're using Supabase):

- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_KEY` - Your Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY` - (Optional) Your Supabase service role key

Note: If you're not using Supabase yet, the app will still work - it will just log to console.

### Step 4: Deploy
Click "Deploy" - Vercel will:
- Install dependencies
- Run `next build`
- Deploy your site

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# From your project root
vercel
```

Follow the prompts:
- Link to existing project or create new
- Confirm settings
- Set environment variables when prompted

### Step 4: Production Deploy
```bash
vercel --prod
```

## Post-Deployment

### Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain

### Environment Variables
- Update them in Vercel dashboard: Project Settings → Environment Variables
- Redeploy after changes

### Monitoring
- Check deployment logs in Vercel dashboard
- Monitor errors and analytics

## Troubleshooting

### Build Errors
- Check Next.js version compatibility
- Verify all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### Environment Variables Not Working
- Make sure they're set for "Production", "Preview", and "Development"
- Redeploy after adding variables
- Check variable names match exactly (case-sensitive)

### API Routes Not Working
- Verify environment variables are set
- Check Vercel function logs
- Ensure API routes are in `app/api/` directory

