"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TicketCard } from "@/components/tickets/TicketCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UPCOMING_TICKETS, PAST_TICKETS } from "@/data/mockTickets";

import { useLanguage } from "@/context/LanguageContext";

export default function TicketsPage() {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

    // Helper to translate ticket types and dates from mock data
    const translateTicketData = (ticket: any) => {
        const typeMap: Record<string, string> = {
            "VIP Pass": t.checkout.guest, // Just using guest as placeholder or common terms
            "Día 3": language === 'es' ? "Día 3" : "Day 3",
            "Early Bird": "Early Bird",
            "General": language === 'es' ? "General" : "General Admission",
            "Gratuito": t.common.free
        };

        // Localize date months (e.g., "04 ABR" -> "04 APR")
        const monthMap: Record<string, string> = {
            "ENE": language === 'es' ? "ENE" : "JAN",
            "FEB": language === 'es' ? "FEB" : "FEB",
            "MAR": language === 'es' ? "MAR" : "MAR",
            "ABR": language === 'es' ? "ABR" : "APR",
            "MAY": language === 'es' ? "MAY" : "MAY",
            "JUN": language === 'es' ? "JUN" : "JUN"
        };

        const localizedDate = ticket.date.split(' ').map((part: string) => monthMap[part] || part).join(' ');

        return {
            ...ticket,
            title: ticket.title === "Theatron: Leyendas" && language === 'en' ? "Theatron: Legends" : ticket.title,
            type: typeMap[ticket.type] || ticket.type,
            date: localizedDate
        };
    };

    return (
        <div className="min-h-screen selection:bg-tikipal-orange/20 pb-20 relative overflow-hidden bg-transparent">
            <Header />

            {/* Background Glow - Subtle Orange Orb */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-tikipal-orange/10 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-multiply"></div>

            <main className="max-w-[1200px] mx-auto px-6 pt-6 relative z-10">

                {/* Header Section */}
                <div className="mb-8 text-center space-y-2">
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight">{t.tickets.title}</h1>
                    <p className="text-sm font-medium text-gray-500">
                        {t.tickets.subtitle}
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="bg-gray-200/50 p-1.5 rounded-full flex relative w-64 backdrop-blur-sm">

                        {/* Active Tab Indicator */}
                        <motion.div
                            className="absolute bg-white rounded-full shadow-sm border border-black/5"
                            layoutId="activeTab"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            style={{
                                width: '50%',
                                height: 'calc(100% - 12px)',
                                top: 6,
                                left: activeTab === "upcoming" ? 6 : '50%'
                            }}
                        />

                        <button
                            onClick={() => setActiveTab("upcoming")}
                            className={`flex-1 relative z-10 py-2.5 text-sm font-bold text-center rounded-full transition-colors duration-300 ${activeTab === "upcoming" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                        >
                            {t.tickets.tabs.upcoming}
                        </button>
                        <button
                            onClick={() => setActiveTab("past")}
                            className={`flex-1 relative z-10 py-2.5 text-sm font-bold text-center rounded-full transition-colors duration-300 ${activeTab === "past" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                        >
                            {t.tickets.tabs.past}
                        </button>
                    </div>
                </div>

                {/* Ticket List */}
                <div className="space-y-6 relative z-10">
                    <AnimatePresence mode="wait">
                        {activeTab === "upcoming" ? (
                            <motion.div
                                key="upcoming"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                {UPCOMING_TICKETS.map(ticket => (
                                    <TicketCard
                                        key={ticket.id}
                                        event={translateTicketData(ticket)}
                                    />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="past"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                {PAST_TICKETS.map(ticket => (
                                    <div key={ticket.id} className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                        <TicketCard event={translateTicketData(ticket)} />
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
