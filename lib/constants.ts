export const NAV_LINKS = [
  { label: 'Work', href: '#challenge' },
  { label: 'Services', href: '#solution' },
  { label: 'About', href: '#results' },
  { label: 'Contact', href: '#contact' },
]

export const PAIN_POINTS = [
  { 
    icon: '⚡', 
    label: 'Slow Load Times', 
    detail: '5.4s average page load on mobile 3G' 
  },
  { 
    icon: '📱', 
    label: 'Poor Mobile UX',  
    detail: 'Tap targets below 44px, causing severe horizontal scroll issues' 
  },
  { 
    icon: '🛒', 
    label: 'Checkout Friction', 
    detail: 'A tedious 6-step checkout funnel with no guest checkout capability' 
  },
  { 
    icon: '📊', 
    label: 'No Funnel Analytics',    
    detail: 'Zero visibility into conversion drops and user checkout abandonment' 
  },
]

export const SOLUTIONS = [
  {
    number: '01',
    title: 'Custom Next.js Storefront',
    body: 'Replaced the legacy Shopify theme with a headless Next.js 14 front-end. App Router, React Server Components (RSC), and streaming SSR deliver sub-second page transitions and zero layout shifts.',
    tags: ['Next.js 14', 'RSC', 'Streaming SSR'],
    visual: '/images/solution-storefront.png',
  },
  {
    number: '02',
    title: 'Optimised Checkout Flow',
    body: 'Rebuilt the shopping checkout from 6 steps down to 2. Includes a modern one-page checkout UI layout, Stripe Payment Element integrations for over 40 payment methods, and automated express guest flows.',
    tags: ['Stripe Integration', 'One-Page Checkout', 'Guest Checkout'],
    visual: '/images/solution-checkout.png',
  },
  {
    number: '03',
    title: 'Headless CMS Content Engine',
    body: 'Integrated Sanity Studio CMS to grant the client total control over product copy, editorial banners, and blog content with absolute real-time previewing. Tailored GROQ query caching replaces standard REST requests.',
    tags: ['Sanity CMS', 'GROQ Caching', 'Live Previews'],
    visual: '/images/solution-cms-code.png',
  },
]

export const STATS = [
  { 
    prefix: '+', 
    value: 40,  
    suffix: '%', 
    label: 'Conversion Increase',  
    detail: 'vs 6-month pre-launch average performance' 
  },
  { 
    prefix: '',  
    value: 2.1, 
    suffix: 's', 
    label: 'LCP Speed Improvement',      
    detail: 'LCP decreased from 3.0s → 0.9s on mobile networks' 
  },
  { 
    prefix: '−', 
    value: 28,  
    suffix: '%', 
    label: 'Lower Bounce Rate',    
    detail: 'Homepage absolute bounce rate dropped 28 full points' 
  },
]

export const TECH_STACK = [
  { name: 'Next.js 14',     category: 'framework' as const },
  { name: 'TypeScript',     category: 'framework' as const },
  { name: 'Tailwind CSS',   category: 'framework' as const },
  { name: 'Stripe',         category: 'payment' as const   },
  { name: 'Sanity',         category: 'cms' as const       },
  { name: 'Vercel',         category: 'hosting' as const   },
  { name: 'Framer Motion',  category: 'framework' as const },
  { name: 'PostgreSQL',     category: 'database' as const  },
]

export const TESTIMONIAL = {
  quote: "Working with this team completely transformed our online revenue funnel. The extreme attention to technical details, obsession with raw speed, and editorial design quality are unlike anything we have ever experienced in the market.",
  author: "Sarah Chen",
  title: "CEO · RetailCo (Anonymised)",
  rating: 5,
}
