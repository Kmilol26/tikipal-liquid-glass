import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

const HIGHLIGHTS = [
    {
        id: 1,
        title: "El Cielo",
        category: "Gastronomía",
        stars: 5,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
        label: "5 Estrellas"
    },
    {
        id: 2,
        title: "SmartFit",
        category: "Bienestar",
        label: "Gym",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        title: "Stereo Picnic",
        category: "Festival",
        label: "Música",
        image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80"
    }
];

export const FeaturedSection = () => {
    return (
        <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column - Featured Card */}
                <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-gray-900 min-h-[400px] group">
                    <img
                        src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80"
                        alt="Featured Event"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 p-8 w-full max-w-2xl">
                        <span className="inline-block px-3 py-1 bg-tikipal-orange text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                            Tendencia
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                            Torneo de Padel 2024
                        </h3>
                        <p className="text-gray-300 mb-6 text-sm md:text-base max-w-lg">
                            Inscríbete ahora en el torneo amateur más grande de la ciudad. Cupos limitados.
                        </p>
                        <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                            Ver Detalles
                        </button>
                    </div>
                </div>

                {/* Right Column - Highlights List */}
                <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            Destacados esta semana
                            <span className="text-yellow-400">✨</span>
                        </h3>
                        <a href="#" className="text-tikipal-orange text-xs font-bold hover:underline">Ver todo</a>
                    </div>

                    <div className="flex-1 space-y-6">
                        {HIGHLIGHTS.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-16 h-16 rounded-xl overflow-hidden relative flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-gray-900 truncate">{item.title}</h4>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <span>{item.category}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span className="truncate">{item.label}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <a href="#" className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-600 transition-colors">
                            <Sparkles className="w-3 h-3 text-yellow-400" />
                            <span>Explora 3 nuevas categorías</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
