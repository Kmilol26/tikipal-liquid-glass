"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

interface ZoneHeroProps {
    title: string;
    subtitle?: string;
    images: string[];
}

export function ZoneHero({ title, subtitle, images }: ZoneHeroProps) {
    const swiperRef = useRef<SwiperType>(null);

    return (
        <div className="relative w-full group">
            {/* Swiper Container */}
            <Swiper
                spaceBetween={16}
                slidesPerView="auto"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="!pb-0"
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={idx} className={images.length > 1 ? "!w-[85%] md:!w-[60%] lg:!w-[100%]" : "!w-full"}>
                        <div className="relative w-full h-[224px] md:h-[320px] rounded-[32px] overflow-hidden shadow-2xl border border-white/20 group/slide transition-all duration-500">
                            {/* Background Image */}
                            <img
                                src={img}
                                alt={`${title} ${idx}`}
                                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover/slide:scale-105"
                            />

                            {/* Gradient Overlay - Unified for all images */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

                            {/* Centered Title - Only on the first slide or if we want it global */}
                            {idx === 0 && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
                                    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl tracking-tight">
                                        ¡La mejor zona
                                    </h1>
                                    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl tracking-tight">
                                        para salir!
                                    </h1>
                                </div>
                            )}

                            {/* Liquid Glass Overlay (Subtle) */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-500" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons (Liquid Glass Style) */}
            {images.length > 1 && (
                <div className="hidden md:flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none px-4 box-content">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center pointer-events-auto hover:bg-tikipal-orange hover:border-tikipal-orange transition-all shadow-xl -ml-6"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center pointer-events-auto hover:bg-tikipal-orange hover:border-tikipal-orange transition-all shadow-xl -mr-6"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            )}
        </div>
    );
}
