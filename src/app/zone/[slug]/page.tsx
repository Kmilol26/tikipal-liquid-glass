"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ZoneHeroCard } from "@/components/zone/ZoneHeroCard";
import { ZoneInfo } from "@/components/zone/ZoneInfo";
import { SiteCard } from "@/components/zone/SiteCard";
import { EventCard } from "@/components/zone/EventCard";
import { useParams } from "next/navigation";

// Mock data for zones
const ZONE_DATA: Record<string, {
    title: string;
    badgeNumber?: string;
    eventCount: number;
    description: string;
    images: string[];
}> = {
    "zona-t": {
        title: "Zona T",
        eventCount: 42,
        description: "Explora, reserva y disfruta los mejores planes en la Zona T con Tikipal. ¡El epicentro de la gastronomía, la moda y el entretenimiento en Bogotá!",
        images: [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=80"
        ]
    },
    "zona-galerias": {
        title: "Zona Galerias",
        eventCount: 28,
        description: "Explora, reserva y disfruta los mejores planes en Zona Galerias con Tikipal. ¡Tradición y ambiente cultural en el corazón de Bogotá!",
        images: [
            "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=400&auto=format&fit=crop&q=80"
        ]
    },
    "calle-85": {
        title: "Zona Calle 85",
        badgeNumber: "85",
        eventCount: 85,
        description: "Explora, reserva y disfruta los mejores planes en la Calle 85 con Tikipal. ¡Lo mejor del norte de Bogotá!",
        images: [
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&auto=format&fit=crop&q=80"
        ]
    },
    "calle-93": {
        title: "Calle 93",
        badgeNumber: "93",
        eventCount: 56,
        description: "Explora, reserva y disfruta los mejores planes en la Calle 93 con Tikipal. ¡Centro financiero y parques icónicos!",
        images: [
            "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1200&auto=format&fit=crop&q=80"
        ]
    },
    "zona-cedritos": {
        title: "Zona Cedritos",
        eventCount: 34,
        description: "Explora, reserva y disfruta los mejores planes en Cedritos con Tikipal. ¡Residencial con amplia oferta comercial!",
        images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&auto=format&fit=crop&q=80"
        ]
    },
    "en-tendencia": {
        title: "En Tendencia",
        eventCount: 120,
        description: "Los imperdibles de la ciudad. Descubre los lugares más populares y los eventos más esperados de Bogotá.",
        images: [
            "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=400&auto=format&fit=crop&q=80"
        ]
    }
};

