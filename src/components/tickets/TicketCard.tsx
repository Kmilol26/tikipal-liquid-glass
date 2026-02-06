"use client";

import { QrCode, MapPin, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface TicketProps {
    event: {
        id: string;
        title: string;
        image: string;
        date: string;       // e.g., "23 MAR"
        time: string;       // e.g., "11:00 PM"
        location: string;   // e.g., "Theatron"
        type: string;       // e.g., "General"
        code: string;       // QR code content
    };
}

export function TicketCard({ event }: TicketProps) {
    const { t } = useLanguage();
    return (
        <div className="relative w-full overflow-hidden group">
            <Link href={`/tickets/${event.id}`}>
                {/* Main Card Container */}
                <div className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-[32px] overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-tikipal-orange/10 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col cursor-pointer">

                    {/* Top Section: Image & Badge */}
                    <div className="relative aspect-square w-full group-hover:scale-105 transition-all duration-500">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 px-2 py-0.5 rounded-full">
                            <span className="text-[9px] font-black text-white uppercase tracking-wider">{event.type}</span>
                        </div>

                        <div className="absolute bottom-3 left-4 right-4">
                            <h3 className="text-lg font-black text-white leading-tight mb-0.5 shadow-black/5 text-shadow-sm line-clamp-2">{event.title}</h3>
                        </div>
                    </div>

                    {/* Perforated Line Effect */}
                    <div className="relative h-4 flex items-center justify-between bg-white w-full -mt-0.5 z-10">
                        <div className="w-3 h-3 rounded-full bg-slate-50 -ml-1.5 shadow-inner" />
                        <div className="flex-1 border-b-[1.5px] border-dashed border-gray-200 mx-1" />
                        <div className="w-3 h-3 rounded-full bg-slate-50 -mr-1.5 shadow-inner" />
                    </div>

                    {/* Bottom Section: Details */}
                    <div className="p-4 pt-1 bg-white flex flex-col gap-3 flex-1">
                        <div className="space-y-2">
                            {/* Detail Rows - Compact */}
                            <div className="flex items-center gap-2 text-gray-600">
                                <Calendar size={14} className="text-tikipal-orange" />
                                <p className="text-xs font-bold text-gray-900">{event.date}</p>
                            </div>

                            <div className="flex items-center gap-2 text-gray-600">
                                <Clock size={14} className="text-blue-500" />
                                <p className="text-xs font-medium text-gray-600">{event.time}</p>
                            </div>
                        </div>

                        {/* QR Button - Visual Only */}
                        <div className="w-full mt-auto py-2 bg-gray-50 hover:bg-tikipal-orange/10 border border-gray-100 hover:border-tikipal-orange/20 rounded-xl flex items-center justify-center gap-2 group/btn transition-all duration-300">
                            <QrCode size={16} className="text-gray-400 group-hover/btn:text-tikipal-orange transition-colors" />
                            <span className="text-[10px] font-bold text-gray-500 group-hover/btn:text-tikipal-orange transition-colors uppercase tracking-wide">{t.ticket_card.view_qr}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
