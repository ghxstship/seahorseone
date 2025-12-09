// Deep Sea Color Palette
export const colors = {
  // Core depths
  surfaceAzure: '#0A4D68',
  twilightIndigo: '#0D2137',
  midnightAbyss: '#080B12',
  hadalVoid: '#030508',
  
  // Bioluminescence
  biolumeTeal: '#00D4AA',
  phosphorCyan: '#7FEFEF',
  
  // Accent organisms
  coralBone: '#E8DED0',
  abyssalOrange: '#FF6B35',
  kelpGold: '#C9A227',
  depthViolet: '#6B5B95',
  squidPink: '#E8A0BF',
  sturgeonSilver: '#8FA3AD',
  
  // Functional
  pressureBlue: '#1E3A5F',
  mantaSlate: '#2D3E4A'
};

// Service categories (replacing species)
export const services = [
  {
    id: 'brand-identity',
    name: 'BRAND IDENTITY',
    tagline: 'Define what cannot be forgotten.',
    color: colors.biolumeTeal,
    description: 'Visual Identity & Brand Systems',
    fullDescription: 'We craft brand identities that become inevitable. From strategic positioning to visual systems, we build the foundational layer that everything else rests upon. Identity systems so perfectly evolved they become eternal.',
    capabilities: ['Brand strategy & positioning', 'Visual identity systems', 'Typography & iconography', 'Brand guidelines', 'Naming & verbal identity'],
    signature: 'When a brand feels inevitable.',
    depth: 'Foundation Layer',
    icon: 'Fingerprint'
  },
  {
    id: 'digital-experience',
    name: 'DIGITAL EXPERIENCE',
    tagline: 'Design what cannot be ignored.',
    color: colors.kelpGold,
    description: 'Web, Mobile & Interactive Design',
    fullDescription: 'Every interaction serves purpose. Every system flows invisibly. We create digital experiences where technology becomes invisible and the experience feels organic.',
    capabilities: ['Website & microsite design', 'Mobile app design', 'UI/UX systems', 'Interactive installations', 'Web3 & immersive builds'],
    signature: 'When technology disappears.',
    depth: 'Interface Layer',
    icon: 'Globe'
  },
  {
    id: 'content-production',
    name: 'CONTENT PRODUCTION',
    tagline: 'Capture what cannot be replicated.',
    color: colors.abyssalOrange,
    description: 'Photo, Video & Cinematography',
    fullDescription: 'We capture myth itself. Creates legacy. Freezes the impossible into art. From editorial photography to cinematic video production, we document moments that become immortal.',
    capabilities: ['Editorial & lifestyle photography', 'Cinematic video production', 'Drone & aerial cinematography', 'Documentary storytelling', 'Motion graphics & animation'],
    signature: 'When the moment becomes immortal.',
    depth: 'Multimedia Layer',
    icon: 'Camera'
  },
  {
    id: 'experiential-design',
    name: 'EXPERIENTIAL DESIGN',
    tagline: 'Shape what cannot be described.',
    color: colors.sturgeonSilver,
    description: 'Spatial & Environmental Design',
    fullDescription: 'We shape the flow of space itself. Where environment becomes emotion. From pop-up activations to permanent installations, we architect journeys that transform.',
    capabilities: ['Spatial design & flow mapping', 'Guest journey architecture', 'Experiential environment design', 'Wayfinding systems', 'Multi-sensory installations'],
    signature: 'When space becomes emotion.',
    depth: 'Environment Layer',
    icon: 'Box'
  },
  {
    id: 'fabrication',
    name: 'FABRICATION',
    tagline: 'Build what cannot be imagined.',
    color: colors.squidPink,
    description: 'Set Design & Custom Builds',
    fullDescription: 'Raw materials transform into the impossible. Concepts become monuments. From scenic construction to custom furniture, we bridge the gap between blueprint and reality.',
    capabilities: ['Scenic & set construction', 'Custom furniture design', 'Prop creation & styling', 'Modular environments', 'Touring structures'],
    signature: 'When imagination becomes structure.',
    depth: 'Scenic Layer',
    icon: 'Hammer'
  },
  {
    id: 'technical-production',
    name: 'TECHNICAL PRODUCTION',
    tagline: 'Create what cannot be unseen.',
    color: colors.depthViolet,
    description: 'Audio, Video, Lighting & SFX',
    fullDescription: 'At the deepest layer, sensation is everything. Sound vibrates through pressure. Light becomes memory. This is total sensory immersion—where the room exhales with you.',
    capabilities: ['Audio engineering & sound design', 'Lighting systems & programming', 'Video mapping & projection', 'Special effects: fog, pyro, lasers', 'Immersive multi-sensory programming'],
    signature: 'When the room exhales with you.',
    depth: 'Sensory Layer',
    icon: 'Lightbulb'
  }
];

// Featured projects
export const projects = [
  {
    id: 'project-1',
    title: 'NEON DEPTHS',
    client: 'Immersive Art Collective',
    category: 'Experiential Installation',
    year: '2024',
    description: 'A 10,000 sq ft immersive art experience exploring bioluminescence in the deep ocean.',
    services: ['Experiential Design', 'Technical Production', 'Fabrication'],
    color: colors.biolumeTeal,
    featured: true
  },
  {
    id: 'project-2',
    title: 'AURORA LAUNCH',
    client: 'Tech Startup',
    category: 'Brand Activation',
    year: '2024',
    description: 'Product launch experience featuring holographic displays and interactive installations.',
    services: ['Brand Identity', 'Digital Experience', 'Technical Production'],
    color: colors.abyssalOrange,
    featured: true
  },
  {
    id: 'project-3',
    title: 'PRESSURE POINT',
    client: 'Music Festival',
    category: 'Stage Design',
    year: '2023',
    description: 'Main stage design and production for a 50,000 person electronic music festival.',
    services: ['Fabrication', 'Technical Production', 'Content Production'],
    color: colors.depthViolet,
    featured: true
  },
  {
    id: 'project-4',
    title: 'DEEP CURRENT',
    client: 'Luxury Brand',
    category: 'Pop-up Experience',
    year: '2023',
    description: 'Multi-city touring pop-up experience for a luxury fashion brand launch.',
    services: ['Experiential Design', 'Brand Identity', 'Fabrication'],
    color: colors.kelpGold,
    featured: false
  },
  {
    id: 'project-5',
    title: 'BIOLUME',
    client: 'Museum',
    category: 'Permanent Installation',
    year: '2023',
    description: 'Interactive permanent exhibit exploring marine biology through immersive technology.',
    services: ['Digital Experience', 'Technical Production', 'Content Production'],
    color: colors.phosphorCyan,
    featured: false
  },
  {
    id: 'project-6',
    title: 'HADAL',
    client: 'Corporate',
    category: 'Conference Experience',
    year: '2024',
    description: 'Complete conference transformation including staging, content, and experiential zones.',
    services: ['Experiential Design', 'Technical Production', 'Brand Identity'],
    color: colors.squidPink,
    featured: true
  }
];

// Navigation items
export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

// Company info
export const companyInfo = {
  name: 'FVTHOM Production Studios',
  tagline: 'Experiential Design · Immersive Production · Creative Multimedia',
  description: 'We create immersive experiences that transform spaces, captivate audiences, and leave lasting impressions.',
  email: 'discovery@fvthom.pro',
  phone: '(407) 885-6011',
  address: 'Tampa, FL',
  social: {
    instagram: '@fvthom.pro',
    linkedin: 'fvthom-production-studios',
    vimeo: 'fvthomstudios'
  }
};
