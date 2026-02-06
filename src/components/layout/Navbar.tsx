"use client";

import { Menu } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/20">
            <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
                {/* Left: Logo & City */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        {/* Logo Icon Mockup */}
                        <div className="text-tikipal-orange font-black text-xl tracking-tight flex items-center gap-1">
                            <span className="text-2xl">🎟️</span> tikipal
                        </div>
                    </div>
                    <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>
                    <span className="text-gray-700 text-lg font-medium">Bogotá</span>
                </div>

                {/* Right: Language & Menu */}
                <div className="flex items-center gap-4 text-gray-600">
                    <span className="text-sm font-medium cursor-pointer hover:text-tikipal-orange transition-colors">Esp</span>
                    <button className="text-gray-900 hover:text-tikipal-orange transition-colors">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
