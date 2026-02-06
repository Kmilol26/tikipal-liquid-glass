"use client";

import { Header } from "@/components/Header";
import { useState } from "react";
import { LiquidBackground } from "@/components/layout/LiquidBackground";
import { ArrowLeft, ArrowRight, ShieldCheck, Ticket, Check, MapPin } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 20
        }
    }
};

import { useLanguage } from "@/context/LanguageContext";

export default function CheckoutPage() {
    const { t, language } = useLanguage();
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <main className="min-h-screen bg-transparent relative overflow-hidden font-light selection:bg-tikipal-orange/20">
            <Header />

            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-4 sm:pt-10 pb-12 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-6"
                >
                    <AnimatePresence mode="wait">
                        {!showSuccess ? (
                            <motion.div
                                key="checkout-form"
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative px-1"
                            >
                                {/* Left Column: Purchase Summary */}
                                <motion.div variants={item} className="lg:col-span-12 xl:col-span-7 space-y-6">
                                    <div className="space-y-3">
                                        <h2 className="text-[20px] sm:text-[22px] font-black tracking-tighter text-gray-900 leading-none">
                                            {t.checkout.summary_title.split(' ')[0]} <span className="text-tikipal-orange">{t.checkout.summary_title.split(' ').slice(1).join(' ')}</span>
                                        </h2>
                                        <div className="w-16 h-1 bg-tikipal-orange rounded-full" />
                                    </div>

                                    {/* Ultra Glass Summary Card */}
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-tikipal-orange/20 to-blue-500/10 rounded-[34px] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

                                        <div className="relative bg-white/40 backdrop-blur-3xl border border-white/50 rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-xl shadow-black/5 overflow-hidden">
                                            {/* Mesh Gradient sub-layer */}
                                            <div className="absolute top-0 right-0 w-48 h-48 bg-tikipal-orange/5 rounded-full blur-[60px]" />

                                            <div className="relative z-10 space-y-6">
                                                {/* High-Fidelity Date Pill */}
                                                <div className="flex items-center justify-center border-2 border-tikipal-orange/40 rounded-full py-2.5 px-4 sm:py-3 sm:px-6 gap-0 text-[11px] sm:text-[13px] font-black bg-white/50 shadow-inner">
                                                    <div className="flex-1 text-center text-gray-800 tracking-tight uppercase">{t.common.days.saturday}</div>
                                                    <div className="w-[1.5px] sm:w-[2px] h-5 sm:h-6 bg-tikipal-orange/30 mx-2 sm:mx-4" />
                                                    <div className="flex-[1.8] text-center flex items-center justify-center gap-1.5 sm:gap-2.5">
                                                        <span className="text-tikipal-orange text-[14px] sm:text-[16px] filter drop-shadow-sm">🌿</span>
                                                        <span className="text-gray-900 tracking-tighter whitespace-nowrap">{language === 'es' ? `07 de ${t.common.months.february}` : `${t.common.months.february} 07`}</span>
                                                        <span className="text-tikipal-orange text-[14px] sm:text-[16px] filter drop-shadow-sm rotate-180">🌿</span>
                                                    </div>
                                                    <div className="w-[1.5px] sm:w-[2px] h-5 sm:h-6 bg-tikipal-orange/30 mx-2 sm:mx-4" />
                                                    <div className="flex-1 text-center text-tikipal-orange tracking-tighter">20:00</div>
                                                </div>

                                                {/* Purchase Flow */}
                                                <div className="space-y-6">
                                                    <div className="flex justify-between items-center group/line">
                                                        <div className="space-y-1">
                                                            <p className="text-[10px] font-black text-tikipal-orange uppercase tracking-widest">{t.checkout.tickets}</p>
                                                            <p className="text-[14px] sm:text-[16px] text-gray-900 font-bold tracking-tight">{t.checkout.ticket_type}</p>
                                                        </div>
                                                        <p className="text-[16px] sm:text-[18px] font-black text-gray-300 group-hover/line:text-tikipal-orange transition-colors">{language === 'es' ? '$ 55.000' : '$ 14.50'}</p>
                                                    </div>

                                                    <div className="pt-6 border-t border-tikipal-orange/10 flex justify-between items-end">
                                                        <div className="space-y-1">
                                                            <p className="text-[12px] font-black text-gray-400 uppercase tracking-widest">{t.checkout.total_to_pay}</p>
                                                            <h3 className="text-[28px] sm:text-[32px] font-black text-gray-900 tracking-tighter leading-none">{language === 'es' ? '$ 55.000' : '$ 14.50'} <span className="text-[14px] text-tikipal-orange">{language === 'es' ? 'COP' : 'USD'}</span></h3>
                                                        </div>
                                                        {/* Branded Logo Submark */}
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 text-tikipal-orange/20">
                                                            <svg viewBox="0 0 64 64" className="w-full h-full fill-current">
                                                                <path d="M12 20 L30 32 L12 44 Z" />
                                                                <path d="M52 20 L34 32 L52 44 Z" />
                                                                <circle cx="32" cy="32" r="6" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right Column: Payment Methods */}
                                <motion.div variants={item} className="lg:col-span-12 xl:col-span-5 space-y-6">
                                    <div className="space-y-3">
                                        <h2 className="text-[20px] sm:text-[22px] font-black tracking-tighter text-gray-900 leading-none">
                                            {t.checkout.payment_title.split(' ')[0]} <span className="text-tikipal-orange">{t.checkout.payment_title.split(' ').slice(1).join(' ')}</span>
                                        </h2>
                                        <div className="w-16 h-1 bg-tikipal-orange rounded-full" />
                                    </div>

                                    {/* Ultra Glass Payment Card */}
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-tikipal-orange/10 rounded-[44px] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-1000" />

                                        <div className="relative bg-white/60 backdrop-blur-3xl border border-white rounded-[28px] sm:rounded-[40px] p-5 sm:p-8 shadow-2xl shadow-black/5 space-y-6 sm:space-y-8 overflow-hidden">
                                            {/* Inner reflection layer */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />

                                            <div className="space-y-6 relative z-10">
                                                <button
                                                    onClick={() => setShowSuccess(true)}
                                                    className="w-full h-14 sm:h-16 bg-tikipal-orange text-white rounded-[20px] sm:rounded-[24px] font-black text-[16px] sm:text-[18px] tracking-tight shadow-[0_20px_40px_-10px_rgba(255,107,38,0.4)] flex items-center justify-center gap-4 hover:scale-[1.03] hover:shadow-[0_25px_50px_-12px_rgba(255,107,38,0.5)] active:scale-[0.98] transition-all duration-500 group/btn overflow-hidden"
                                                >
                                                    <span className="relative z-10">{t.checkout.pay_now}</span>
                                                    <ArrowRight size={20} className="relative z-10 group-hover/btn:translate-x-1.5 transition-transform" />
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                                </button>

                                                {/* Divider with Center Badge */}
                                                <div className="relative flex items-center justify-center">
                                                    <div className="w-full h-px bg-gray-900/5" />
                                                    <div className="absolute px-4 bg-white/50 backdrop-blur-md rounded-full border border-gray-100">
                                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t.checkout.payment_title}</span>
                                                    </div>
                                                </div>

                                                {/* Provider Logos - High quality placeholders */}
                                                <div className="grid grid-cols-3 gap-4 opacity-80 hover:opacity-100 transition-opacity">
                                                    <div className="h-14 rounded-2xl bg-white/50 border border-white hover:border-tikipal-orange/30 transition-all flex flex-col items-center justify-center gap-1 shadow-sm group/logo">
                                                        <div className="w-6 h-3 bg-blue-900 rounded-[2px]" />
                                                        <span className="text-[7px] font-black tracking-[0.2em] text-gray-400 group-hover/logo:text-tikipal-orange transition-colors">VISA</span>
                                                    </div>
                                                    <div className="h-14 rounded-2xl bg-white/50 border border-white hover:border-tikipal-orange/30 transition-all flex flex-col items-center justify-center gap-1 shadow-sm group/logo">
                                                        <div className="flex -space-x-1">
                                                            <div className="w-4 h-4 rounded-full bg-red-500" />
                                                            <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-80" />
                                                        </div>
                                                        <span className="text-[7px] font-black tracking-[0.2em] text-gray-400 group-hover/logo:text-tikipal-orange transition-colors">MASTERCARD</span>
                                                    </div>
                                                    <div className="h-14 rounded-2xl bg-white/50 border border-white hover:border-tikipal-orange/30 transition-all flex flex-col items-center justify-center gap-1 shadow-sm group/logo">
                                                        <div className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center text-[8px] text-white font-black italic">p</div>
                                                        <span className="text-[7px] font-black tracking-[0.2em] text-gray-400 group-hover/logo:text-tikipal-orange transition-colors">{language === 'es' ? 'PSE Colombia' : 'PSE Payment'}</span>
                                                    </div>
                                                </div>

                                                {/* Security Verification */}
                                                <div className="pt-4 flex flex-col items-center gap-3">
                                                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                                                        <ShieldCheck size={12} className="text-green-500" />
                                                        {t.profile.personal.security_desc}
                                                    </div>
                                                    <div className="bg-black/5 px-3 py-1.5 rounded-xl border border-black/5 flex items-center gap-2">
                                                        <span className="text-[11px] font-black italic tracking-tighter text-blue-900">Pay</span>
                                                        <span className="text-[11px] font-black italic tracking-tighter text-gray-800">Zen</span>
                                                        <div className="w-px h-2 bg-gray-300" />
                                                        <span className="text-[9px] font-bold text-gray-500 uppercase">{t.profile.personal.edit}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center pt-4">
                                        <Link
                                            href="/"
                                            className="px-5 py-2.5 rounded-full border border-tikipal-orange/20 text-[12px] font-black text-tikipal-orange/70 hover:text-tikipal-orange hover:bg-tikipal-orange/5 transition-all flex items-center gap-2 group/back uppercase tracking-widest shadow-sm"
                                        >
                                            <ArrowLeft size={12} className="group-hover/back:-translate-x-1 transition-transform" />
                                            {t.common.back}
                                        </Link>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success-ticket"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                className="max-w-md mx-auto"
                            >
                                <div className="space-y-8 text-center mb-10">
                                    <div className="flex justify-center">
                                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 shadow-lg shadow-green-500/10 border border-green-500/20">
                                            <Check size={32} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-[32px] font-black tracking-tighter text-gray-900 leading-none">
                                            {t.checkout.success.split(' ')[0]} <span className="text-tikipal-orange">{t.checkout.success.split(' ').slice(1).join(' ')}</span>
                                        </h2>
                                        <p className="text-[14px] font-bold text-gray-400 uppercase tracking-widest">{t.checkout.success_subtitle}</p>
                                    </div>
                                </div>

                                {/* High-Fidelity Digital Ticket */}
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-b from-tikipal-orange/20 to-transparent rounded-[44px] blur-3xl opacity-30 pointer-events-none" />

                                    <div className="relative bg-white rounded-[40px] overflow-hidden shadow-2xl border border-white/50">
                                        <div className="p-10 pb-4">
                                            {/* Badge */}
                                            <div className="flex justify-center mb-6">
                                                <div className="inline-block bg-[#D1FADF] rounded-md px-5 py-2">
                                                    <span className="text-[11px] font-bold text-[#027A48] uppercase tracking-wider">
                                                        {t.ticket_detail.badge}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Title & Info */}
                                            <div className="text-center space-y-1 mb-6">
                                                <h1 className="text-[32px] font-black text-tikipal-orange leading-none tracking-tight">
                                                    {language === 'es' ? 'Theatron: Leyendas' : 'Theatron: Legends'}
                                                </h1>
                                                <p className="text-gray-400 font-bold text-[16px] uppercase tracking-[0.2em]">
                                                    {language === 'es' ? 'CHAPINERO' : 'CHAPINERO DISTRICT'}
                                                </p>
                                            </div>

                                            {/* Date Pill inside ticket */}
                                            <div className="flex items-center justify-center border border-tikipal-orange rounded-full py-3 px-6 gap-0 text-[13px] font-bold text-gray-500 mb-8 bg-white/50">
                                                <div className="flex-1 text-center truncate">{t.common.days.friday}</div>
                                                <div className="w-px h-5 bg-tikipal-orange/30 mx-4"></div>
                                                <div className="flex-[1.5] text-center flex items-center justify-center gap-2">
                                                    <span className="text-tikipal-orange scale-90">🌿</span>
                                                    <span className="text-gray-900 whitespace-nowrap">{language === 'es' ? `06 de ${t.common.months.february}` : `${t.common.months.february} 06`}</span>
                                                    <span className="text-tikipal-orange scale-90">🌿</span>
                                                </div>
                                                <div className="w-px h-5 bg-tikipal-orange/30 mx-4"></div>
                                                <div className="flex-1 text-center font-bold">20:56 - 02:56</div>
                                            </div>

                                            {/* QR Section - Synced with Ticket Detail Style */}
                                            <div className="relative flex justify-center mb-6">
                                                <div className="relative w-64 h-64 border-[4px] border-tikipal-orange rounded-full p-2.5 flex items-center justify-center shadow-tikipal-orange/20 shadow-xl bg-white">
                                                    <div className="w-full h-full rounded-full border border-gray-100 flex items-center justify-center bg-white relative overflow-hidden p-6 shadow-inner">
                                                        <img
                                                            src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=tikipal-entry-07022026-tania&color=000000&bgcolor=ffffff&margin=0`}
                                                            alt="QR Code"
                                                            className="w-full h-full object-contain mix-blend-multiply opacity-95"
                                                        />
                                                        {/* Center Logo - Tikipal Bowtie (Exact from Mis Entradas) */}
                                                        <div className="absolute inset-0 m-auto w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-10 p-2">
                                                            <svg viewBox="0 0 64 64" className="w-full h-full text-tikipal-orange fill-current">
                                                                <path d="M12 20 L30 32 L12 44 Z" />
                                                                <path d="M52 20 L34 32 L52 44 Z" />
                                                                <circle cx="32" cy="32" r="6" />
                                                                <circle cx="32" cy="46" r="2" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-center space-y-2 mb-8">
                                                <h3 className="text-[22px] font-black text-tikipal-orange tracking-tight leading-none">
                                                    {t.ticket_detail.qr_instruction}
                                                </h3>
                                                <p className="text-[13px] font-bold text-gray-400 leading-relaxed px-6">
                                                    {t.ticket_detail.email_notice}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Simple Dotted Divider */}
                                        <div className="w-full h-px px-10">
                                            <div className="border-t border-dashed border-gray-300 w-full"></div>
                                        </div>

                                        <div className="p-10 pt-6 bg-white space-y-6">
                                            <div className="grid grid-cols-2 gap-y-6">
                                                <div className="space-y-0.5">
                                                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{t.ticket_detail.guest}</p>
                                                    <p className="text-[16px] font-bold text-gray-400">Camilo M.</p>
                                                </div>
                                                <div className="space-y-0.5">
                                                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{t.ticket_detail.status}</p>
                                                    <p className="text-[16px] font-bold text-green-500">{t.ticket_detail.attending}</p>
                                                </div>
                                                <div className="space-y-0.5">
                                                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{t.ticket_detail.tickets}</p>
                                                    <p className="text-[16px] font-bold text-gray-900">
                                                        <span className="text-gray-400">1x</span> Standard
                                                    </p>
                                                </div>
                                                <div className="space-y-0.5">
                                                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{t.ticket_detail.value}</p>
                                                    <p className="text-[16px] font-bold text-tikipal-orange">{t.common.free}</p>
                                                </div>
                                            </div>
                                            <button className="w-full py-4.5 bg-[#0F172A] text-white rounded-[20px] font-black text-[16px] tracking-tight flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-black/10">
                                                <MapPin size={20} />
                                                {t.ticket_detail.directions}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center pt-10">
                                    <Link
                                        href="/tickets"
                                        className="text-[12px] font-black text-gray-400 uppercase tracking-widest hover:text-tikipal-orange transition-colors"
                                    >
                                        {t.checkout.all_tickets}
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
