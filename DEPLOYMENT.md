# Deployment Guide

## Vercel Deployment

This project is configured for seamless deployment on Vercel with automatic CI/CD from GitHub.

### Automatic Deployment (Recommended)

The project is set up with automatic deployments:

1. **Production**: Pushes to `main` branch automatically deploy to production
2. **Preview**: Pull requests create preview deployments

### Manual Deployment

#### Using Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm install -g vercel
```

2. Deploy to production:
```bash
vercel --prod
```

3. Deploy preview:
```bash
vercel
```

#### Using NPX (without global install)

```bash
# Production deployment
npx vercel --prod --token YOUR_VERCEL_TOKEN

# Preview deployment
npx vercel --token YOUR_VERCEL_TOKEN
```

### Environment Variables

Set these in Vercel Dashboard (Settings → Environment Variables):

#### Required for Production
- `VERCEL_TOKEN` - Your Vercel authentication token
- `VERCEL_TOKEN_NAME` - Token identifier

#### Future Sanity CMS Integration
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Dataset name (usually "production")
- `SANITY_API_TOKEN` - Server-side Sanity API token

### Deployment URLs

- **Production**: https://rum-river-wedding-barn.vercel.app
- **Alternative**: https://rum-river-wedding-barn-ryan-pedersons-projects.vercel.app
- **Dashboard**: https://vercel.com/ryan-pedersons-projects/rum-river-wedding-barn

## Domain Configuration

### Custom Domain Setup

1. Go to Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., `rumriverweddingbarn.com`)
3. Update DNS records:
   - **A Record**: Point to `76.76.21.21`
   - **CNAME**: Point `www` to `cname.vercel-dns.com`

### SSL Certificate

Vercel automatically provisions and renews SSL certificates for all domains.

## Build Configuration

### Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `next dev`

### Node Version
- **Required**: 18.x or higher
- **Recommended**: 20.x LTS

## Performance Optimization

### Edge Functions
The middleware runs at the edge for optimal performance:
- Language detection
- Locale routing
- Redirects

### Static Generation
Pages are pre-rendered at build time for:
- `/en`, `/es`, `/fr` - All locale versions
- Static assets are cached globally

### Image Optimization
- Next.js Image component with automatic optimization
- Configured for Sanity CDN images
- WebP format with fallbacks

## Monitoring

### Analytics
Enable Vercel Analytics in the dashboard:
1. Go to Analytics tab
2. Enable Web Analytics
3. View real-time metrics

### Speed Insights
Monitor Core Web Vitals:
1. Enable Speed Insights
2. Track performance metrics
3. Get optimization suggestions

## Troubleshooting

### Build Failures

1. **TypeScript Errors**
```bash
npm run build
```
Fix any type errors before deploying.

2. **ESLint Issues**
```bash
npm run lint
```
Fix linting issues or update `.eslintrc`.

3. **Missing Dependencies**
```bash
npm install
git add package-lock.json
git commit -m "Update dependencies"
```

### Environment Variables

Verify all required variables are set:
```bash
vercel env pull .env.local
```

### Cache Issues

Clear build cache in Vercel Dashboard:
1. Settings → Data Cache
2. Click "Purge All"

## Rollback

### Via Dashboard
1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Via CLI
```bash
vercel rollback
```

## CI/CD Pipeline

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Support

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **GitHub Issues**: https://github.com/ryanpedersonphotography/rum-river-wedding-barn/issues
- **Vercel Support**: https://vercel.com/support