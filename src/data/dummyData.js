// Dummy product requests
export const productRequests = [
  {
    id: 1,
    title: "PlayStation 5 Digital Edition",
    description: "Looking for a new PlayStation 5 Digital Edition. Must be new, sealed in the box.",
    image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt62f273308b28a582/63dd258cabe5af0455108a88/ps5-console.jpg",
    budget: "$450",
    location: "New York, NY",
    deliveryPreference: "Pickup or delivery",
    postedDate: "2 hours ago",
    offers: 8,
    bestPrice: "$439.99",
    user: {
      name: "Michael Chen",
      avatar: "https://i.pravatar.cc/150?img=11",
      rating: 4.8
    }
  },
  {
    id: 2,
    title: "Apple MacBook Pro M3 Pro",
    description: "Searching for the best deal on a MacBook Pro with M3 Pro chip, 16GB RAM, 512GB SSD.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2626&auto=format&fit=crop",
    budget: "$1,800",
    location: "San Francisco, CA",
    deliveryPreference: "Delivery only",
    postedDate: "5 hours ago",
    offers: 6,
    bestPrice: "$1,749.99",
    user: {
      name: "Sophia Park",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 4.9
    }
  },
  {
    id: 3,
    title: "Dyson V15 Detect Vacuum",
    description: "Looking for the best deal on a new Dyson V15 Detect vacuum cleaner with all attachments.",
    image: "https://m.media-amazon.com/images/I/51S21ptM4FL._AC_UF894,1000_QL80_.jpg",
    budget: "$650",
    location: "Chicago, IL",
    deliveryPreference: "Pickup preferred",
    postedDate: "1 day ago",
    offers: 12,
    bestPrice: "$599.99",
    user: {
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=8",
      rating: 4.7
    }
  },
  {
    id: 4,
    title: "Sony 65\" OLED TV",
    description: "Need a Sony 65\" OLED TV (model A95K or newer). Must be in perfect condition.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2670&auto=format&fit=crop",
    budget: "$2,000",
    location: "Austin, TX",
    deliveryPreference: "Delivery with installation",
    postedDate: "3 days ago",
    offers: 5,
    bestPrice: "$1,899.99",
    user: {
      name: "Olivia Martinez",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 4.6
    }
  },
];

// Dummy sellers/offers
export const sellerOffers = [
  {
    id: 1,
    seller: {
      name: "ElectroHub",
      avatar: "https://i.pravatar.cc/150?img=50",
      rating: 4.9,
      responseTime: "15 min",
      verified: true,
      location: "Brooklyn, NY"
    },
    price: "$439.99",
    deliveryEstimate: "Next day delivery",
    bonus: "Free 1-year extended warranty",
    condition: "New, sealed",
    productRequestId: 1
  },
  {
    id: 2,
    seller: {
      name: "TechVillage",
      avatar: "https://i.pravatar.cc/150?img=51",
      rating: 4.7,
      responseTime: "25 min",
      verified: true,
      location: "Queens, NY"
    },
    price: "$445.00",
    deliveryEstimate: "Same day delivery",
    bonus: "Free PlayStation game",
    condition: "New, sealed",
    productRequestId: 1
  },
  {
    id: 3,
    seller: {
      name: "GameStop",
      avatar: "https://i.pravatar.cc/150?img=52",
      rating: 4.5,
      responseTime: "40 min",
      verified: true,
      location: "New York, NY"
    },
    price: "$449.99",
    deliveryEstimate: "2-day delivery",
    bonus: "25% off next purchase",
    condition: "New, sealed",
    productRequestId: 1
  },
  {
    id: 4,
    seller: {
      name: "AppleAuthReseller",
      avatar: "https://i.pravatar.cc/150?img=53",
      rating: 4.9,
      responseTime: "10 min",
      verified: true,
      location: "Palo Alto, CA"
    },
    price: "$1,749.99",
    deliveryEstimate: "Next day delivery",
    bonus: "Free Apple Care (6 months)",
    condition: "New, factory sealed",
    productRequestId: 2
  },
];

// Competitor data for Why Us page
export const competitorData = [
  {
    name: "Traditional Marketplaces",
    founded: "~2000-2005",
    model: "Seller-centric listings",
    pros: ["Established brands", "Large seller base"],
    cons: ["Buyers must search extensively", "Favors large sellers", "Limited local options"],
    priceComparison: "Often 5-15% higher",
    userExperience: 3.5
  },
  {
    name: "Group Buying Apps",
    founded: "~2015-2020",
    model: "Bulk discount focus",
    pros: ["Occasional great deals", "Social component"],
    cons: ["Limited selection", "Time-restricted deals", "Quality concerns"],
    priceComparison: "Variable, sometimes lower",
    userExperience: 3.8
  },
  {
    name: "Deal Finders",
    founded: "~2010-2015",
    model: "Aggregated listings",
    pros: ["Compares multiple sites", "Price alerts"],
    cons: ["No direct purchasing", "Limited to online stores", "Many expired deals"],
    priceComparison: "Same as retailers",
    userExperience: 3.7
  },
  {
    name: "BestzDeal",
    founded: "2025",
    model: "Buyer requests, sellers compete",
    pros: ["Personalized offers", "Local & online options", "Save time searching", "Support small businesses"],
    cons: ["New platform (growing)"],
    priceComparison: "Average 12% lower",
    userExperience: 4.9
  }
];

