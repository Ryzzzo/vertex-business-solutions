# Quick Start - Vertex Portfolio

## Immediate Actions

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 2. Customize Your Info

**Email** (`components/vertex/ContactSection.tsx` line ~50):
```typescript
href="mailto:ryan@vertex.dev"  // Change to your email
```

**Footer** (`components/vertex/Footer.tsx` line ~9):
```typescript
© 2025 Vertex • Business Application Development • Charlotte, NC
// Update location and year
```

**Social Links** (`components/vertex/Footer.tsx` lines ~14-28):
```typescript
href="#"  // Add your LinkedIn URL
href="#"  // Add your GitHub URL
href="#"  // Add your Upwork URL
```

### 3. Add Your Projects

Edit `components/vertex/PortfolioSection.tsx` (lines ~7-37):

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief description (1-2 sentences)',
    tech: ['React', 'TypeScript', 'Node.js'],
    image: 'https://your-image-url.com/image.jpg',
    link: 'https://your-project-url.com',
    large: true, // true = spans 2 columns, false = 1 column
  },
  // Add more projects...
];
```

### 4. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login and deploy
vercel

# Production deployment
vercel --prod
```

Or use Vercel dashboard:
1. Push to GitHub
2. Import repository at [vercel.com](https://vercel.com)
3. Click Deploy

## Design System Reference

### Colors
```css
#0F0F10  /* Background Primary */
#151516  /* Background Secondary */
#EEEFF1  /* Text Primary */
#44494D  /* Text Secondary */
#61AFEF  /* Accent Blue (CTAs only) */
#FFFFFF  /* Pure White (headings) */
```

### Spacing
- Sections: 60px vertical
- Cards: 30-40px padding
- Gaps: 8px increments
- Max width: Container auto

### Border Radius
- Maximum: 4px
- Typically: 2px (rounded-sm)
- Buttons: 2px

## File Structure

```
components/vertex/
├── Navigation.tsx       # Top nav bar
├── HeroSection.tsx      # Hero + constellation
├── ServicesSection.tsx  # 3 service cards
├── PortfolioSection.tsx # Project grid
├── TechStackSection.tsx # Technology list
├── AboutSection.tsx     # About + stats
├── ContactSection.tsx   # CTA section
└── Footer.tsx           # Footer
```

## Common Customizations

### Change Service Offerings
`components/vertex/ServicesSection.tsx`:
```typescript
const services = [
  {
    icon: YourIcon, // from lucide-react
    title: 'Service Name',
    description: 'What you offer',
  },
];
```

### Add Technologies
`components/vertex/TechStackSection.tsx`:
```typescript
const technologies = [
  { name: 'Technology Name', category: 'Frontend' },
  // Add more...
];
```

### Update About Section
`components/vertex/AboutSection.tsx`:
- Lines 18-24: Main copy
- Lines 28-48: Stats cards

## Build Commands

```bash
# Development
npm run dev

# Type check
npm run typecheck

# Build for production
npm run build

# Start production server
npm start
```

## Troubleshooting

**Particles not showing?**
- Clear browser cache
- Check console for errors
- Ensure tsparticles installed: `npm install`

**Build fails?**
- Run `npm install` to ensure all dependencies
- Check Node.js version (16+ required)
- Run `npm run typecheck` for TypeScript errors

**Images not loading?**
- Verify image URLs are accessible
- Check network tab in dev tools
- Replace with your own hosted images

## Performance Tips

✅ Already optimized:
- 172 KB bundle size
- Static page generation
- Lazy loading images
- Minimal animations
- Code splitting

## Browser Testing

Test in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile (iOS Safari, Chrome Android)

## Responsive Breakpoint

- Mobile: < 768px
- Desktop: ≥ 768px

Mobile automatically stacks all layouts.

## Support Resources

- **Full docs:** See VERTEX_README.md
- **Deployment:** See DEPLOYMENT.md
- **Implementation:** See VERTEX_IMPLEMENTATION.md

---

**You're ready to launch!** 🚀

Your professional portfolio is production-ready and optimized.
