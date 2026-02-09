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
        <div className="fixed inset-0 bg-[#fafafa] text-gray-900 overflow-hidden flex flex-col font-light selection:bg-tikipal-orange/20">
            {/* Background Decorative Mesh - Light Mode Soft Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-tikipal-orange/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-400/5 blur-[150px] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_100%)]" />
            </div>

            {/* Header / Controls */}
            <header className="relative z-50 p-6 flex items-center justify-between backdrop-blur-md bg-white/40 border-b border-black/[0.03] shadow-sm">
                <div className="flex items-center gap-4">
                    <img src="/brand/logo-orange-text.png" alt="Tikipal" className="h-6 w-auto" />
                    <div className="h-4 w-[1px] bg-black/10" />
                    <span className="text-[12px] uppercase tracking-[0.2em] text-gray-400 font-bold">Pitch Deck 2026</span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="text-[12px] font-mono text-gray-400 mr-4">
                        {String(currentSlide + 1).padStart(2, '0')} / {String(PITCH_DECK_CONTENT.length).padStart(2, '0')}
                    </div>
                    <button className="p-2 hover:bg-black/5 rounded-full transition-colors text-gray-400"><Maximize2 size={18} /></button>
                    <button className="p-2 hover:bg-black/5 rounded-full transition-colors text-gray-400"><Share2 size={18} /></button>
                </div>
            </header>

            {/* Main Slide Stage */}
            <main className="relative flex-1 flex items-center justify-center p-8 sm:p-20 overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        initial={{ opacity: 0, x: direction > 0 ? 50 : -50, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: direction > 0 ? -50 : 50, scale: 1.02 }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        className="w-full max-w-6xl h-full flex flex-col justify-center"
                    >
                        {/* Slide Content Layout Switcher */}
                        {slide.type === "cover" && (
                            <div className="text-center space-y-8">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block px-5 py-2 rounded-full border border-tikipal-orange/20 bg-white shadow-sm text-tikipal-orange text-[11px] font-black tracking-[0.3em] uppercase mb-4"
                                >
                                    {slide.accentText}
                                </motion.div>
                                <h1 className="text-7xl sm:text-[110px] font-black tracking-[-0.05em] leading-[0.9] uppercase text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-tikipal-orange">
                                    {slide.title}
                                </h1 >
                                <p className="text-2xl sm:text-4xl text-gray-500 font-extralight tracking-tight max-w-3xl mx-auto italic">
                                    {slide.subtitle}
                                </p>
                                <div className="pt-16">
                                    <div className="w-24 h-1 bg-tikipal-orange/20 mx-auto rounded-full" />
                                    <p className="mt-8 text-gray-400 text-lg uppercase tracking-[0.2em] font-medium">{slide.content[0]}</p>
                                </div>
                            </div>
                        )}

                        {(slide.type === "grid" || slide.type === "text") && (
                            <div className="flex flex-col h-full justify-center">
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className="mb-12"
                                >
                                    <h2 className="text-5xl sm:text-7xl font-black mb-4 uppercase tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-tikipal-orange">{slide.title}</h2>
                                    <p className="text-2xl sm:text-3xl text-gray-400 font-medium">{slide.subtitle}</p>
                                </motion.div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {slide.content.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 * idx + 0.3 }}
                                            className="group relative p-8 rounded-[36px] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.05)] hover:border-tikipal-orange/20 transition-all duration-500 overflow-hidden"
                                        >
                                            <div className="relative z-10 flex items-start gap-6">
                                                <div className="w-10 h-10 shrink-0 rounded-[14px] bg-tikipal-orange/5 flex items-center justify-center text-tikipal-orange font-bold border border-tikipal-orange/10">
                                                    {idx + 1}
                                                </div>
                                                <p className="flex-1 text-xl sm:text-2xl leading-relaxed text-gray-600 font-normal group-hover:text-gray-900 transition-colors">
                                                    {item.includes(':') ? (
                                                        <>
                                                            <b className="text-gray-900 block mb-1">{item.split(':')[0]}</b>
                                                            <span className="text-gray-500 text-lg">{item.split(':')[1]}</span>
                                                        </>
                                                    ) : item}
                                                </p>
                                            </div>
                                            {/* Glow effect on hover */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-tikipal-orange/5 blur-3xl rounded-full translate-x-16 -translate-y-16 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {slide.id === "market" && (
                            <div className="flex flex-col lg:flex-row gap-20 items-center">
                                <div className="flex-1">
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        className="mb-12"
                                    >
                                        <h2 className="text-5xl sm:text-7xl font-black mb-4 uppercase tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-tikipal-orange">{slide.title}</h2>
                                        <p className="text-2xl sm:text-4xl text-tikipal-orange font-bold uppercase tracking-tight">{slide.subtitle}</p>
                                    </motion.div>
                                    <div className="grid grid-cols-1 gap-6">
                                        {slide.metrics?.map((metric, idx) => (
                                            <div key={idx} className="flex gap-6 items-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                                                <div className="w-14 h-14 rounded-2xl bg-tikipal-orange/10 flex items-center justify-center text-tikipal-orange font-black text-xl">
                                                    {metric.value}
                                                </div>
                                                <div>
                                                    <h4 className="font-black text-gray-900 uppercase tracking-wide">{metric.label}</h4>
                                                    <p className="text-gray-500 font-medium">{metric.sublabel}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-1 w-full flex items-center justify-center relative">
                                    {/* TAM SAM SOM Circles Visualization */}
                                    <div className="relative w-full aspect-square flex items-center justify-center max-w-md">
                                        {/* TAM */}
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="absolute w-full h-full rounded-full bg-gradient-to-br from-tikipal-orange to-tikipal-orange/90 shadow-[0_40px_100px_-20px_rgba(255,107,38,0.3)] flex items-center justify-center border-[8px] border-white ring-1 ring-tikipal-orange/20"
                                        >
                                            <span className="absolute top-10 font-black text-white text-4xl tracking-tighter">TAM</span>
                                        </motion.div>

                                        {/* SAM */}
                                        <motion.div
                                            initial={{ scale: 0.7, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="absolute w-[72%] h-[72%] rounded-full bg-tikipal-orange/80 shadow-[inset_0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center border-[6px] border-white/90"
                                        >
                                            <span className="absolute top-12 font-black text-white/90 text-3xl tracking-tighter">SAM</span>
                                        </motion.div>

                                        {/* SOM */}
                                        <motion.div
                                            initial={{ scale: 0.6, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="absolute w-[44%] h-[44%] rounded-full bg-white shadow-2xl flex items-center justify-center border border-tikipal-orange/10"
                                        >
                                            <span className="font-black text-tikipal-orange text-3xl tracking-tighter">SOM</span>
                                        </motion.div>
                                    </div>

                                    {/* Floating Data Legend - Connector Style */}
                                    <div className="absolute -right-2 top-0 bottom-0 py-12 flex flex-col justify-between items-start gap-4">
                                        {slide.content.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.6 + idx * 0.1 }}
                                                className="bg-white/90 backdrop-blur-md p-5 rounded-[28px] border border-gray-100 shadow-xl max-w-[240px] relative group hover:scale-105 transition-transform"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-tikipal-orange absolute -left-1 top-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,107,38,0.8)]" />
                                                <p className="text-[11px] font-black text-tikipal-orange uppercase mb-1.5 tracking-widest">{item.split(':')[0]}</p>
                                                <p className="text-[15px] font-bold text-gray-800 leading-tight">{item.split(':')[1]}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {slide.type === "product" && (
                            <div className="flex flex-col lg:flex-row gap-16 items-center">
                                <div className="flex-1">
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        className="mb-10"
                                    >
                                        <h2 className="text-5xl sm:text-7xl font-black mb-4 uppercase tracking-tighter italic text-gray-900">{slide.title}</h2>
                                        <p className="text-2xl sm:text-3xl font-medium text-tikipal-orange">{slide.subtitle}</p>
                                    </motion.div>
                                    <div className="space-y-6">
                                        {slide.content.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ x: -20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.1 * idx + 0.4 }}
                                                className="flex gap-6 items-start p-6 rounded-[28px] border border-gray-100 bg-white/50"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-tikipal-orange mt-2.5" />
                                                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">{item}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-1 w-full max-w-lg aspect-video relative rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl bg-white">
                                    <img src="/images/place/theatron/cover.png" className="w-full h-full object-cover opacity-20" />
                                    <div className="absolute inset-0 flex items-center justify-center p-12">
                                        <div className="w-full h-full rounded-[30px] border border-gray-100 bg-white/80 backdrop-blur-xl shadow-xl flex flex-col items-center justify-center p-8 gap-4">
                                            <div className="w-16 h-16 rounded-3xl bg-tikipal-orange shadow-lg flex items-center justify-center text-white">
                                                <Download size={24} />
                                            </div>
                                            <h4 className="font-black text-gray-900 uppercase">Interactive V0.1</h4>
                                            <p className="text-gray-400 text-sm italic">Desliza para ver la demo en vivo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {slide.type === "team" && (
                            <div className="text-center max-w-4xl mx-auto">
                                <h2 className="text-6xl sm:text-8xl font-black mb-16 uppercase tracking-[-0.04em] italic text-gray-900">{slide.title}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                                    <div className="p-10 rounded-[44px] bg-white border border-gray-100 shadow-sm relative overflow-hidden group">
                                        <div className="h-1.5 w-16 bg-tikipal-orange mb-8 rounded-full" />
                                        <h4 className="text-4xl font-black italic mb-4 text-gray-900">Camilo A.</h4>
                                        <p className="text-2xl text-gray-400 leading-relaxed font-medium">Fundador & Visión de Producto.</p>
                                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-tikipal-orange/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                    </div>
                                    <div className="p-10 rounded-[44px] bg-white border border-gray-100 shadow-sm relative overflow-hidden group">
                                        <div className="h-1.5 w-16 bg-gray-900 mb-8 rounded-full" />
                                        <h4 className="text-4xl font-black italic mb-4 text-gray-900">Antigravity AI</h4>
                                        <p className="text-2xl text-gray-400 leading-relaxed font-medium">Liderazgo Tecnológico & UI.</p>
                                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Navigation Bar / Footer */}
            <footer className="relative z-50 p-6 flex items-center justify-between border-t border-black/[0.03] bg-white/60 backdrop-blur-xl shadow-[0_-5px_20px_rgb(0,0,0,0.02)]">
                <div className="flex gap-3">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="w-14 h-14 rounded-2xl border border-gray-100 bg-white flex items-center justify-center hover:bg-gray-50 text-gray-400 hover:text-tikipal-orange transition-all shadow-sm disabled:opacity-20 active:scale-95 group"
                    >
                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === PITCH_DECK_CONTENT.length - 1}
                        className="w-14 h-14 rounded-2xl border border-tikipal-orange/20 bg-white flex items-center justify-center hover:bg-tikipal-orange/5 text-tikipal-orange transition-all shadow-sm disabled:opacity-20 active:scale-95 group"
                    >
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-2 px-8 h-1.5 items-center">
                    {PITCH_DECK_CONTENT.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-full cursor-pointer transition-all duration-500 rounded-full ${idx === currentSlide ? "w-16 bg-tikipal-orange shadow-[0_2px_10px_rgba(255,107,38,0.4)]" : "w-6 bg-gray-200 hover:bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

                <div className="hidden sm:block text-[11px] font-black uppercase tracking-[0.4em] text-gray-300">
                    Control con flechas teclado
                </div>
            </footer>
        </div>
    );
}
