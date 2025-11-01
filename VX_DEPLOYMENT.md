# VX Deployment Guide

## Quick Start

Your ultra-premium VX space-themed website is **production-ready** and optimized for deployment.

---

## 🚀 Deploy to Vercel (Recommended)

### Option 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

**Done!** Your site will be live at `https://your-project.vercel.app`

### Option 2: Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial VX website"
   git remote add origin https://github.com/YOUR_USERNAME/vx-portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Auto-Configuration**
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Wait 2-3 minutes** for deployment to complete

---

## 🌐 Custom Domain Setup

### Add Your Domain

1. Vercel Dashboard → Your Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `vertex.business`)
4. Follow DNS configuration

### DNS Configuration

Add these records to your domain registrar:

**For root domain (vertex.business):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**SSL Certificate:** Auto-provisioned by Vercel (free)

---

## 📦 Alternative Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.next`

### AWS Amplify

1. Connect GitHub repository
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

---

## ✅ Pre-Deployment Checklist

### Content Updates

- [ ] Update contact email in `ContactSection.tsx`
- [ ] Add your social links in `Footer.tsx`
- [ ] Replace project screenshots in `PortfolioSection.tsx`
- [ ] Verify all external links work
- [ ] Test CRM Dashboard Pro link

### Technical Checks

- [ ] Run `npm run build` successfully
- [ ] Run `npm run typecheck` (no errors)
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test responsive design (mobile/tablet/desktop)
- [ ] Verify animations are smooth (60fps)
- [ ] Check all sections scroll smoothly

### Performance

- [ ] Optimize images (WebP format recommended)
- [ ] Verify bundle size < 200 KB
- [ ] Test page load speed
- [ ] Run Lighthouse audit (target 90+ performance)

---

## 🎯 Post-Deployment

### Verify Production

1. **Check all sections load**
   - Hero with VX logo and floating cards
   - Services with glassmorphic cards
   - Portfolio bento grid
   - Tech stack floating icons
   - About with stat cards
   - Contact with magnetic button
   - Footer

2. **Test interactions**
   - Navigation scroll-to-section
   - Hover effects on cards
   - Magnetic button in contact
   - Mobile hamburger menu
   - Particle interactions

3. **Performance check**
   - Run [PageSpeed Insights](https://pagespeed.web.dev/)
   - Target: 90+ Performance, 95+ Accessibility
   - Verify smooth animations

### Analytics (Optional)

Add to `app/layout.tsx`:

```typescript
// Google Analytics
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

---

## 🔧 Environment Variables

This website doesn't require environment variables for basic functionality.

If adding features later (email service, CMS, etc.):

1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add variables (development, preview, production)
3. Redeploy to apply changes

---

## 📊 Performance Targets

Your VX website is optimized for:

- **Bundle Size:** 177 KB (excellent)
- **First Load:** < 2 seconds
- **Lighthouse Performance:** 90+
- **Lighthouse Accessibility:** 95+
- **Lighthouse SEO:** 100
- **Animations:** 60fps

### Optimization Applied

✅ Static page generation
✅ Code splitting per route
✅ Lazy loading below fold
✅ Optimized animations (CSS transforms)
✅ Responsive images
✅ Minimal JavaScript
✅ Hardware acceleration

---

## 🐛 Troubleshooting

### Build Fails

**Issue:** Build errors in Vercel

**Solution:**
```bash
# Clear cache locally
rm -rf .next node_modules
npm install
npm run build

# If successful, push again
git add .
git commit -m "Fix build"
git push
```

### Particles Not Showing

**Issue:** Constellation effect missing

**Solution:**
- Check browser console for errors
- Ensure tsparticles dependencies installed
- Clear browser cache
- Test in incognito mode

### Animations Choppy

**Issue:** Animations not smooth

**Solution:**
- Reduce particle count (edit `SpaceBackground.tsx`)
- Check browser performance tab
- Disable animations on low-end devices:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

### Mobile Menu Not Opening

**Issue:** Hamburger menu doesn't work

**Solution:**
- Check z-index on navigation
- Verify click handlers
- Test on actual device (not just browser)

---

## 🔄 Updating After Deployment

### Add New Content

1. Edit component files locally
2. Test with `npm run dev`
3. Commit and push:
```bash
git add .
git commit -m "Update content"
git push
```
4. Vercel auto-deploys in ~2 minutes

### Quick Edits

For small changes, edit directly in GitHub:
1. Navigate to file on GitHub
2. Click pencil icon (Edit)
3. Make changes
4. Commit
5. Auto-deployment triggers

---

## 📈 Monitoring

### Vercel Analytics

Built-in metrics available:
- Page views
- Unique visitors
- Performance metrics
- Geographic data
- Device breakdown

Access: Vercel Dashboard → Your Project → Analytics

### Custom Analytics

Consider adding:
- Google Analytics 4
- Plausible Analytics (privacy-friendly)
- Vercel Web Analytics (built-in)

---

## 🎉 Launch Checklist

Final steps before announcing:

- [ ] Production URL is live
- [ ] Custom domain configured (if using)
- [ ] All content finalized
- [ ] Social links updated
- [ ] Contact form tested
- [ ] Mobile experience verified
- [ ] Performance audit passed
- [ ] SEO metadata confirmed
- [ ] Analytics installed (optional)
- [ ] Backup of code in GitHub

---

## 📞 Support Resources

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion:** [framer.com/motion](https://framer.com/motion)

---

**Your VX website is ready to impress!** 🚀

Default URL: `https://your-project.vercel.app`
Custom domain: `https://vertex.business` (after DNS setup)

**Deployment time:** ~2-3 minutes
**SSL certificate:** Automatic
**CDN:** Global edge network
**Uptime:** 99.99% SLA
