"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function PromoBanner() {
    const { t } = useLanguage();

    return (
        <section className="px-6 mb-10">
            <div className="group w-full relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                {/* Generic Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80"
                        alt="Background"
                        className="w-full h-full object-cover opacity-10 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent z-0" />

                <div className="relative z-10 flex items-center justify-between py-3 px-4">
                    <div className="flex items-center gap-4">
                        {/* Icon Box */}
                        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-inner">
                            <Sparkles className="text-white fill-white/20" size={20} />
                        </div>

                        {/* Text */}
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="md:hidden flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm">
                                    <Sparkles className="text-white" size={12} />
                                </span>
                                <h3 className="text-white font-black text-lg tracking-tight leading-none drop-shadow-md">
                                    {t.home.promo.title.split(' ')[0]} <span className="text-orange-200">{t.home.promo.title.split(' ').slice(1).join(' ')}</span>
                                </h3>
                            </div>
                            <p className="text-indigo-100 text-xs md:text-sm font-medium tracking-wide leading-tight max-w-[200px] md:max-w-none">
                                {t.home.promo.desc}
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="flex items-center gap-2 pl-4">
                        <span className="hidden md:inline text-white text-xs font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">{t.home.promo.cta}</span>
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                            <ArrowRight size={18} strokeWidth={3} />
                        </div>
                    </div>
                </div>

                {/* Decorative Circles */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute top-[-20%] right-[20%] w-20 h-20 bg-orange-400/20 rounded-full blur-xl mix-blend-screen"></div>
            </div>
        </section>
    );
}
