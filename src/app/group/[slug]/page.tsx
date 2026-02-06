"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ZoneHeroCard } from "@/components/zone/ZoneHeroCard";
import { ZoneInfo } from "@/components/zone/ZoneInfo";
import { SiteCard } from "@/components/zone/SiteCard";
import { EventCard } from "@/components/zone/EventCard";
import { useParams } from "next/navigation";

// Mock data for groups
const GROUP_DATA: Record<string, {
    title: string;
    eventCount: number;
    description: string;
    images: string[];
}> = {
    "el-fabuloso": {
        title: "Grupo El Fabuloso",
        eventCount: 15,
        description: "El Fabuloso es el lugar donde la magia ocurre. Disfruta de la mejor vista de la ciudad acompañada de una curaduría musical impecable y una coctelería de autor premium.",
        images: [
            "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=80"
        ]
    },
    "andres-dc": {
        title: "Grupo Andrés DC",
        eventCount: 22,
        description: "Andrés Carne de Res es una institución de la rumba y la gastronomía colombiana. Un universo surrealista donde el cielo y el infierno se encuentran en cada baldosa.",
        images: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=400&auto=format&fit=crop&q=80"
        ]
    },
    "la-candelaria": {
        title: "Grupo La Candelaria",
        eventCount: 12,
        description: "Tradición y bohemia en el corazón histórico de Bogotá. Experiencias culturales únicas que capturan la esencia del centro de la ciudad.",
        images: [
            "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&auto=format&fit=crop&q=80"
        ]
    },
    "padel-bogota": {
        title: "Grupo Padel Bogotá",
        eventCount: 8,
        description: "El fitness y el networking se unen en las mejores canchas de padel de Bogotá. Un estilo de vida saludable y social para los amantes del deporte.",
        images: [
            "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop&q=80"
        ]
    },
    "click-clack": {
        title: "Grupo Click Clack",
        eventCount: 10,
        description: "Diseño, arte y hospitalidad disruptiva. Hoteles que no son solo lugares para dormir, sino espacios para vivir experiencias sensoriales completas.",
        images: [
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&auto=format&fit=crop&q=80"
        ]
    }
};

// Mock sites data for groups
const MOCK_SITES = [
    { id: "saint-tropez", title: "Saint Tropez", genres: ["Electronica", "Reggaeton", "Crossover"], address: "Cl 84A # 12-25", price: "20.000", image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&auto=format&fit=crop&q=80" },
    { id: "toni-k-bar", title: "Toni-k Bar", genres: ["Ranchera", "Electronica", "Reggaeton"], address: "Cr 85 #11-53", price: "20.000", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop&q=80" },
    { id: "tabu-studio", title: "Tabu Studio Bar", genres: ["Champeta", "House", "Electronica"], address: "Cr 85 #11-53", price: "25.000", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&auto=format&fit=crop&q=80" },
    { id: "octava-club", title: "Octava Club", genres: ["Electronica", "Reggaeton", "Crossover"], address: "Cl 84A # 12-25", price: "30.000", image: "/images/octava_club.png" },
];

// Mock events data for groups
const MOCK_EVENTS = [
    { date: "28 may", dayOfWeek: "martes", time: "14:30", title: "Noches de Perreo", venue: "Grupo El Fabuloso", address: "Cll 85 # 14-22", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&auto=format&fit=crop&q=80", isLive: true, isSoldOut: true },
    { date: "28 may", dayOfWeek: "martes", time: "14:30", title: "Perreo a poca luz", venue: "Grupo El Fabuloso", address: "Cll 85 # 14-22", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=200&auto=format&fit=crop&q=80", price: "60.000 COP", attendees: 100 },
];

export default function GroupDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    // Get group data or fallback
    const group = GROUP_DATA[slug] || {
        title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        eventCount: 0,
        description: "Explora los mejores planes de este grupo con Tikipal.",
        images: ["https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80"]
    };

    return (
        <div className="min-h-screen bg-transparent selection:bg-tikipal-orange/20">
            <Header />

            {/* Top Vertical Effect Overlay */}
            <div className="fixed top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-white/40 via-white/0 to-transparent pointer-events-none -z-10" />

            <main className="pb-20 backdrop-blur-[2px]">
                {/* Breadcrumb Navigation */}
                <div className="max-w-[1240px] mx-auto px-6 mb-4 pt-6 flex items-center gap-2 text-sm text-gray-900/40">
                    <button onClick={() => window.history.back()} className="hover:text-tikipal-orange transition-colors">Colombia</button>
                    <span>/</span>
                    <button onClick={() => window.history.back()} className="hover:text-tikipal-orange transition-colors">Bogotá</button>
                    <span>/</span>
                    <span className="text-gray-900 font-normal">{group.title}</span>
                </div>

                {/* Two Column Hero Layout */}
                <div className="max-w-[1240px] mx-auto px-6 mt-8 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 items-center">
                        {/* Left Column: Group Info */}
                        <ZoneInfo
                            title={group.title}
                            eventCount={group.eventCount}
                            description={group.description}
                        />

                        {/* Right Column: Hero Card */}
                        <ZoneHeroCard
                            title={group.title}
                            image={group.images[0]}
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
                                <p className="text-[16px] text-gray-600 mt-1 font-light">Explora los sitios que hacen parte de este grupo</p>
                            </div>
                            <div className="h-px bg-gray-100 w-full mb-8" />

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {MOCK_SITES.map((site, idx) => (
                                    <SiteCard key={idx} {...site} />
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Events */}
                        <div>
                            <div className="mb-2">
                                <h3 className="text-[20px] font-black text-gray-900">Próximos eventos</h3>
                                <p className="text-[16px] text-gray-600 mt-1 font-light">Agendate con nosotros</p>
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
                                <h3 className="text-[20px] font-medium text-gray-900 mb-6">Ubicación principal</h3>
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
