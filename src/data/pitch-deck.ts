export interface Slide {
    id: string;
    title: string;
    subtitle?: string;
    content: string[];
    accentText?: string;
    type: "cover" | "text" | "grid" | "product" | "market" | "team";
    background?: string;
}

export const PITCH_DECK_CONTENT: Slide[] = [
    {
        id: "intro",
        title: "TIKIPAL",
        subtitle: "Nightlife Connectivity, Perfected.",
        accentText: "THE FUTURE OF PREMIUM EXPERIENCES",
        content: ["Redefining how LatAm's elite discovers and books the best moments."],
        type: "cover"
    },
    {
        id: "problem",
        title: "The Problem",
        subtitle: "Fragmentation & Friction",
        content: [
            "Reservations are stuck in WhatsApp (manual, slow, unreliable).",
            "Lack of a centralized, premium discovery platform.",
            "Opaque pricing and 'right of admission' uncertainty.",
            "No digital ticket standard for high-end venues."
        ],
        type: "grid"
    },
    {
        id: "solution",
        title: "The Solution",
        subtitle: "Seamless Liquid Experience",
        content: [
            "Curated discovery of the best spots in the city.",
            "Instant booking with guaranteed admission logic.",
            "Liquid Glass UX: A design language that feels as premium as the venues.",
            "Unified digital identity for high-end nightlife."
        ],
        type: "grid"
    },
    {
        id: "product",
        title: "The Product",
        subtitle: "Liquid UI for Liquid Moments",
        content: [
            "Ultra-glass aesthetics with real-time feedback.",
            "Dynamic booking calendars and tier selection.",
            "Liquid Tickets: Secure, beautiful, and scannable QR vouchers."
        ],
        type: "product"
    },
    {
        id: "market",
        title: "Market Opportunity",
        subtitle: "LatAm's Premium Sector is Untapped",
        content: [
            "TAM: $25B+ LatAm Nightlife & Hospitality Market.",
            "SAM: $2.4B focus on High-End Entertainment in major hubs.",
            "Expanding from Bogotá to Mexico City, Miami, and Madrid."
        ],
        type: "market"
    },
    {
        id: "business",
        title: "Business Model",
        subtitle: "Scalable Revenue Streams",
        accentText: "PROFITABLE FROM DAY 1",
        content: [
            "Booking Commission: fee per successful reservation.",
            "Venue SaaS: Premium tools for tables and guestlist management.",
            "Partnerships: Exclusive brand activations within the platform."
        ],
        type: "grid"
    },
    {
        id: "traction",
        title: "Current Progress",
        subtitle: "Built for Scale",
        content: [
            "Full React/Next.js stack with premium Framer Motion animations.",
            "Scalable design system (Liquid Glass rollout complete).",
            "Multi-language support (ES/EN) for global expansion.",
            "Ready for high-traffic event launches."
        ],
        type: "text"
    },
    {
        id: "why-now",
        title: "Why Now?",
        subtitle: "The Digital Shift",
        content: [
            "The post-delivery era: users want premium real-life experiences.",
            "High-end venues are desperate for data and automation.",
            "Mobile-first economy: users demand an 'Uber-like' ease for booking tables."
        ],
        type: "text"
    },
    {
        id: "team",
        title: "The Team",
        subtitle: "Engineering & Design Excellence",
        content: [
            "Camilo A. - Founder & Product Visionary.",
            "Antigravity AI - Engineering Lead.",
            "Expertise in ultra-modern UI, high-performance systems, and scalable growth."
        ],
        type: "team"
    },
    {
        id: "ask",
        title: "The Ask",
        subtitle: "Scale the Experience",
        accentText: "LET'S BUILD THE NEXT LATAM UNICORN",
        content: [
            "We are seeking partners to launch the V1 beta across primary venues.",
            "Goal: 50k active monthly users within the first 12 months.",
            "Join us in redefining the premium digital landscape."
        ],
        type: "cover"
    }
];
