"use client";

import { Instagram, Facebook, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-white/30 backdrop-blur-xl border-t border-white/40 text-gray-900 py-6 px-6 mt-6 rounded-t-3xl md:rounded-none">
            <div className="max-w-[1400px] mx-auto">
                <h4 className="font-medium mb-4">{t.footer.follow_us}</h4>
                <div className="flex gap-4 mb-8">
                    <div className="w-8 h-8 bg-white/60 rounded-full flex items-center justify-center hover:bg-white/80 cursor-pointer transition-colors backdrop-blur-sm shadow-sm text-tikipal-orange">
                        <Instagram size={18} />
                    </div>
                    <div className="w-8 h-8 bg-white/60 rounded-full flex items-center justify-center hover:bg-white/80 cursor-pointer transition-colors backdrop-blur-sm shadow-sm text-tikipal-orange">
                        <Facebook size={18} />
                    </div>
                    <div className="w-8 h-8 bg-white/60 rounded-full flex items-center justify-center hover:bg-white/80 cursor-pointer transition-colors backdrop-blur-sm shadow-sm text-tikipal-orange">
                        <Mail size={18} />
                    </div>
                </div>

                <div className="border-t border-gray-200/50 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
                    <div className="hidden md:block">
                        <img
                            src="/brand/logo-orange-text.png"
                            alt="tikipal"
                            className="h-6 w-auto object-contain opacity-80 grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <span>© 2025 Tikipal</span>
                        <a href="#" className="hover:underline">{t.footer.terms}</a>
                        <a href="#" className="hover:underline">{t.footer.sitemap}</a>
                        <a href="#" className="hover:underline">{t.footer.about}</a>
                    </div>
                    <div className="mt-2 md:mt-0 font-medium">
                        {t.footer.lang_display}
                    </div>
                </div>
            </div>
        </footer>
    );
}
