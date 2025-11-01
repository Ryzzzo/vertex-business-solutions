# Deployment Guide

## Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier available at [vercel.com](https://vercel.com))

### Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit - Vertex portfolio"
```

2. Create a new repository on GitHub

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/vertex-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

#### Option A: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **vertex-portfolio** (or your preferred name)
   - In which directory is your code located? **./**
   - Want to override settings? **N**

5. For production deployment:
```bash
vercel --prod
```

#### Option B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in

2. Click "Add New Project"

3. Import your GitHub repository

4. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (auto-configured)
   - **Output Directory:** .next (auto-configured)
   - **Install Command:** `npm install` (auto-configured)

5. Click "Deploy"

6. Wait 2-3 minutes for deployment to complete

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project settings

2. Navigate to "Domains"

3. Add your custom domain:
   - Enter domain name (e.g., `vertex.dev`)
   - Follow DNS configuration instructions

4. Vercel will automatically provision SSL certificate

### Environment Variables

This project doesn't require environment variables for basic functionality. If you add features later that need them:

1. Go to Project Settings → Environment Variables in Vercel
2. Add your variables
3. Redeploy the project

## Deploy to Other Platforms

### Netlify

1. Connect your GitHub repository

2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Base directory:** (leave empty)

3. Deploy

### AWS Amplify

1. Connect repository

2. Build settings:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Post-Deployment Checklist

- [ ] Verify all sections load correctly
- [ ] Test navigation links
- [ ] Check constellation effect in hero section
- [ ] Test responsive design on mobile
- [ ] Verify all images load
- [ ] Test external project links
- [ ] Check performance with Lighthouse
- [ ] Update contact email in ContactSection.tsx
- [ ] Add real social media links in Footer.tsx

## Performance Optimization

Your site is already optimized with:
- ✅ Static page generation
- ✅ Optimized bundle size (172 KB total)
- ✅ Image optimization via Pexels CDN
- ✅ Code splitting
- ✅ Minimal animations for performance

Expected Lighthouse scores:
- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

## Troubleshooting

### Build fails on Vercel

1. Check that all dependencies are in package.json
2. Ensure Node.js version is compatible (16.x or higher)
3. Check build logs for specific errors

### Particles don't show

1. Clear browser cache
2. Check console for JavaScript errors
3. Ensure tsparticles dependencies installed

### Images not loading

1. Verify Pexels URLs are accessible
2. Replace with your own hosted images if needed
3. Check network tab in browser dev tools

## Updating After Deployment

1. Make changes locally
2. Test with `npm run dev`
3. Commit changes: `git commit -am "Update message"`
4. Push to GitHub: `git push`
5. Vercel will automatically redeploy

## DNS Configuration

If using custom domain, add these records to your DNS:

**For root domain (vertex.dev):**
- Type: A
- Name: @
- Value: 76.76.21.21

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

## Monitoring

Vercel provides built-in:
- Real-time deployment logs
- Analytics (page views, performance)
- Error tracking
- Build history

Access these in your Vercel dashboard.

---

**Your site is now live!** 🚀

Default Vercel URL: `https://vertex-portfolio.vercel.app`

Custom domain (if configured): `https://yourdomain.com`
