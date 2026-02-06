"use client";

import { Header } from "@/components/Header";
import { UPCOMING_TICKETS, PAST_TICKETS } from "@/data/mockTickets";
import { ArrowLeft, MapPin, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { use, useEffect, useState } from "react";

export default function TicketDetailPage() {
    const { t, language } = useLanguage();
    const params = useParams();
    const id = params?.id as string;

    const allTickets = [...UPCOMING_TICKETS, ...PAST_TICKETS];
    const ticket = allTickets.find(t => t.id === id);

    if (!ticket) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-transparent selection:bg-tikipal-orange/20 pb-20 relative overflow-hidden">
            <Header />

            {/* Background Glow */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-tikipal-orange/10 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-multiply"></div>

            <main className="relative z-10 pt-4 pb-20">
                {/* Breadcrumb Navigation - Aligned with project grid */}
                <div className="max-w-[1240px] mx-auto px-6 mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-900/40">
                        <Link href="/explore" className="hover:text-tikipal-orange transition-colors">Colombia</Link>
                        <span>/</span>
                        <Link href="/explore" className="hover:text-tikipal-orange transition-colors">{t.header.bogota}</Link>
                        <span>/</span>
                        <Link href="/tickets" className="hover:text-tikipal-orange transition-colors">{t.ticket_detail.breadcrumb}</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-normal truncate max-w-[150px]">{ticket.title}</span>
                    </div>
                    <button className="text-gray-400 hover:text-tikipal-orange transition-colors">
                        <Share2 size={18} />
                    </button>
                </div>

                <div className="max-w-md mx-auto px-4 sm:px-6">
                    {/* Ticket Card Component (Cacao Blunt Bar Style) */}
                    <div className="relative w-full bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl shadow-black/5 animation-fade-in-up">
                        <div className="p-5 sm:p-8 pb-3 sm:pb-4 text-center">
                            {/* Badge */}
                            <div className="flex justify-center mb-4">
                                <div className="inline-block bg-[#D1FADF] rounded-md px-4 py-1.5">
                                    <span className="text-[10px] sm:text-[11px] font-bold text-[#027A48] uppercase tracking-wider">
                                        {t.ticket_detail.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Title & Info */}
                            <div className="space-y-0.5 mb-2 sm:mb-4">
                                <h1 className="text-xl sm:text-[32px] font-black text-tikipal-orange leading-none tracking-tight">
                                    {ticket.title}
                                </h1>
                                <p className="text-gray-400 font-bold text-sm sm:text-[16px] uppercase tracking-[0.2em]">
                                    {ticket.location}
                                </p>
                            </div>

                            {/* Date Pill */}
                            <div className="flex items-center justify-center border border-tikipal-orange rounded-full py-2.5 px-4 sm:py-3 sm:px-6 gap-0 text-[11px] sm:text-[13px] font-bold text-gray-500 mb-6 sm:mb-8 bg-white/50">
                                <div className="flex-1 text-center">{t.common.days.friday}</div>
                                <div className="w-px h-4 sm:h-5 bg-tikipal-orange/30 mx-2 sm:mx-4"></div>
                                <div className="flex-[1.5] text-center flex items-center justify-center gap-1.5 sm:gap-2">
                                    <span className="text-tikipal-orange scale-90">🌿</span>
                                    <span className="text-gray-900">{language === 'es' ? `06 de ${t.common.months.february}` : `${t.common.months.february} 06`}</span>
                                    <span className="text-tikipal-orange scale-90">🌿</span>
                                </div>
                                <div className="w-px h-4 sm:h-5 bg-tikipal-orange/30 mx-2 sm:mx-4"></div>
                                <div className="flex-1 text-center font-bold">20:56 - 02:56</div>
                            </div>

                            {/* QR Section */}
                            <div className="relative flex justify-center mb-4 sm:mb-6">
                                <div className="relative w-48 h-48 sm:w-64 sm:h-64 border-[4px] border-tikipal-orange rounded-full p-2 sm:p-2.5 flex items-center justify-center shadow-tikipal-orange/20 shadow-xl bg-white">
                                    <div className="w-full h-full rounded-full border border-gray-100 flex items-center justify-center bg-white relative overflow-hidden p-4 sm:p-6 shadow-inner">
                                        <img
                                            src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${ticket.code}&color=000000&bgcolor=ffffff&margin=0`}
                                            alt="QR Code"
                                            className="w-full h-full object-contain mix-blend-multiply opacity-95"
                                        />
                                        {/* Center Logo - Tikipal Bowtie */}
                                        <div className="absolute inset-0 m-auto w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center z-10 p-1.5 sm:p-2">
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

                            <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                                <h3 className="text-lg sm:text-[22px] font-black text-tikipal-orange tracking-tight leading-none">
                                    {t.ticket_detail.qr_instruction}
                                </h3>
                                <p className="text-[11px] sm:text-[13px] font-bold text-gray-400 leading-relaxed px-4 sm:px-6">
                                    {t.ticket_detail.email_notice}
                                </p>
                            </div>
                        </div>

                        {/* Simple Dotted Divider */}
                        <div className="w-full h-px px-10">
                            <div className="border-t border-dashed border-gray-300 w-full"></div>
                        </div>

                        {/* Footer Details */}
                        <div className="p-6 sm:p-10 pt-4 sm:pt-6 bg-white space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 sm:gap-y-6">
                                <div className="space-y-0.5">
                                    <p className="text-[10px] sm:text-[11px] font-black text-gray-400 uppercase tracking-widest">{t.ticket_detail.guest}</p>
                                    <p className="text-sm sm:text-[16px] font-bold text-gray-400">Camilo M.</p>
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] sm:text-[11px] font-black text-gray-400 uppercase tracking-widest">{t.ticket_detail.status}</p>
                                    <p className="text-sm sm:text-[16px] font-bold text-green-500">{t.ticket_detail.attending}</p>
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] sm:text-[11px] font-black text-gray-400 uppercase tracking-widest">{t.ticket_detail.tickets}</p>
                                    <p className="text-sm sm:text-[16px] font-bold text-gray-900">
                                        <span className="text-gray-400 font-medium">1x</span> Standard
                                    </p>
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] sm:text-[11px] font-black text-gray-400 uppercase tracking-widest">{t.ticket_detail.value}</p>
                                    <p className="text-sm sm:text-[16px] font-bold text-tikipal-orange">{t.common.free}</p>
                                </div>
                            </div>

                            <button className="w-full py-4 sm:py-4.5 bg-[#0F172A] text-white rounded-[16px] sm:rounded-[20px] font-black text-sm sm:text-[16px] tracking-tight flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl shadow-black/10">
                                <MapPin size={20} />
                                {t.ticket_detail.directions}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
