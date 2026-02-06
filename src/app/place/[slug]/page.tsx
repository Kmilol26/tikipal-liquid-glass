"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PlaceGallery } from "@/components/place/PlaceGallery";
import { PlaceInfo } from "@/components/place/PlaceInfo";
import { BookingWidget } from "@/components/place/BookingWidget";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock Images for the Gallery (Tejo Turmeque inspired)
const GALLERY_IMAGES = [
    "/images/place/tejo/player.png",
    "/images/place/tejo/explosion.png",
    "/images/place/tejo/social.png",
    "/images/place/tejo/detail.png",
];

export default function PlaceDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    // Mapping for human-readable titles
    const PLACE_TITLES: Record<string, string> = {
        "tejo-turmeque": "Tejo Turmeque",
        "el-fabuloso": "El Fabuloso",
        "andres-dc": "Andrés DC",
        "la-candelaria": "La Candelaria",
        "padel-bogota": "Padel Bogotá",
        "click-clack": "Click Clack",
        "octava-club": "Octava Club",
        "locos-por-el-padel": "Locos por el Padel",
        "crepes-and-waffles": "Crepes & Waffles",
        "bodytech": "Bodytech",
        "theatron": "Theatron",
        "video-club": "Video Club"
    };

    const placeTitle = PLACE_TITLES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return (
        <div className="min-h-screen bg-transparent selection:bg-tikipal-orange/20">
            <Header />

            {/* Top Vertical Effect Overlay */}
            <div className="fixed top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-white/40 via-white/0 to-transparent pointer-events-none -z-10" />

            <main className="pt-4 pb-20 backdrop-blur-[2px]">
                {/* Breadcrumb / Back Navigation */}
                <div className="max-w-[1240px] mx-auto px-6 mb-4 pt-2 flex items-center gap-2 text-sm text-gray-900/40">
                    <button onClick={() => window.history.back()} className="hover:text-tikipal-orange transition-colors">Colombia</button>
                    <span>/</span>
                    <button onClick={() => window.history.back()} className="hover:text-tikipal-orange transition-colors">Bogotá</button>
                    <span>/</span>
                    <span className="text-gray-900 font-normal">{placeTitle}</span>
                </div>

                {/* 1. Gallery Section - Aligned with the content title */}
                <div className="max-w-[1240px] mx-auto px-6 mb-6 md:mb-8">
                    <PlaceGallery images={GALLERY_IMAGES} />
                </div>

                {/* 2. Main Content Grid (Info + Sticky Booking) */}
                <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">

                    {/* LEFT COLUMN: Place Info */}
                    <div>
                        <PlaceInfo title={placeTitle} />
                    </div>

                    {/* RIGHT COLUMN: Booking Widget */}
                    <div className="relative z-20">
                        <BookingWidget />
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
