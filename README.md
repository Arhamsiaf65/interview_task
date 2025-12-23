# Setapp Landing Page

A pixel-perfect recreation of the Setapp landing page built with React, TypeScript, Vite, and Tailwind CSS.

##  Features

- **Responsive Design** - Fully responsive layout optimized for all screen sizes
- **Modern Stack** - Built with React 19, TypeScript, and Tailwind CSS 4
- **Fast Development** - Vite for lightning-fast HMR and builds
- **Type Safety** - Full TypeScript support throughout the codebase
- **Component-Based** - Modular, reusable React components
- **Custom Animations** - Dynamic carousels and interactive elements
- **SVG Graphics** - Custom shapes and curved text using SVG paths

##  Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

##  Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Hero.tsx                # Hero section with floating stickers
│   ├── ExploreSetapp.tsx       # Feature grid section
│   ├── SectionHeader.tsx       # Reusable section header
│   ├── SectionFooter.tsx       # Reusable CTA footer
│   ├── TestimonialCarousel.tsx # Video testimonial carousel
│   ├── SocialTestimonials.tsx  # Social media testimonials
│   ├── CTASection.tsx          # Call-to-action section
│   └── Footer.tsx              # Site footer
├── App.tsx                     # Main app component
├── index.css                   # Global styles
└── main.tsx                    # App entry point
```

## Components Overview

### Header
- Logo and navigation
- Language selector
- CTA buttons

### Hero Section
- Central logo
- Headline and pricing
- Floating stickers with custom shapes
- App store buttons

### Explore Setapp
- Feature grid with 3 cards
- Dynamic layouts per card
- App screenshots and icons

### Testimonial Carousel
- Video testimonials
- Navigation controls
- Dot indicators

### Social Testimonials
- Social media testimonials grid
- Carousel navigation
- Platform-specific styling

### Footer
- Multi-column navigation
- Newsletter signup
- Social media links
- Legal information

## 🚢 Deployment

### Vercel
The project includes a `vercel.json` configuration for easy deployment:

```bash
# Deploy to Vercel
vercel
```

### Other Platforms
Build the project and deploy the `dist` folder:

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

##  Development Notes

- Uses Tailwind CSS 4 with the new Vite plugin
- Custom SVG paths for unique shapes and curved text
- Frame images for special sticker designs
- State management with React hooks
- TypeScript for type safety

##  Known Issues

- Vercel deployment may require custom build configuration due to permissions
- Solution: Uses `node node_modules/vite/bin/vite.js build` in vercel.json

##  License

This project is for interview purposes.

##  Contributing

This is a demonstration project. Feel free to fork and modify for your own use.

