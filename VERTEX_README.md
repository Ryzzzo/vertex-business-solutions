# Vertex - Business Application Developer Portfolio

A sharp, professional showcase website built with geometric precision and the Linear Midnight color palette. Features a stunning constellation effect and minimalist design focused on business application development.

## Design Philosophy

### Linear Midnight Aesthetic
- **Near-black backgrounds** (#0F0F10, #151516)
- **Sharp 90-degree angles** (no rounded corners over 4px)
- **Single accent color** (#61AFEF electric blue)
- **Monochromatic palette** with strategic blue highlights
- **Generous whitespace** and 8px grid system
- **Angular diagonal dividers** between sections

### Key Features
- ✨ Interactive constellation effect (hero section only)
- 🎯 Strategic use of color (blue for CTAs and interactive elements)
- 📐 Geometric shapes and sharp edges throughout
- 🎨 Minimal decoration - structure and typography shine
- ⚡ Fast loading with optimized bundle (172 KB)
- 📱 Fully responsive mobile-first design

## Technology Stack

- **Next.js 14** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **TsParticles** - Constellation effect
- **Inter & DM Sans** - Typography

## Color Palette (Strictly Enforced)

```css
Background Primary:   #0F0F10  /* Near-black */
Background Secondary: #151516  /* Slightly lighter surfaces */
Text Primary:         #EEEFF1  /* Off-white */
Text Secondary:       #44494D  /* Muted gray */
Accent Color:         #61AFEF  /* Electric blue */
Pure White:           #FFFFFF  /* Important headings */
Border Gray:          #44494D  /* Borders and dividers */
```

## Project Structure

```
app/
├── globals.css          # Tailwind + custom utilities
├── layout.tsx           # Root layout with fonts
└── page.tsx             # Main page composition

components/vertex/
├── Navigation.tsx       # Sticky nav with active states
├── HeroSection.tsx      # Hero with constellation
├── ConstellationBackground.tsx  # Particle system
├── ServicesSection.tsx  # 3 service cards
├── PortfolioSection.tsx # Bento grid portfolio
├── TechStackSection.tsx # Tech grid display
├── AboutSection.tsx     # About with stats
├── ContactSection.tsx   # CTA section
└── Footer.tsx           # Simple footer
```

## Sections Overview

### 1. Hero Section
- Full viewport height
- Constellation particle effect (80-100 particles)
- 60/40 split layout
- Two CTAs (primary blue, secondary outline)
- Abstract geometric visualization

### 2. Services
- 3 cards: CRM Systems, Business Dashboards, Workflow Automation
- Sharp rectangular cards with 1px borders
- Hover glow effect with blue accent
- Minimal geometric icons

### 3. Portfolio
- Bento grid layout (asymmetric)
- 3 projects: CRM Dashboard Pro (live link), BI Suite, Inventory System
- Project images, descriptions, tech stacks
- Hover effects with scale and glow

### 4. Tech Stack
- Simple 4-column grid (2 on mobile)
- 12 technologies listed
- Minimal icon placeholders
- Hover color change to blue

### 5. About
- Two-column layout (60/40 split)
- Professional copy focused on business value
- Stats cards: 14+ Years, Charlotte NC, Enterprise Background
- Geometric accent shapes

### 6. Contact/CTA
- Centered layout with gradient background
- Large prominent CTA button
- Email contact link
- Angular diagonal divider

### 7. Footer
- Single line layout
- Copyright and location
- Social links (LinkedIn, GitHub, Upwork)
- Minimal styling

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

### Update Personal Information

**Contact Email** (`components/vertex/ContactSection.tsx`):
```typescript
href="mailto:your@email.com"
```

**Footer Location** (`components/vertex/Footer.tsx`):
```typescript
© 2025 Vertex • Business Application Development • Your City
```

**Social Links** (`components/vertex/Footer.tsx`):
```typescript
href="https://linkedin.com/in/yourprofile"
href="https://github.com/yourusername"
```

### Add Your Projects

Edit `components/vertex/PortfolioSection.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Brief description',
    tech: ['React', 'Node.js'],
    image: 'your-image-url',
    link: 'your-project-url',
    large: true, // spans 2 columns
  },
];
```

### Modify Services

Edit `components/vertex/ServicesSection.tsx`:
```typescript
const services = [
  {
    icon: YourIcon, // from lucide-react
    title: 'Your Service',
    description: 'Service description',
  },
];
```

## Design Principles

### DO's ✅
- Use sharp 90-degree angles
- Maintain 8px grid spacing
- Use electric blue (#61AFEF) for interactivity only
- Keep generous whitespace (60px between sections)
- Use 1px solid borders for elevation
- Keep animations minimal and smooth
- Maintain professional, serious tone

### DON'Ts ❌
- No rounded corners over 4px
- No purple, teal, or cyan (except blue accent)
- No constellation effect outside hero
- No excessive animations or motion
- No decorative elements without purpose
- No cramped layouts

## Performance

- **Bundle Size:** 172 KB total
- **First Load:** Optimized with code splitting
- **Images:** Lazy loaded from Pexels CDN
- **Animations:** Hardware accelerated
- **Mobile:** Responsive with reduced spacing

Expected Lighthouse Scores:
- Performance: 95+
- Accessibility: 95+
- SEO: 100

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions.

Quick deploy to Vercel:
```bash
npm install -g vercel
vercel
```

## Responsive Breakpoints

- Mobile: < 768px
- Desktop: ≥ 768px

Mobile changes:
- Hero: Stacked layout
- Services: Single column
- Portfolio: Single column
- Tech Stack: 2 columns
- About: Single column
- Reduced spacing (40px)

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation
- Focus visible states
- 4.5:1 contrast ratios minimum
- Smooth scroll behavior

## License

Free to use and customize for your portfolio.

## Credits

- Design: Linear/Minimalist aesthetic
- Stock photos: [Pexels](https://pexels.com)
- Icons: [Lucide React](https://lucide.dev)
- Fonts: Inter & DM Sans (Google Fonts)

---

**Built with geometric precision and business focus.** 📐
