"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ZoneHeroCard } from "@/components/zone/ZoneHeroCard";
import { ZoneInfo } from "@/components/zone/ZoneInfo";
import { SiteCard } from "@/components/zone/SiteCard";
import { useParams } from "next/navigation";
import Link from "next/link";
import { TrendingUp, Calendar, MapPin, Share2, Heart } from "lucide-react";

// Mock data for articles
const ARTICLE_DATA: Record<string, {
    category: string;
    title: string;
    subtitle: string;
    time: string;
    description: string;
    images: string[];
    author: string;
    tags: string[];
    events: {
        title: string;
        date: string;
        venue: string;
        placeSlug: string;
        image: string;
    }[];
}> = {
    "adidas-originals-retro-2026": {
        category: "LANZAMIENTO",
        title: "Adidas Originals: Nueva Colección Retro 2026",
        subtitle: "El regreso de los clásicos con tecnología del futuro",
        time: "Hace 1 hora",
        author: "Tikipal Editorial",
        tags: ["Moda", "Sneakers", "Retro", "Adidas"],
        description: "Adidas Originals redefine el estilo urbano con su nueva colección Retro 2026. Inspirada en las siluetas icónicas de los años 90, esta línea combina materiales sostenibles con la comodidad inigualable de la tecnología Boost. Descubre cómo la marca de las tres rayas está marcando la pauta para la próxima temporada.",
        images: [
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=800&auto=format&fit=crop"
        ],
        events: [
            { title: "Evento de Lanzamiento", date: "Sáb, 15 Jun · 7:00 PM", venue: "Saint Tropez", placeSlug: "saint-tropez", image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400" },
            { title: "Pop-up Store", date: "Dom, 16 Jun · 10:00 AM", venue: "Click Clack Hotel", placeSlug: "click-clack", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400" }
        ]
    },
    "mejores-brunch-bogota": {
        category: "TENDENCIA",
        title: "Los 5 mejores Brunch para este fin de semana",
        subtitle: "Sabores irresistibles en los lugares más instagrameables",
        time: "Hace 5 horas",
        author: "Gastro Hunter",
        tags: ["Foodie", "Bogotá", "Brunch", "Planes"],
        description: "El brunch se ha convertido en el plan sagrado de los bogotanos. En esta guía, seleccionamos cinco lugares que están elevando la experiencia con propuestas innovadoras, desde huevos benedictinos con toques locales hasta mimosas artesanales en terrazas ocultas.",
        images: [
            "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
        ],
        events: [
            { title: "Brunch & Mimosas", date: "Sáb, 08 Jun · 11:00 AM", venue: "Abasto", placeSlug: "abasto", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400" }
        ]
    },
    "estereo-picnic-lineup-2026": {
        category: "EVENTO",
        title: "Festival Estéreo Picnic anuncia Lineup por días",
        subtitle: "Prepárate para un Un Mundo Distinto en el corazón de la ciudad",
        time: "Ayer",
        author: "Music Desk",
        tags: ["Conciertos", "FEP", "Bogotá", "Música"],
        description: "La espera terminó. El Festival Estéreo Picnic ha revelado su programación diaria para la edición 2026. Con headliners de talla mundial y una apuesta fuerte por el talento local, el FEP promete cuatro días de euforia, cultura y experiencias sensoriales inolvidables.",
        images: [
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
        ],
        events: [
            { title: "Opening Party", date: "Jue, 20 Mar · 8:00 PM", venue: "Theatron", placeSlug: "theatron", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400" }
        ]
    }
};

// Compact Event Card for Article Sidebar
function CompactEventCard({ title, date, venue, placeSlug, image }: { title: string, date: string, venue: string, placeSlug: string, image: string }) {
    return (
        <Link href={`/place/${placeSlug}`} className="flex items-center gap-4 group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-105 border border-white/40 ring-1 ring-black/5">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-0.5 min-w-0">
                <p className="text-[10px] font-black text-tikipal-orange uppercase tracking-widest truncate">{date}</p>
                <h4 className="text-[14px] font-bold text-gray-900 leading-tight truncate group-hover:text-tikipal-orange transition-colors">{title}</h4>
                <div className="flex items-center gap-1 text-gray-500">
                    <MapPin size={10} className="text-gray-400" />
                    <span className="text-[12px] font-normal truncate">{venue}</span>
                </div>
            </div>
        </Link>
    );
}

export default function ArticleDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const article = ARTICLE_DATA[slug] || {
        category: "ACTUALIDAD",
        title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        subtitle: "Toda la información relevante de la ciudad.",
        time: "Reciente",
        author: "Tikipal Staff",
        tags: ["Bogotá", "Actualidad"],
        description: "Explora los detalles de este tema en Tikipal.",
        images: ["https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600"],
        events: []
    };

    return (
        <div className="min-h-screen bg-transparent selection:bg-tikipal-orange/20">
            <Header />

            <div className="fixed top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-white/40 via-white/0 to-transparent pointer-events-none -z-10" />

            <main className="pb-20 backdrop-blur-[2px]">
                {/* Breadcrumb Navigation */}
                <div className="max-w-[1240px] mx-auto px-6 mb-4 pt-6 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-900/40">
                        <button onClick={() => window.history.back()} className="hover:text-tikipal-orange transition-colors">Colombia</button>
                        <span>/</span>
                        <button onClick={() => window.history.back()} className="hover:text-tikipal-orange transition-colors">Bogotá</button>
                        <span>/</span>
                        <span className="text-gray-900 font-normal">{article.category}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
                            <Share2 size={18} />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
                            <Heart size={18} />
                        </button>
                    </div>
                </div>

                {/* Two Column Hero Layout */}
                <div className="max-w-[1240px] mx-auto px-6 mt-8 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-6 items-center">
                        {/* Left Column: Article Info */}
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-tikipal-orange/10 text-tikipal-orange text-xs font-black tracking-widest uppercase mb-4 border border-tikipal-orange/20">
                                {article.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-4">
                                {article.title}
                            </h1>
                            <p className="text-xl text-gray-600 font-light mb-6 tracking-tight">
                                {article.subtitle}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1.5 font-bold text-gray-900">
                                    <TrendingUp size={14} className="text-tikipal-orange" />
                                    {article.time}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-gray-300" />
                                <span>Por <span className="font-bold text-gray-900">{article.author}</span></span>
                            </div>
                        </div>

                        {/* Right Column: Hero Image (Card style) */}
                        <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-black/5">
                            <img
                                src={article.images[0]}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Main Content Sections */}
                <div className="max-w-[1240px] mx-auto px-6">
                    <div className="h-px bg-gray-200 w-full mb-12" />

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16">
                        {/* Article Body */}
                        <div className="space-y-8">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-700 leading-relaxed font-normal">
                                    {article.description}
                                </p>
                            </div>

                            {/* Secondary Gallery */}
                            {article.images[1] && (
                                <div className="rounded-[32px] overflow-hidden shadow-lg border border-white/60">
                                    <img src={article.images[1]} className="w-full h-full object-cover" alt="Detail" />
                                </div>
                            )}

                            {/* Tags Section */}
                            <div className="pt-8">
                                <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Tags relacionados</h4>
                                <div className="flex flex-wrap gap-2">
                                    {article.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-tikipal-orange/10 hover:text-tikipal-orange transition-colors cursor-pointer border border-transparent hover:border-tikipal-orange/20">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar: Related Items */}
                        <div className="space-y-10">
                            {/* Related Events Section */}
                            <div>
                                <h3 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-2">
                                    <Calendar size={20} className="text-tikipal-orange" />
                                    Eventos
                                </h3>
                                <div className="space-y-8">
                                    {article.events.map((event, idx) => (
                                        <CompactEventCard key={idx} {...event} />
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter / CTA */}
                            <div className="p-8 rounded-[32px] bg-tikipal-orange text-white shadow-xl shadow-tikipal-orange/20 relative overflow-hidden group">
                                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                                <h4 className="text-2xl font-black leading-tight mb-2">No te pierdas nada</h4>
                                <p className="text-white/80 text-sm mb-6 leading-relaxed">Suscríbete para recibir los mejores planes y lanzamientos de Bogotá directamente en tu correo.</p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Tu correo"
                                        className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/50 flex-1 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md"
                                    />
                                    <button className="bg-white text-tikipal-orange px-4 py-2 rounded-xl font-black text-sm hover:bg-gray-100 transition-colors">
                                        Unirse
                                    </button>
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
