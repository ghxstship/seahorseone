# Fathom Production Studios

A modern, immersive website for Fathom Production Studios - an experiential design and production house specializing in:

- **Experiential Marketing** - Brand activations, pop-up experiences, and immersive campaigns
- **Immersive Entertainment** - Festival stages, installations, and interactive experiences  
- **Creative Multimedia** - Content production, digital experiences, and technical production

## 🌊 Design Philosophy

The design draws inspiration from deep-sea exploration and bioluminescence, creating a dark, atmospheric aesthetic that reflects the studio's approach to creating immersive experiences. The color palette features:

- Deep ocean blues and blacks for depth
- Bioluminescent teals and cyans for accent
- Warm coral tones for contrast

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd fathom-studios

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
fathom-studios/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and Tailwind imports
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Main homepage
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WorkSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── SonarPing.tsx
│   │       └── BioluminescentField.tsx
│   └── lib/
│       └── constants.ts     # Colors, services, projects data
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🎨 Features

- **Immersive Hero** - Animated bioluminescent particles and sonar ping effects
- **Featured Work** - Project showcase with hover interactions
- **Services Grid** - Six service categories with depth-based theming
- **About Section** - Company values and statistics
- **Contact Form** - Multi-select service inquiry form
- **Responsive Design** - Fully responsive across all devices
- **Smooth Scrolling** - Section-based navigation with smooth scroll

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS animations + Framer Motion ready
- **TypeScript**: Full type safety

## 📝 Customization

### Colors

Edit the color palette in `src/lib/constants.ts`:

```typescript
export const colors = {
  biolumeTeal: '#00D4AA',
  // ... other colors
};
```

### Services

Update service offerings in `src/lib/constants.ts`:

```typescript
export const services = [
  {
    id: 'brand-identity',
    name: 'BRAND IDENTITY',
    // ... service details
  },
  // ... other services
];
```

### Projects

Add or modify projects in `src/lib/constants.ts`:

```typescript
export const projects = [
  {
    id: 'project-1',
    title: 'PROJECT NAME',
    // ... project details
  },
];
```

## 🚢 Deployment

Build for production:

```bash
npm run build
npm start
```

The site is ready for deployment to Vercel, Netlify, or any Node.js hosting platform.

## 📄 License

© 2024 Fathom Production Studios. All rights reserved.
