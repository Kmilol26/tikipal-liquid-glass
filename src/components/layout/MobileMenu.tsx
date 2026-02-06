"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, UserCircle, Ticket, Compass, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    isLoggedIn?: boolean;
}

const GUEST_ITEMS = [
    { title: "Iniciar sesión", href: "/login", subtitle: "Accede o crea tu cuenta", icon: <UserCircle size={24} /> },
    { title: "Explorar", href: "/explore", subtitle: "Zonas y categorías", icon: <Compass size={24} /> },
    { title: "Soporte", href: "#", subtitle: "Ayuda y contacto", icon: <LifeBuoy size={24} /> },
];

const USER_ITEMS = [
    { title: "Mi cuenta", href: "/profile", subtitle: "Gestionar perfil y datos", icon: <UserCircle size={24} /> },
    { title: "Mis Entradas", href: "/tickets", subtitle: "Tus próximos eventos", icon: <Ticket size={24} /> },
    { title: "Explorar", href: "/explore", subtitle: "Descubre nuevos lugares", icon: <Compass size={24} /> },
    { title: "Soporte", href: "#", subtitle: "Centro de ayuda", icon: <LifeBuoy size={24} /> },
];

import { useLanguage } from "@/context/LanguageContext";

export function MobileMenu({ isOpen, onClose, isLoggedIn = false }: MobileMenuProps) {
    const { t } = useLanguage();

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const guestItems = [
        { title: t.common.login, href: "/login", subtitle: t.mobile_menu.profile.subtitle, icon: <UserCircle size={24} /> },
        { title: t.mobile_menu.explore.title, href: "/explore", subtitle: t.mobile_menu.explore.subtitle, icon: <Compass size={24} /> },
        { title: t.mobile_menu.support.title, href: "#", subtitle: t.mobile_menu.support.subtitle, icon: <LifeBuoy size={24} /> },
    ];

    const userItems = [
        { title: t.mobile_menu.profile.title, href: "/profile", subtitle: t.mobile_menu.profile.subtitle, icon: <UserCircle size={24} /> },
        { title: t.mobile_menu.tickets.title, href: "/tickets", subtitle: t.mobile_menu.tickets.subtitle, icon: <Ticket size={24} /> },
        { title: t.mobile_menu.explore.title, href: "/explore", subtitle: t.mobile_menu.explore.subtitle, icon: <Compass size={24} /> },
        { title: t.mobile_menu.support.title, href: "#", subtitle: t.mobile_menu.support.subtitle, icon: <LifeBuoy size={24} /> },
    ];

    const items = isLoggedIn ? userItems : guestItems;

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        window.location.reload();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm"
                    />

                    {/* Menu Content */}
                    <motion.div
                        initial={{ x: "100%", opacity: 0.5, filter: "blur(10px)", scale: 0.95 }}
                        animate={{ x: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
                        exit={{ x: "100%", opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 200,
                            mass: 0.8,
                            opacity: { duration: 0.3 }
                        }}
                        className="fixed inset-y-0 right-0 z-[70] w-full md:w-[420px] bg-white/60 backdrop-blur-3xl shadow-2xl shadow-black/5 border-l border-white/40 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-8 border-b border-gray-100/50">
                            <Link href="/bogota" onClick={onClose} className="flex items-center gap-2 opacity-90 cursor-pointer hover:scale-105 transition-transform">
                                <img
                                    src="/brand/logo-orange-text.png"
                                    alt="tikipal"
                                    className="h-8 w-auto object-contain"
                                />
                            </Link>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-white/40 hover:bg-white/80 flex items-center justify-center transition-all duration-300 text-gray-500 backdrop-blur-md border border-white/20"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* User Profile Preview (Only if logged in) */}
                        {isLoggedIn && (
                            <div className="px-8 pt-6 pb-2">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 border border-white/40 backdrop-blur-sm">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-tikipal-orange to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                                        CM
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 leading-tight">Camilo M.</h3>
                                        <p className="text-xs font-medium text-tikipal-orange">{t.common.verified}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Scrollable Area */}
                        <div className="flex-1 overflow-y-auto py-2 px-4 sm:px-6 space-y-4">
                            {/* Main Links */}
                            <nav className="space-y-1">
                                {items.map((item, idx) => (
                                    <Link
                                        key={idx}
                                        href={item.href}
                                        onClick={onClose}
                                        className="group block p-4 sm:p-5 rounded-[24px] hover:bg-white/40 hover:backdrop-blur-md transition-all duration-300 border border-transparent hover:border-white/40 active:scale-[0.98]"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${idx === 0 ? "bg-tikipal-orange/10 text-tikipal-orange" : "bg-gray-100 text-gray-400"} group-hover:bg-tikipal-orange group-hover:text-white`}>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-tikipal-orange transition-colors tracking-tight">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-[11px] sm:text-[13px] font-medium text-gray-400 group-hover:text-gray-500 mt-0.5">
                                                        {item.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-white/0 flex items-center justify-center text-gray-300 group-hover:bg-tikipal-orange group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                                                <ChevronRight size={18} />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </nav>

                            {/* Secondary Actions */}
                            <div className="pt-2 sm:pt-4 pb-10 sm:pb-4 space-y-4">
                                <div className="p-6 rounded-[28px] bg-gradient-to-br from-tikipal-orange to-orange-500 shadow-xl shadow-tikipal-orange/20 relative overflow-hidden group border border-white/20 active:scale-[0.98] transition-transform">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-110" />

                                    <h4 className="font-black text-white mb-1 relative z-10 text-base sm:text-lg">
                                        {t.mobile_menu.business.title}
                                    </h4>
                                    <p className="text-white/90 text-xs sm:text-sm mb-5 font-medium leading-relaxed relative z-10 max-w-[240px]">
                                        {isLoggedIn ? t.mobile_menu.business.subtitle_logged : t.mobile_menu.business.subtitle}
                                    </p>
                                    <button className="w-full py-3 sm:py-3.5 bg-white text-tikipal-orange hover:bg-white/90 rounded-xl text-sm font-black transition-all duration-300 relative z-10 shadow-sm hover:shadow-md">
                                        {isLoggedIn ? t.mobile_menu.business.cta_logged : t.mobile_menu.business.cta_guest}
                                    </button>
                                </div>

                                {isLoggedIn && (
                                    <button
                                        onClick={handleLogout}
                                        className="w-full py-3 text-center text-gray-400 text-sm font-bold hover:text-red-500 transition-colors"
                                    >
                                        {t.common.logout}
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