// Mock sites data
const MOCK_SITES = [
    { id: "saint-tropez", title: "Saint Tropez", genres: ["Electronica", "Reggaeton", "Crossover"], address: "Cl 84A # 12-25", price: "20.000", image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&auto=format&fit=crop&q=80" },
    { id: "toni-k-bar", title: "Toni-k Bar", genres: ["Ranchera", "Electronica", "Reggaeton"], address: "Cr 85 #11-53", price: "20.000", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80" },
    { id: "tabu-studio", title: "Tabu Studio Bar", genres: ["Champeta", "House", "Electronica"], address: "Cr 85 #11-53", price: "25.000", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=80" },
    { id: "octava-club", title: "Octava Club", genres: ["Electronica", "Reggaeton", "Crossover"], address: "Cl 84A # 12-25", price: "30.000", image: "/images/octava_club.png" },
    { id: "video-club", title: "Video Club", genres: ["Techno", "House", "Electronica"], address: "Chapinero", price: "25.000", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&auto=format&fit=crop&q=80" },
    { id: "theatron", title: "Theatron", genres: ["Pop", "Reggaeton", "Crossover"], address: "Chapinero", price: "50.000", image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=400&auto=format&fit=crop&q=80" },
];

// Mock events data
const MOCK_EVENTS = [
    { date: "28 may", dayOfWeek: "martes", time: "14:30", title: "Noches de Perreo", venue: "Grupo El Fabuloso", address: "Cll 85 # 14-22", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&auto=format&fit=crop&q=80", isLive: true, isSoldOut: true },
    { date: "28 may", dayOfWeek: "martes", time: "14:30", title: "Perreo a poca luz", venue: "Grupo El Fabuloso", address: "Cll 85 # 14-22", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&auto=format&fit=crop&q=80", price: "60.000 COP", attendees: 100 },
    { date: "28 may", dayOfWeek: "martes", time: "14:30", title: "Noche de entierro", venue: "Grupo El Fabuloso", address: "Cll 85 # 14-22", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&auto=format&fit=crop&q=80" },
    { date: "28 may", dayOfWeek: "martes", time: "14:30", title: "Concierto Kevin Roldan", venue: "Grupo El Fabuloso", address: "Cll 85 # 14-22", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=200&auto=format&fit=crop&q=80" },
];

export default function ZoneDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    // Get zone data or fallback
    const zone = ZONE_DATA[slug] || {
        title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        eventCount: 0,
        description: "Explora los mejores planes en esta zona con Tikipal.",
        images: ["https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80"]
    };

    return (
        <div className="min-h-screen bg-transparent selection:bg-tikipal-orange/20">
            <Header />

            {/* Top Vertical Effect Overlay - Perfect sync with commerce profile */}
            <div className="fixed top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-white/40 via-white/0 to-transparent pointer-events-none -z-10" />

            <main className="pb-20 backdrop-blur-[2px]">
                {/* Breadcrumb Navigation - Centered like PlaceDetailPage */}
                <div className="max-w-[1240px] mx-auto px-6 mb-4 pt-6 flex items-center gap-2 text-sm text-gray-900/40">
                    <button onClick={() => window.history.back()} className="hover:text-tikipal-orange transition-colors">Colombia</button>
                    <span>/</span>
                    <button onClick={() => window.history.back()} className="hover:text-tikipal-orange transition-colors">Bogotá</button>
                    <span>/</span>
                    <span className="text-gray-900 font-normal">{zone.title}</span>
                </div>

                {/* Two Column Hero Layout - Luma Style */}
                <div className="max-w-[1240px] mx-auto px-6 mt-8 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 items-center">
                        {/* Left Column: Zone Info */}
                        <ZoneInfo
                            title={zone.title}
                            eventCount={zone.eventCount}
                            description={zone.description}
                        />

                        {/* Right Column: Hero Card */}
                        <ZoneHeroCard
                            title={zone.title}
                            image={zone.images[0]}
                        />
                    </div>
                </div>

                {/* Content - Sites and Events */}
                <div className="max-w-[1240px] mx-auto px-6">
                    {/* Full width divider */}
                    <div className="h-px bg-gray-200 w-full" />

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 mt-6">
                        {/* Left Column: Sites */}
                        <div>
                            <div className="mb-2">
                                <h3 className="text-[20px] font-black text-gray-900">Sitios</h3>
                                <p className="text-[16px] text-gray-600 mt-1 font-light">Selecciona el sitio que mas te guste</p>
                            </div>
                            <div className="h-px bg-gray-100 w-full mb-8" />

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {MOCK_SITES.map((site, idx) => (
                                    <SiteCard key={idx} {...site} />
                                ))}
                                {MOCK_SITES.map((site, idx) => (
                                    <SiteCard key={`second-${idx}`} {...site} />
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Events */}
                        <div>
                            <div className="mb-2">
                                <h3 className="text-[20px] font-black text-gray-900">Próximos eventos</h3>
                                <p className="text-[16px] text-gray-600 mt-1 font-light">Mayo</p>
                            </div>
                            <div className="h-px bg-gray-100 w-full mb-8" />

                            <div className="space-y-0 mt-4">
                                {MOCK_EVENTS.map((event, idx) => (
                                    <EventCard
                                        key={idx}
                                        {...event}
                                        isFirst={idx === 0}
                                        isLast={idx === MOCK_EVENTS.length - 1}
                                    />
                                ))}
                            </div>

                            {/* Ubicaciones Section */}
                            <div className="mt-16 pt-10 border-t border-gray-100">
                                <h3 className="text-[20px] font-medium text-gray-900 mb-6">Ubicaciones</h3>
                                <div className="rounded-[24px] overflow-hidden border border-gray-100 shadow-sm aspect-video relative group cursor-pointer transition-all duration-500 hover:shadow-md">
                                    <img
                                        src="/images/zone_map.png"
                                        alt="Mapa de ubicaciones"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Map Overlay Shadow */}
                                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
