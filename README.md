# Rum River Wedding Barn

A modern, multi-lingual wedding venue website built with Next.js 15, TypeScript, and Tailwind CSS. Deployed on Vercel with automatic CI/CD.

## 🌐 Live Site

- **Production**: [https://rum-river-wedding-barn.vercel.app](https://rum-river-wedding-barn.vercel.app)
- **GitHub**: [https://github.com/ryanpedersonphotography/rum-river-wedding-barn](https://github.com/ryanpedersonphotography/rum-river-wedding-barn)

## ✨ Features

- **Multi-lingual Support**: English, Spanish, and French with automatic language detection
- **Modern Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Performance**: Server-side rendering and static generation for optimal performance
- **Responsive Design**: Mobile-first approach with beautiful UI on all devices
- **CMS Ready**: Pre-configured for Sanity CMS integration
- **SEO Optimized**: Built-in SEO best practices with internationalization support

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ryanpedersonphotography/rum-river-wedding-barn.git
cd rum-river-wedding-barn
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local` with your values

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
rum-river-wedding-barn/
├── src/
│   ├── app/
│   │   ├── [locale]/        # Internationalized routes
│   │   │   ├── layout.tsx   # Root layout with i18n provider
│   │   │   └── page.tsx     # Home page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   └── layout/          # Layout components
│   ├── i18n/                # Internationalization config
│   │   ├── config.ts        # Language configuration
│   │   └── request.ts       # Next-intl request config
│   ├── messages/            # Translation files
│   │   ├── en.json         # English translations
│   │   ├── es.json         # Spanish translations
│   │   └── fr.json         # French translations
│   ├── lib/                # Utility functions
│   ├── types/              # TypeScript types
│   ├── hooks/              # Custom React hooks
│   └── utils/              # Helper functions
├── public/                 # Static assets
├── .env.example           # Environment variables template
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🌍 Internationalization

The site supports three languages:
- English (`/en`)
- Spanish (`/es`)
- French (`/fr`)

### Adding a New Language

1. Add the locale to `src/i18n/config.ts`:
```typescript
export const locales = ['en', 'es', 'fr', 'de'] as const;
```

2. Create a translation file in `src/messages/`:
```json
// src/messages/de.json
{
  "common": {
    "welcome": "Willkommen bei Rum River Wedding Barn"
  }
}
```

3. Update the locale names in `src/i18n/config.ts`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🚢 Deployment

### Vercel (Recommended)

The site is configured for automatic deployment to Vercel:

1. Push changes to the `main` branch
2. Vercel automatically builds and deploys

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
```

### Environment Variables

Required environment variables for production:

- `VERCEL_TOKEN` - Vercel authentication token
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID (when integrated)
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset name
- `SANITY_API_TOKEN` - Sanity API token for write operations

## 🎨 Styling

The project uses Tailwind CSS for styling:

- Utility-first CSS framework
- Responsive design utilities
- Custom theme configuration in `tailwind.config.ts`
- Global styles in `src/app/globals.css`

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration with i18n support
- `tailwind.config.ts` - Tailwind CSS theme customization
- `tsconfig.json` - TypeScript compiler options
- `.prettierrc` - Code formatting rules
- `eslint.config.mjs` - Linting rules

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Rum River Wedding Barn.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
- Internationalization with [next-intl](https://next-intl-docs.vercel.app/)

## 📞 Support

For support, please contact the development team or open an issue on GitHub.

---

Made with ❤️ for Rum River Wedding Barn
