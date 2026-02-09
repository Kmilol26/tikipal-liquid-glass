"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, Share2, Download } from "lucide-react";
import { PITCH_DECK_CONTENT, Slide } from "@/data/pitch-deck";

export function SlideController() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = useCallback(() => {
        if (currentSlide < PITCH_DECK_CONTENT.length - 1) {
            setDirection(1);
            setCurrentSlide((prev) => prev + 1);
        }
    }, [currentSlide]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            setDirection(-1);
            setCurrentSlide((prev) => prev - 1);
        }
    }, [currentSlide]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " ") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    const slide = PITCH_DECK_CONTENT[currentSlide];

    return (
        <div className="fixed inset-0 bg-[#050505] text-white overflow-hidden flex flex-col font-light selection:bg-tikipal-orange/30">
            {/* Background Decorative Mesh - Consistent with App */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-tikipal-orange/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-tikipal-orange/10 blur-[100px] rounded-full" />
            </div>

            {/* Header / Controls */}
            <header className="relative z-50 p-6 flex items-center justify-between backdrop-blur-md bg-black/20 border-b border-white/5">
                <div className="flex items-center gap-4">
                    <img src="/brand/logo-orange-text.png" alt="Tikipal" className="h-6 w-auto" />
                    <div className="h-4 w-[1px] bg-white/10" />
                    <span className="text-[12px] uppercase tracking-[0.2em] text-white/40 font-bold">Lean Deck 2026</span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="text-[12px] font-mono text-white/40 mr-4">
                        {String(currentSlide + 1).padStart(2, '0')} / {String(PITCH_DECK_CONTENT.length).padStart(2, '0')}
                    </div>
                    <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50"><Maximize2 size={18} /></button>
                    <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50"><Share2 size={18} /></button>
                </div>
            </header>

            {/* Main Slide Stage */}
            <main className="relative flex-1 flex items-center justify-center p-8 sm:p-20 overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 1.05 }}
                        transition={{ type: "spring", damping: 25, stiffness: 150 }}
                        className="w-full max-w-6xl h-full flex flex-col justify-center"
                    >
                        {/* Slide Content Layout Switcher */}
                        {slide.type === "cover" && (
                            <div className="text-center space-y-8">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block px-4 py-1.5 rounded-full border border-tikipal-orange/30 bg-tikipal-orange/5 text-tikipal-orange text-[11px] font-black tracking-[0.3em] uppercase mb-4"
                                >
                                    {slide.accentText}
                                </motion.div>
                                <h1 className="text-7xl sm:text-[120px] font-black tracking-[-0.05em] leading-[0.85] uppercase">
                                    {slide.title}
                                </h1>
                                <p className="text-2xl sm:text-4xl text-white/60 font-extralight tracking-tight max-w-3xl mx-auto">
                                    {slide.subtitle}
                                </p>
                                <div className="pt-12 text-white/40 text-lg">{slide.content[0]}</div>
                            </div>
                        )}

                        {(slide.type === "grid" || slide.type === "text") && (
                            <div className="flex flex-col h-full justify-center">
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className="mb-12 border-l-4 border-tikipal-orange pl-8"
                                >
                                    <h2 className="text-5xl sm:text-7xl font-black mb-4 uppercase tracking-tighter italic">{slide.title}</h2>
                                    <p className="text-2xl sm:text-3xl text-white/40">{slide.subtitle}</p>
                                </motion.div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {slide.content.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 * idx + 0.3 }}
                                            className="group relative p-8 rounded-[32px] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
                                        >
                                            <div className="relative z-10 flex items-start gap-6">
                                                <div className="w-10 h-10 rounded-full bg-tikipal-orange/10 flex items-center justify-center text-tikipal-orange font-bold border border-tikipal-orange/20">
                                                    {idx + 1}
                                                </div>
                                                <p className="flex-1 text-xl sm:text-2xl leading-relaxed text-white/80 group-hover:text-white transition-colors">{item}</p>
                                            </div>
                                            {/* Glow effect on hover */}
                                            <div className="absolute -inset-1 bg-gradient-to-r from-tikipal-orange/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(slide.type === "product" || slide.type === "market") && (
                            <div className="flex flex-col lg:flex-row gap-16 items-center">
                                <div className="flex-1">
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        className="mb-10"
                                    >
                                        <h2 className="text-5xl sm:text-7xl font-black mb-4 uppercase tracking-tighter italic">{slide.title}</h2>
                                        <p className="text-2xl sm:text-3xl text-tikipal-orange">{slide.subtitle}</p>
                                    </motion.div>
                                    <div className="space-y-8">
                                        {slide.content.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.1 * idx + 0.4 }}
                                                className="flex gap-6 items-center"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-tikipal-orange" />
                                                <p className="text-xl sm:text-2xl text-white/70 leading-relaxed">{item}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-1 w-full max-w-md aspect-[4/5] relative rounded-[60px] overflow-hidden border border-white/10 glass-card">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                                    {/* Mock Product Visual */}
                                    <div className="absolute inset-x-8 top-12 bottom-12 rounded-[40px] bg-black/40 border border-white/5 flex flex-col items-center justify-center p-8 text-center gap-6">
                                        <div className="w-16 h-16 rounded-3xl bg-tikipal-orange/20 animate-bounce" />
                                        <div className="space-y-2 w-full">
                                            <div className="h-2 w-[80%] bg-white/10 mx-auto rounded-full" />
                                            <div className="h-2 w-[60%] bg-white/10 mx-auto rounded-full" />
                                        </div>
                                        <div className="mt-8 px-6 py-3 rounded-2xl bg-tikipal-orange text-[12px] font-bold uppercase tracking-widest shadow-xl shadow-tikipal-orange/20">
                                            Liquid Ticket Demo
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 inset-x-0 text-center text-[10px] uppercase tracking-[0.4em] text-white/20">Interactive Visualization</div>
                                </div>
                            </div>
                        )}

                        {slide.type === "team" && (
                            <div className="text-center max-w-4xl mx-auto">
                                <h2 className="text-6xl sm:text-8xl font-black mb-16 uppercase tracking-[-0.04em] italic">{slide.title}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                                    <div className="space-y-6">
                                        <div className="h-1 w-20 bg-tikipal-orange" />
                                        <h4 className="text-3xl font-black italic">The Visionary</h4>
                                        <p className="text-xl text-white/60 leading-relaxed italic">Leading product strategy and industry partnerships.</p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="h-1 w-20 bg-tikipal-orange" />
                                        <h4 className="text-3xl font-black italic">The Algorithm</h4>
                                        <p className="text-xl text-white/60 leading-relaxed italic">Powering ultra-performance and cutting-edge automation.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Navigation Bar / Footer */}
            <footer className="relative z-50 p-6 flex items-center justify-between border-t border-white/5 bg-black/40 backdrop-blur-xl">
                <div className="flex gap-2">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all disabled:opacity-20 active:scale-95 group"
                    >
                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === PITCH_DECK_CONTENT.length - 1}
                        className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all disabled:opacity-20 active:scale-95 group"
                    >
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-1.5 px-4 h-1 items-center">
                    {PITCH_DECK_CONTENT.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-full cursor-pointer transition-all duration-500 rounded-full ${idx === currentSlide ? "w-12 bg-tikipal-orange" : "w-6 bg-white/10 hover:bg-white/20"
                                }`}
                        />
                    ))}
                </div>

                <div className="hidden sm:block text-[11px] font-bold uppercase tracking-[0.3em] text-white/30">
                    Use Arrows to Navigate
                </div>
            </footer>

            <style jsx global>{`
                .glass-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(20px);
                    box-shadow: 0 40px 100px -30px rgba(0,0,0,0.8);
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255,255,255,0.1);
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
}
