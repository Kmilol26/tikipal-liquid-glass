"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="pt-12 pb-16 px-6 space-y-6 relative z-10 text-center">
            {/* Background Glow - Subtle Orange Orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-tikipal-orange/10 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-multiply"></div>

            {/* Search Header */}
            <div className="max-w-5xl mx-auto space-y-4">
                <h1 className="text-3xl md:text-6xl font-black text-gray-900 tracking-tighter hover:scale-[1.01] transition-transform cursor-default drop-shadow-sm whitespace-normal md:whitespace-nowrap px-4 md:px-0">
                    {t.home.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-tikipal-orange to-pink-600 block md:inline">{t.home.hero.span}</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-500 font-medium whitespace-nowrap">
                    {t.home.hero.subtitle_1} <span className="text-gray-900 font-bold">{t.home.hero.subtitle_2}</span> {t.home.hero.subtitle_3}
                </p>

                {/* Capsule Search */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative max-w-lg mx-auto !mt-12 mb-8"
                >
                    <div className="flex items-center w-full px-6 py-4 rounded-full bg-white/80 backdrop-blur-xl shadow-lg border border-white/40 hover:shadow-tikipal-orange/10 transition-all group ring-1 ring-black/5">
                        <Search className="text-tikipal-orange mr-3" size={20} strokeWidth={2.5} />
                        <input
                            type="text"
                            placeholder={t.home.hero.search}
                            className="w-full bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400 text-sm font-semibold"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
