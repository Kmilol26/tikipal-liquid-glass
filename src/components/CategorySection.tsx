"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { PlaceCard } from './PlaceCard';
// Import Swiper styles
import 'swiper/css';
import { useLanguage } from '@/context/LanguageContext';

interface Item {
    title: string;
    tags: string;
    location: string;
    image: string;
    price: string;
    rating?: number;
    isGuestFavorite?: boolean;
}

interface SectionProps {
    title: string;
    items: Item[];
    variant?: 'default' | 'compact';
}

export function CategorySection({ title, items, variant = 'default' }: SectionProps) {
    const isCompact = variant === 'compact';
    const { t } = useLanguage();

    return (
        <section className="py-2 overflow-hidden">
            <div className="flex justify-between items-end mb-6">
                <div className="space-y-1">
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">{title}</h2>
                    <p className="text-sm font-medium text-gray-400">{t.home.curated}</p>
                </div>
                <button className="text-xs font-bold text-tikipal-orange bg-tikipal-orange/5 px-4 py-2 rounded-full uppercase tracking-widest hover:bg-tikipal-orange/10 transition-colors backdrop-blur-sm">
                    {t.home.view_all}
                </button>
            </div>

            <Swiper
                slidesPerView={'auto'}
                spaceBetween={16}
                className="!pb-10 !pl-1"
            >
                {items.map((item, idx) => (
                    <SwiperSlide key={idx} style={{ width: '185px', height: '240px' }}>
                        <PlaceCard {...item} variant={variant} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
