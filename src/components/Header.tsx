"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { MobileMenu } from "./layout/MobileMenu";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        // Check login state
        const checkLogin = () => {
            setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
        };

        checkLogin();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("storage", checkLogin); // Listen for storage changes

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("storage", checkLogin);
        };
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    return (
        <>
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm"
                    : "bg-transparent border-transparent shadow-none"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    {/* Left: Logo & City */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <Link href="/explore" className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                            {/* Logo Image */}
                            <div className="flex items-center">
                                <img
                                    src="/brand/logo-orange-text.png"
                                    alt="tikipal"
                                    className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
                                />
                            </div>

                            {/* Vertical Separator */}
                            <div className="h-5 sm:h-6 w-[1px] bg-gray-300/50"></div>

                            <span className="font-bold text-gray-800 text-base sm:text-lg tracking-tight group-hover:text-tikipal-orange transition-colors">{t.header.bogota}</span>
                        </Link>
                    </div>

                    {/* Right: Language & Menu */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-[12px] sm:text-sm font-black text-gray-700 hover:text-tikipal-orange transition-all bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-md border border-white hover:border-tikipal-orange/20 shadow-sm active:scale-95"
                        >
                            {t.header.lang}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="text-gray-800 hover:text-tikipal-orange transition-colors p-2 hover:bg-black/5 rounded-full"
                        >
                            <Menu className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                isLoggedIn={isLoggedIn}
            />
        </>
    );
}
