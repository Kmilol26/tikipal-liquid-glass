"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

interface PlaceGalleryProps {
    images: string[];
}

export function PlaceGallery({ images }: PlaceGalleryProps) {
    const swiperRef = useRef<SwiperType>(null);

    return (
        <div className="relative group">
            <Swiper
                spaceBetween={16}
                slidesPerView="auto"
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="!pb-6 !px-6 md:!px-0"
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={idx} className="!w-[250px]">
                        <div className="relative w-[250px] h-[250px] rounded-[32px] overflow-hidden shadow-xl group/slide cursor-grab active:cursor-grabbing border border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                            <img
                                src={img}
                                alt={`Gallery ${idx}`}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover/slide:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover/slide:bg-transparent transition-colors duration-300" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons (Desktop) */}
            <div className="hidden md:flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none px-4 md:-mx-12 md:w-[calc(100%+6rem)]">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center pointer-events-auto hover:bg-white hover:text-black transition-all shadow-lg"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center pointer-events-auto hover:bg-white hover:text-black transition-all shadow-lg"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}
