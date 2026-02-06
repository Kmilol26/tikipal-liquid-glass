"use client";

import { Store, HelpCircle, Users, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function CallToActionBento() {
    const { t } = useLanguage();

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-6 flex items-center gap-2">
                <Sparkles className="text-tikipal-orange" size={24} />
                {t.home.experience}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">

                {/* 1. Publica tu Negocio (Full Width) */}
                <div className="group relative col-span-2 md:col-span-2 overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                    <img
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop"
                        alt="Business Owner"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent/20" />

                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center items-start">
                        <div className="bg-white/10 backdrop-blur-md p-2 md:p-2.5 rounded-2xl mb-3 md:mb-4 text-white border border-white/20 shadow-inner">
                            <Store size={20} className="md:w-[22px] md:h-[22px]" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-none tracking-tight">{t.home.bento.business.title}</h3>
                        <p className="text-white/80 font-medium max-w-xs mb-4 md:mb-8 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                            {t.home.bento.business.desc}
                        </p>
                        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm hover:bg-tikipal-orange hover:text-white transition-all duration-300 shadow-lg hover:shadow-tikipal-orange/30">
                            {t.home.bento.business.cta.split(' ')[0]} <span className="hidden md:inline">{t.home.bento.business.cta.split(' ').slice(1).join(' ')}</span> <ArrowRight size={14} />
                        </button>
                    </div>
                </div>

                {/* 2. Invitar a Usar (Half Width on Mobile) */}
                <div className="group relative col-span-1 md:row-span-2 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-600 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-500">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

                    <div className="relative z-10 h-full p-4 md:p-6 flex flex-col justify-between">
                        <div>
                            <div className="bg-white/10 w-fit p-2 md:p-2.5 rounded-2xl text-white backdrop-blur-md mb-2 md:mb-4 border border-white/20">
                                <Users size={18} className="md:w-[22px] md:h-[22px]" />
                            </div>
                            <h3 className="text-lg md:text-2xl font-black text-white leading-tight mb-1 md:mb-3">{t.home.bento.invite.title}</h3>
                            <p className="text-indigo-100/80 text-[10px] md:text-sm font-medium leading-relaxed line-clamp-2">{t.home.bento.invite.desc}</p>
                        </div>

                        <div className="space-y-3 md:space-y-5">
                            {/* Avatar Stack - Hidden on mobile to save space or reduced */}
                            <div className="hidden md:flex -space-x-3 pl-1">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-indigo-500 overflow-hidden relative shadow-md">
                                        <img className="w-full h-full object-cover" src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" />
                                    </div>
                                ))}
                            </div>

                            <button className="w-full group/btn relative overflow-hidden bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 text-white py-2 md:py-3.5 rounded-xl md:rounded-2xl font-bold text-[10px] md:text-sm transition-all duration-300">
                                <span className="relative z-10">{t.home.bento.invite.cta}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* 3. Cómo Usar (Half Width on Mobile) */}
                <div className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl bg-white/50 backdrop-blur-xl border border-white/60 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-tikipal-orange/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 h-full p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div className="flex-1 md:pr-6">
                            <div className="flex items-center gap-2 mb-2 md:mb-3">
                                <span className="px-1.5 py-0.5 md:px-2 md:py-1 rounded-md bg-tikipal-orange/10 text-tikipal-orange text-[8px] md:text-[10px] font-black uppercase tracking-widest border border-tikipal-orange/10">
                                    {t.home.bento.help.badge}
                                </span>
                            </div>
                            <h3 className="text-lg md:text-2xl font-black text-gray-900 mb-1 md:mb-2 tracking-tight">{t.home.bento.help.title}</h3>
                            <p className="text-gray-500 text-[10px] md:text-sm font-medium line-clamp-2 md:line-clamp-none">{t.home.bento.help.desc}</p>
                        </div>

                        <div className="mt-2 md:mt-0 w-8 h-8 md:w-16 md:h-16 rounded-full bg-white shadow-lg shadow-gray-200/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 text-tikipal-orange border border-gray-50 self-end md:self-auto">
                            <span className="text-sm md:text-2xl ml-0.5">▶</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
