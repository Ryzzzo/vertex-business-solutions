# SEO Setup Documentation

## Overview
This document explains the sitemap and robots.txt implementation for the Vertex Web Design website, including the rationale behind crawling directives and sitemap priorities.

---

## Files Created

### 1. **app/sitemap.ts**
Generates an XML sitemap at `/sitemap.xml` using Next.js 13+ metadata route handlers.

### 2. **app/robots.ts**
Generates a robots.txt file at `/robots.txt` using Next.js 13+ metadata route handlers.

### 3. **.env** (Updated)
Added `NEXT_PUBLIC_SITE_URL` environment variable for dynamic URL generation.

---

## Sitemap Configuration

### URLs Included & Priority Rationale

| URL | Priority | Change Frequency | Rationale |
|-----|----------|------------------|-----------|
| `/` (Homepage) | 1.0 | Monthly | Highest priority - main entry point with hero section |
| `/#services` | 0.9 | Monthly | Core business offering - critical for conversions |
| `/#portfolio` | 0.9 | Weekly | Updated regularly with new projects - high value for prospects |
| `/#pricing` | 0.9 | Monthly | Key conversion page - prospects looking for cost information |
| `/#about` | 0.8 | Monthly | Important for trust building and company information |
| `/#contact` | 0.8 | Yearly | Static contact information - stable but important |
| `/#tech-stack` | 0.7 | Monthly | Demonstrates capabilities - moderate priority |

### Priority Scale Explained
- **1.0**: Most important page (homepage)
- **0.9**: Critical business pages (services, portfolio, pricing)
- **0.8**: Important supporting pages (about, contact)
- **0.7**: Informational pages (tech stack)

### Change Frequency Strategy
- **Weekly**: Portfolio (regularly updated with new projects)
- **Monthly**: Core business pages (services, pricing, about, tech)
- **Yearly**: Static pages (contact information)

---

## Robots.txt Configuration

### Crawling Rules

#### General Crawlers (`*`)
```
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /*.json$
Disallow: /supabase/
```

#### Googlebot & Bingbot (Specific Rules)
```
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /supabase/
```

### Disallowed Paths Explained

1. **`/api/`** - Backend API routes should not be indexed
2. **`/_next/`** - Next.js internal build files and assets
3. **`/static/`** - Raw static assets (images, fonts, etc.)
4. **`/*.json$`** - JSON data files (not meant for search results)
5. **`/supabase/`** - Database migration files and configurations

### Sitemap Reference
```
Sitemap: https://vertexapps.dev/sitemap.xml
```

---

## Implementation Details

### Why Next.js Metadata Routes?

Instead of static XML/TXT files, we use Next.js 13+ TypeScript files:

**Benefits:**
- ✅ Type-safe implementation
- ✅ Dynamic content generation
- ✅ Automatic format validation
- ✅ Environment-aware URLs
- ✅ Integrated with Next.js routing
- ✅ No manual XML formatting errors

### Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://vertexapps.dev
```

**Production Deployment:** Update this URL to match your production domain.

---

## Accessing the Files

Once deployed, search engines can access:
- **Sitemap:** `https://vertexapps.dev/sitemap.xml`
- **Robots:** `https://vertexapps.dev/robots.txt`

---

## SEO Best Practices Implemented

### ✅ Sitemap Best Practices
- Valid XML structure with proper namespace declarations
- ISO 8601 formatted lastmod dates
- Realistic priority values (avoiding all 1.0)
- Appropriate change frequencies
- All publicly accessible pages included
- Section anchors included for single-page application

### ✅ Robots.txt Best Practices
- Clear user-agent directives
- Explicit allow/disallow rules
- Sitemap location specified
- Protection of sensitive directories
- Specific rules for major search engines

### ✅ Technical SEO
- No duplicate content indexed
- Internal files protected from crawling
- Proper URL canonicalization
- Future-proof with environment variables

---

## Testing & Validation

### Test the Sitemap
```bash
# Visit in browser
https://vertexapps.dev/sitemap.xml

# Validate XML structure
curl https://vertexapps.dev/sitemap.xml | xmllint --format -
```

### Test Robots.txt
```bash
# Visit in browser
https://vertexapps.dev/robots.txt

# Verify syntax
curl https://vertexapps.dev/robots.txt
```

### Search Console Submission

1. **Google Search Console:**
   - Submit sitemap at: `https://search.google.com/search-console`
   - Add property → Sitemaps → Submit sitemap URL

2. **Bing Webmaster Tools:**
   - Submit sitemap at: `https://www.bing.com/webmasters`
   - Add site → Sitemaps → Submit sitemap URL

---

## Maintenance

### When to Update Sitemap

- ✏️ New pages added to the site
- ✏️ Major content updates to existing pages
- ✏️ Changes in page importance/hierarchy
- ✏️ Removal of pages

### When to Update Robots.txt

- ✏️ New directories that should be excluded
- ✏️ Changes in API endpoint structure
- ✏️ Adding/removing specific crawler rules
- ✏️ Domain or sitemap URL changes

---

## Monitoring & Analytics

### Key Metrics to Track

1. **Index Coverage:** Monitor in Google Search Console
2. **Crawl Errors:** Check for 404s and server errors
3. **Sitemap Status:** Verify successful processing
4. **Organic Traffic:** Track search engine referrals

### Recommended Tools

- Google Search Console
- Bing Webmaster Tools
- Google Analytics 4
- Screaming Frog SEO Spider (for audits)

---

## Additional SEO Recommendations

### Metadata Optimization
Consider adding to `app/layout.tsx`:
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URL tags
- Structured data (JSON-LD) for rich snippets

### Performance Optimization
- Image optimization with Next.js Image component
- Lazy loading for below-fold content
- Core Web Vitals monitoring

### Content Strategy
- Regular blog posts or case studies
- Updated portfolio with detailed project descriptions
- Client testimonials with schema markup
- FAQ section for common queries

---

## Support & Resources

- [Next.js Metadata Files Documentation](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Robots.txt Specification](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [XML Sitemaps Protocol](https://www.sitemaps.org/protocol.html)

---

**Last Updated:** December 6, 2025
**Version:** 1.0
**Maintained By:** Development Team
