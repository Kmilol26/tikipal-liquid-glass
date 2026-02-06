"use client";

import { Beer, Martini, UtensilsCrossed, Cigarette, Music, Utensils, CalendarDays, Clock, Users, Flame, Ticket, MapPin, Star, DoorOpen } from "lucide-react";
import { motion } from "framer-motion";

interface PlaceInfoProps {
    title?: string;
}

export function PlaceInfo({ title = "Tejo Turmeque" }: PlaceInfoProps) {
    const titleParts = title.split(' ');
    const firstWord = titleParts[0];
    const restOfTitle = titleParts.slice(1).join(' ');

    return (
        <div className="space-y-8">
            {/* Header Info - Even more compact (24px Title) */}
            <div className="space-y-0.5">
                <h1 className="text-[24px] font-bold tracking-tighter leading-tight text-gray-900">
                    <span className="text-tikipal-orange">{firstWord}</span> {restOfTitle}
                </h1>

                <div className="flex flex-col gap-0.5 font-normal text-gray-900">
                    <span className="flex items-center gap-1.5 text-[16px]">
                        <MapPin size={12} className="text-tikipal-orange/60" />
                        Cl 57 #13-10
                    </span>
                    <span className="pl-[19.5px] text-[14px]">House · Reggaeton · Crossover</span>
                </div>
            </div>

            {/* Status Bar - Refined Luma Pill (Solid White + Extra Prominent Orange Border) */}
            <div className="flex items-center justify-between py-2.5 px-6 rounded-[24px] border-[1.5px] border-tikipal-orange/70 bg-white/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-2xl ring-1 ring-black/[0.02]">
                {/* Section 1: Abierto + Stars */}
                <div className="flex flex-col items-center flex-1">
                    <span className="text-[16px] font-bold text-gray-900 tracking-widest leading-none mb-1">Activo</span>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={11} className="fill-tikipal-orange text-tikipal-orange" />
                        ))}
                    </div>
                </div>

                <div className="h-6 w-px bg-gray-200/50 mx-2"></div>

                {/* Section 2: Time with Leaves */}
                <div className="flex items-center justify-center gap-2 flex-1 px-2">
                    <span className="text-base text-tikipal-orange/60 scale-x-[-1] select-none">🌿</span>
                    <span className="text-[16px] font-bold text-gray-900 tracking-tight">14:00 - 02:00</span>
                    <span className="text-base text-tikipal-orange/60 select-none">🌿</span>
                </div>

                <div className="h-6 w-px bg-gray-200/50 mx-2"></div>

                {/* Section 3: Aforo */}
                <div className="flex items-center justify-center gap-2 flex-1">
                    <span className="text-[16px] font-bold text-gray-900">400</span>
                    <span className="text-[14px] font-bold text-tikipal-orange tracking-wider">Aforo</span>
                </div>
            </div>

            {/* Content Divider - Luma style subtle line */}
            <div className="h-px bg-gray-100 -mt-2" />

            {/* Highlights Section */}
            <div className="space-y-8">
                {/* Organizer */}
                <div className="flex items-center gap-5">
                    <div className="w-[44px] h-[44px] rounded-full bg-tikipal-orange flex items-center justify-center text-white shadow-lg shadow-tikipal-orange/20 relative overflow-hidden flex-shrink-0">
                        <Users size={22} />
                        <div className="absolute inset-0 bg-white/10" />
                    </div>
                    <div className="space-y-0.5">
                        <p className="text-[16px] font-bold text-tikipal-orange tracking-widest">Organizado por</p>
                        <p className="text-[16px] font-normal text-gray-900 tracking-tight">Grupo Tejo Turmeque</p>
                    </div>
                </div>

                <div className="h-px bg-gray-100" />

                {/* Entry Policy */}
                <div className="flex items-start gap-5">
                    <div className="w-[44px] h-[44px] rounded-[14px] bg-white border border-gray-100 flex items-center justify-center text-tikipal-orange shadow-sm flex-shrink-0">
                        <DoorOpen size={20} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-[16px] font-bold text-gray-900 tracking-tight">Llegada autónoma · Evita fila</h3>
                        <p className="text-[14px] font-normal text-gray-900/60">El personal del edificio te ayudará a ingresar.</p>
                    </div>
                </div>

                <div className="h-px bg-gray-100" />
            </div>

            {/* Description Section */}
            <div className="space-y-3">
                <h2 className="text-[16px] font-bold text-gray-900 tracking-widest">Sobre el lugar</h2>
                <p className="text-[14px] text-gray-900 leading-relaxed font-normal max-w-3xl">
                    ¡Bienvenidos a Tejo Turmeque, donde la tradición del tejo se encuentra con el estilo y la elegancia en un ambiente lleno de color! 🎯🌈 Disfruta de una experiencia única en un sitio fancy, diseñado con una paleta vibrante de colores que te invitan a compartir momentos especiales con amigos.
                </p>
                <button className="text-tikipal-orange font-normal text-[14px] tracking-widest hover:underline transition-all">
                    Leer más
                </button>
            </div>

            {/* Offerings Section */}
            <div className="space-y-8 pt-4">
                <div className="h-px bg-gray-100" />
                <div className="space-y-1.5">
                    <h2 className="text-[16px] font-bold text-gray-900 tracking-widest pb-0 mb-6">Consumo aproximado</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        { icon: <Beer size={20} />, title: "Botellas", price: "$110k - $1.2M" },
                        { icon: <Martini size={20} />, title: "Cócteles", price: "$22k - $65k" },
                        { icon: <UtensilsCrossed size={20} />, title: "Comidas", price: "$22k - $65k" },
                    ].map((item, i) => (
                        <div key={i} className="p-6 rounded-[24px] border border-tikipal-orange/20 bg-white/40 backdrop-blur-xl shadow-sm hover:shadow-md transition-all group/card flex flex-col gap-4 ring-1 ring-black/5">
                            <div className="w-11 h-11 rounded-2xl bg-tikipal-orange/10 flex items-center justify-center text-tikipal-orange group-hover/card:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-[16px] font-normal text-gray-900">{item.title}</h4>
                                <p className="text-[14px] text-tikipal-orange font-normal mt-1 tracking-wider">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Amenities Section */}
            <div className="space-y-8">
                <div className="h-px bg-gray-100" />
                <h2 className="text-[16px] font-bold text-gray-900 tracking-widest">Amenidades</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6">
                    {[
                        { icon: <Cigarette size={18} />, label: "Fumadores" },
                        { icon: <Martini size={18} />, label: "Coctelería" },
                        { icon: <Music size={18} />, label: "Eventos" },
                        { icon: <Utensils size={18} />, label: "Comida" },
                        { icon: <Users size={18} />, label: "Mesa" },
                        { icon: <CalendarDays size={18} />, label: "Reservas" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3.5 text-gray-900 group cursor-default">
                            <span className="text-gray-900/40 group-hover:text-tikipal-orange transition-colors duration-300">{item.icon}</span>
                            <span className="text-[14px] font-normal group-hover:text-tikipal-orange transition-colors tracking-wide">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Location Section */}
            <div className="space-y-6">
                <div className="h-px bg-gray-100" />
                <h2 className="text-[16px] font-bold text-gray-900 tracking-widest">Ubicación</h2>
                <div className="relative rounded-[24px] overflow-hidden border border-white/60 shadow-lg aspect-video sm:aspect-[21/9] ring-1 ring-black/5">
                    <img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop"
                        alt="Map"
                        className="w-full h-full object-cover grayscale opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-10 h-10 bg-tikipal-orange rounded-full flex items-center justify-center text-white shadow-2xl ring-4 ring-white/20"
                        >
                            <MapPin size={22} fill="currentColor" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Policies Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-12">
                <div className="p-8 rounded-[24px] border border-tikipal-orange/20 bg-white/40 backdrop-blur-xl shadow-sm ring-1 ring-black/5">
                    <h3 className="text-[16px] font-semibold text-gray-900 tracking-[0.2em] mb-3">Cancelación</h3>
                    <p className="text-[14px] text-gray-900/60 leading-relaxed font-normal">
                        No reembolsable ni transferible. Verifica tus detalles antes de finalizar.
                    </p>
                </div>
                <div className="p-8 rounded-[24px] border border-tikipal-orange/20 bg-white/40 backdrop-blur-xl shadow-sm ring-1 ring-black/5">
                    <h3 className="text-[16px] font-semibold text-gray-900 tracking-[0.2em] mb-3">Reglas</h3>
                    <p className="text-[14px] text-gray-900/60 leading-relaxed font-normal">
                        Ingreso exclusivo con código Tikipal válido y documento de identidad.
                    </p>
                </div>
            </div>
        </div>
    );
}
