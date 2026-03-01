export type ServiceItem = {
  slug: string;
  title: string;
  thumbnail?: string;
  description: string;
  features: string[];
  images?: string[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  description: string;
  items: ServiceItem[];
};




export const services: ServiceCategory[] = [
  {
    slug: "commercial-printing",
    title: "Commercial Printing",
    description: "High-quality printing solutions for business and promotional materials.",
    items: [
      {
        slug: "pamphlets",
        title: "Pamphlets",
        thumbnail: "/images/pamphlet/1.png",
        description: "Professional pamphlet printing with sharp color reproduction.",
        features: ["Premium paper stock", "Matte & gloss finish", "Bulk printing support"],
        images: ["/images/pamphlet/1.png", "/images/pamphlet/2.png", "/images/pamphlet/3.png"]
      },
      {
        slug: "flyers",
        title: "Flyers",
        thumbnail: "/images/flyer/1.png",
        description: "High-impact flyers for promotions and events.",
        features: ["Multiple size options", "High-resolution printing", "Fast turnaround"],
        images:["/images/flyer/1.png", "/images/flyer/2.png", "/images/flyer/3.png"]
      },
      {
        slug: "visiting-card",
        title: "Visiting Card",
        thumbnail: "/images/visitingCard/1.png",
        description: "Custom business cards with professional design.",
        features: ["Premium card stock", "Double-sided printing", "Custom finishes"],
        images:["/images/visitingCard/1.png", "/images/visitingCard/2.png", "/images/visitingCard/3.png"]
      },
      {
        slug: "inserts",
        title: "Inserts",
        thumbnail: "/images/insert/1.png",
        description: "Informative inserts for brochures and mailings.",
        features: ["Custom sizes", "High-quality paper", "Full-color printing"],
        images:["/images/insert/1.png", "/images/insert/2.png", "/images/insert/3.png"]
      },
      {
        slug: "letterhead",
        title: "Letterhead",
        thumbnail: "/images/letterHead/1.png",
        description: "Professional letterheads for corporate correspondence.",
        features: ["Custom branding", "Premium paper", "Matching envelopes"],
        images:["/images/letterHead/1.png", "/images/letterHead/2.png", "/images/letterHead/3.png"]
      },
    ],
  },
  {
    slug: "packaging-label-printing",
    title: "Packaging & Label Printing",
    description: "Durable packaging and labeling solutions for retail products.",
    items: [
      {
        slug: "box-packaging",
        title: "Box Packaging",
        thumbnail: "/images/boxPackeging/1.png",
        description: "Custom printed packaging for premium presentation.",
        features: ["Rigid & folding boxes", "High-strength material", "Luxury finish options"],
        images:["/images/boxPackeging/1.png", "/images/boxPackeging/2.png", "/images/boxPackeging/3.png"]
      },
      {
        slug: "stickers",
        title: "Stickers",
        thumbnail: "/images/sticker/1.png",
        description: "Custom stickers for branding and product labels.",
        features: ["Durable vinyl", "Full-color printing", "Cut-to-shape options"],
        images: ["/images/sticker/1.png", "/images/sticker/2.png", "/images/sticker/3.png"]
      },
      {
        slug: "carton",
        title: "Carton",
        thumbnail: "/images/carton/1.png",
        description: "High-quality cartons for shipping and packaging needs.",
        features: ["Corrugated material", "Custom sizes", "Printed branding"],
        images:["/images/carton/1.png", "/images/carton/2.png", "/images/carton/3.png"]
      },
    ],
  },
  {
    slug: "event-occasion-printing",
    title: "Event & Occasion Printing",
    description: "Elegant printing solutions for weddings, invitations, and events.",
    items: [
      {
        slug: "wedding-cards",
        title: "Wedding Cards",
        thumbnail: "/images/weddingCard/1.png",
        description: "Elegant wedding cards with customizable designs.",
        features: ["Luxury finishes", "Custom artwork", "Envelopes included"],
        images: ["/images/weddingCard/1.png", "/images/weddingCard/2.png", "/images/weddingCard/3.png"],
      },
      {
        slug: "event-passes",
        title: "Event Passes",
        thumbnail: "/images/eventPass/1.png",
        description: "Durable passes for conferences, concerts, and events.",
        features: ["Custom sizes", "High-resolution printing", "Secure material options"],
        images: ["/images/eventPass/1.png", "/images/eventPass/2.png", "/images/eventPass/3.png"],
      },
    ],
  },
];



export type RecentWorkItem = {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  servicesUsed: string[];
  images: string[];
  completedAt: string;
};

export const recentWorks: RecentWorkItem[] = [
  {
    slug: "luxury-wedding-suite",
    title: "Luxury Wedding Invitation Suite",
    category: "event-occasion-printing",
    thumbnail: "/images/weddingCard/1.png",
    description:
      "Premium layered wedding invitation set with gold foil detailing and embossed typography.",
    servicesUsed: ["wedding-cards"],
    images: [
      "/images/weddingCard/1.png",
      "/images/weddingCard/2.png",
      "/images/weddingCard/3.png",
    ],
    completedAt: "2024-09-18",
  },
  {
    slug: "organic-product-packaging",
    title: "Organic Product Packaging Design",
    category: "packaging-label-printing",
    thumbnail: "/images/boxPackeging/1.png",
    description:
      "Eco-friendly rigid box packaging with custom branding and durable sticker labels.",
    servicesUsed: ["box-packaging", "stickers"],
    images: [
      "/images/boxPackeging/1.png",
      "/images/boxPackeging/2.png",
      "/images/sticker/1.png",
    ],
    completedAt: "2025-01-05",
  },
  {
    slug: "corporate-event-kit",
    title: "Corporate Event Branding Kit",
    category: "event-occasion-printing",
    thumbnail: "/images/eventPass/1.png",
    description:
      "Complete event branding solution including event passes, flyers, and inserts.",
    servicesUsed: ["event-passes", "flyers", "inserts"],
    images: [
      "/images/eventPass/1.png",
      "/images/flyer/1.png",
      "/images/insert/1.png",
    ],
    completedAt: "2025-02-10",
  },
  {
    slug: "premium-business-identity",
    title: "Premium Business Identity Package",
    category: "commercial-printing",
    thumbnail: "/images/visitingCard/1.png",
    description:
      "Professional corporate identity printing including visiting cards and letterheads.",
    servicesUsed: ["visiting-card", "letterhead"],
    images: [
      "/images/visitingCard/1.png",
      "/images/letterHead/1.png",
      "/images/letterHead/2.png",
    ],
    completedAt: "2024-11-22",
  },
  {
    slug: "retail-carton-branding",
    title: "Retail Carton Branding Project",
    category: "packaging-label-printing",
    thumbnail: "/images/carton/1.png",
    description:
      "Custom printed corrugated cartons with reinforced structure and full-color branding.",
    servicesUsed: ["carton"],
    images: [
      "/images/carton/1.png",
      "/images/carton/2.png",
      "/images/carton/3.png",
    ],
    completedAt: "2024-12-15",
  },
  {
    slug: "festival-promo-campaign",
    title: "Festival Promotional Campaign Print",
    category: "commercial-printing",
    thumbnail: "/images/flyer/1.png",
    description:
      "High-volume promotional print campaign including flyers, pamphlets, and inserts.",
    servicesUsed: ["flyers", "pamphlets", "inserts"],
    images: [
      "/images/flyer/1.png",
      "/images/pamphlet/1.png",
      "/images/insert/2.png",
    ],
    completedAt: "2025-01-28",
  },
];