// Roadmap phases for Future page
export const roadmapPhases = [
  {
    phase: "Phase 1: MVP (Current)",
    timeline: "2025 Q2",
    features: [
      "Web app for buyers to post requests",
      "Sellers respond with offers manually",
      "Basic offer comparison",
      "Location-based matching"
    ],
    goal: "Validate core concept of reverse marketplace"
  },
  {
    phase: "Phase 2: Enhanced Engagement",
    timeline: "2025 Q3-Q4",
    features: [
      "Direct messaging between buyers and sellers",
      "Automated matching algorithm",
      "Seller dashboard and analytics",
      "Push notifications",
      "Mobile-responsive improvements"
    ],
    goal: "Improve user experience and engagement"
  },
  {
    phase: "Phase 3: Monetization & Security",
    timeline: "2026 Q1-Q2",
    features: [
      "Secure in-app payment processing",
      "Escrow service for high-value transactions",
      "Delivery tracking integration",
      "Buyer protection program",
      "Seller verification tiers",
      "Premium subscription for sellers"
    ],
    goal: "Build trust and establish revenue streams"
  },
  {
    phase: "Phase 4: Expansion",
    timeline: "2026 Q3-2027",
    features: [
      "Native mobile apps (iOS/Android)",
      "AI-powered deal matcher",
      "Product recommendation engine",
      "Group buying option",
      "International expansion",
      "API for third-party integration"
    ],
    goal: "Scale platform and enhance with advanced technology"
  }
];

// Demo steps for Demo page
export const demoSteps = [
  {
    id: 1,
    title: "Post Your Request",
    description: "Enter product details, budget, location, and preferences. Add a photo or link to the exact item.",
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f2?q=80&w=2670&auto=format&fit=crop",
    icon: "📋"
  },
  {
    id: 2,
    title: "Sellers Compete",
    description: "Verified local and online sellers see your request and respond with their best offers.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
    icon: "🏆"
  },
  {
    id: 3,
    title: "Compare Offers",
    description: "Review all offers in one place - compare prices, delivery times, seller ratings, and bonuses.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    icon: "⚖️"
  },
  {
    id: 4,
    title: "Accept Best Deal",
    description: "Choose the offer that works best for you and complete the purchase directly with the seller.",
    image: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?q=80&w=2670&auto=format&fit=crop",
    icon: "🤝"
  }
];

// Pitch deck data for Pitch Deck page
export const pitchDeckData = {
  vision: "Create a marketplace where shops find buyers, not the other way around.",
  traction: {
    users: "1,500+ early sign-ups",
    sellers: "120+ interested sellers",
    avgSavings: "12% average savings in test markets",
    timeReduction: "85% reduction in shopping research time"
  },
  marketSize: {
    tam: "$5.7 trillion U.S. retail market",
    sam: "$1.2 trillion for applicable product categories",
    som: "$300 million target in year 3 (0.025% market share)"
  },
  businessModel: [
    "Free for buyers",
    "Freemium model for sellers (basic listing + premium subscription)",
    "5% transaction fee on completed deals",
    "Premium seller features: $49/month"
  ],
  team: [
    {
      name: "Alex Rivera",
      title: "CEO & Co-Founder",
      background: "Ex-Amazon, MIT CS Graduate"
    },
    {
      name: "Jordan Chen",
      title: "CTO & Co-Founder",
      background: "Former Google, Stanford AI Research"
    },
    {
      name: "Mia Washington",
      title: "COO",
      background: "Ex-Shopify, Retail Optimization Expert"
    }
  ],
  investment: {
    round: "Seed Round",
    raising: "$2.5 million",
    valuation: "$15 million cap",
    use: [
      "Product development (40%)",
      "Marketing & user acquisition (30%)",
      "Operations & team expansion (20%)",
      "Reserve (10%)"
    ]
  }
};

// Testimonials
export const testimonials = [
  {
    id: 1,
    quote: "I saved $350 on my new laptop and didn't have to spend hours comparing prices online!",
    author: "Thomas K.",
    location: "Denver, CO",
    role: "Buyer",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 2,
    quote: "As a small electronics shop, BestzDeal helps me connect with serious buyers directly. My conversion rate is much higher than on other platforms.",
    author: "Sarah L.",
    location: "Portland, OR",
    role: "Seller - TechCorner",
    avatar: "https://i.pravatar.cc/150?img=25"
  },
  {
    id: 3,
    quote: "I was skeptical at first, but the offers came in quickly and I got a better price than anywhere online.",
    author: "Marcus J.",
    location: "Atlanta, GA",
    role: "Buyer",
    avatar: "https://i.pravatar.cc/150?img=32"
  }
];
