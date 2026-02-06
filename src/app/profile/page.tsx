"use client";

import { Header } from "@/components/Header";
import { LiquidBackground } from "@/components/layout/LiquidBackground";
import { User, Mail, Phone, Calendar, ShieldCheck, ChevronRight, CreditCard, Bell, LogOut, Plus, Check, Smartphone, MessageSquare, Ticket, Zap, Lock } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Section = "personal" | "payments" | "notifications";

export default function ProfilePage() {
    const { t, language } = useLanguage();
    const [activeSection, setActiveSection] = useState<Section>("personal");

    return (
        <div className="min-h-screen bg-transparent selection:bg-tikipal-orange/20 relative overflow-hidden">
            <LiquidBackground />
            <Header />

            <main className="relative z-10 pt-4 pb-20">
                {/* Breadcrumb Navigation */}
                <div className="max-w-[1240px] mx-auto px-6 mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-900/40">
                        <Link href="/explore" className="hover:text-tikipal-orange transition-colors">Colombia</Link>
                        <span>/</span>
                        <Link href="/explore" className="hover:text-tikipal-orange transition-colors">{t.header.bogota}</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-normal">{t.profile.breadcrumb}</span>
                        {activeSection !== "personal" && (
                            <>
                                <span>/</span>
                                <span className="text-tikipal-orange font-bold uppercase tracking-wider text-[10px]">
                                    {activeSection === "payments" ? t.profile.sections.payments : t.profile.sections.notifications}
                                </span>
                            </>
                        )}
                    </div>
                </div>

                <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Mobile Section Selector (Segmented Control) */}
                    <div className="lg:hidden mb-8 overflow-x-auto -mx-6 px-6 scrollbar-hide">
                        <div className="flex bg-white/40 backdrop-blur-xl p-1.5 rounded-2xl border border-white/60 min-w-max">
                            {[
                                { id: "personal", label: t.profile.sections.personal.split(' ')[0], icon: User, color: "text-tikipal-orange" },
                                { id: "payments", label: t.profile.sections.payments.split(' ')[0], icon: CreditCard, color: "text-blue-500" },
                                { id: "notifications", label: t.profile.sections.notifications.split(' ')[0], icon: Bell, color: "text-purple-500" }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveSection(tab.id as Section)}
                                    className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all duration-300 ${activeSection === tab.id ? "bg-white shadow-sm text-gray-900 border border-white" : "text-gray-400"}`}
                                >
                                    <tab.icon size={16} className={activeSection === tab.id ? tab.color : ""} />
                                    <span className="text-[13px] font-black">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Left Column: Profile Summary & Navigation (Sidebar on Desktop) */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[32px] p-8 shadow-xl shadow-black/5"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-4">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-tikipal-orange to-orange-400 flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-tikipal-orange/20">
                                        CM
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 border-4 border-white rounded-full flex items-center justify-center text-white shadow-sm">
                                        <ShieldCheck size={14} />
                                    </div>
                                </div>
                                <h1 className="text-2xl font-black text-gray-900 tracking-tight">Camilo M.</h1>
                                <p className="text-sm font-medium text-tikipal-orange mt-1">{t.common.verified}</p>

                                <div className="w-full h-px bg-gray-200/50 my-6" />

                                <div className="hidden lg:block w-full space-y-2">
                                    <button
                                        onClick={() => setActiveSection("personal")}
                                        className={`w-full p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${activeSection === "personal" ? "bg-white/80 border-white shadow-sm" : "bg-transparent border-transparent hover:bg-white/40 hover:border-white"}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeSection === "personal" ? "bg-tikipal-orange text-white" : "bg-tikipal-orange/10 text-tikipal-orange"}`}>
                                                <User size={18} />
                                            </div>
                                            <span className={`font-bold text-sm transition-colors ${activeSection === "personal" ? "text-gray-900" : "text-gray-600"}`}>{t.profile.sections.personal}</span>
                                        </div>
                                        <ChevronRight size={16} className={`transition-all duration-300 ${activeSection === "personal" ? "text-tikipal-orange translate-x-1" : "text-gray-300 group-hover:translate-x-1"}`} />
                                    </button>

                                    <button
                                        onClick={() => setActiveSection("payments")}
                                        className={`w-full p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${activeSection === "payments" ? "bg-white/80 border-white shadow-sm" : "bg-transparent border-transparent hover:bg-white/40 hover:border-white"}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeSection === "payments" ? "bg-blue-500 text-white" : "bg-blue-500/10 text-blue-500"}`}>
                                                <CreditCard size={18} />
                                            </div>
                                            <span className={`font-bold text-sm transition-colors ${activeSection === "payments" ? "text-gray-900" : "text-gray-600"}`}>{t.profile.sections.payments}</span>
                                        </div>
                                        <ChevronRight size={16} className={`transition-all duration-300 ${activeSection === "payments" ? "text-blue-500 translate-x-1" : "text-gray-300 group-hover:translate-x-1"}`} />
                                    </button>

                                    <button
                                        onClick={() => setActiveSection("notifications")}
                                        className={`w-full p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${activeSection === "notifications" ? "bg-white/80 border-white shadow-sm" : "bg-transparent border-transparent hover:bg-white/40 hover:border-white"}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeSection === "notifications" ? "bg-purple-500 text-white" : "bg-purple-500/10 text-purple-500"}`}>
                                                <Bell size={18} />
                                            </div>
                                            <span className={`font-bold text-sm transition-colors ${activeSection === "notifications" ? "text-gray-900" : "text-gray-600"}`}>{t.profile.sections.notifications}</span>
                                        </div>
                                        <ChevronRight size={16} className={`transition-all duration-300 ${activeSection === "notifications" ? "text-purple-500 translate-x-1" : "text-gray-300 group-hover:translate-x-1"}`} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        <button className="hidden lg:flex w-full p-4 items-center gap-3 text-gray-400 hover:text-red-500 transition-colors font-bold text-sm px-8">
                            <LogOut size={18} />
                            {t.common.logout}
                        </button>
                    </div>

                    <div className="lg:col-span-8 min-h-[600px]">
                        <AnimatePresence mode="wait">
                            {activeSection === "personal" && (
                                <motion.div
                                    key="personal"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[32px] p-8 shadow-xl shadow-black/5 h-full"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <h2 className="text-2xl font-black text-gray-800 tracking-tight flex items-center gap-3">
                                            <User className="text-tikipal-orange" size={24} />
                                            {t.profile.sections.personal}
                                        </h2>
                                        <button className="text-sm font-bold text-tikipal-orange hover:underline px-4 py-2 rounded-full hover:bg-tikipal-orange/5 transition-colors">
                                            {t.profile.personal.edit}
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                        <div className="space-y-1.5 p-4 rounded-2xl bg-white/40 border border-white/40 backdrop-blur-sm">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                                <User size={10} /> {t.profile.personal.name}
                                            </label>
                                            <p className="text-sm font-bold text-gray-700">Camilo Martinez</p>
                                        </div>

                                        <div className="space-y-1.5 p-4 rounded-2xl bg-white/40 border border-white/40 backdrop-blur-sm">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                                <Mail size={10} /> {t.profile.personal.email}
                                            </label>
                                            <p className="text-sm font-bold text-gray-700">camilo.m@tikipal.com</p>
                                        </div>

                                        <div className="space-y-1.5 p-4 rounded-2xl bg-white/40 border border-white/40 backdrop-blur-sm">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                                <Phone size={10} /> {t.profile.personal.phone}
                                            </label>
                                            <p className="text-sm font-bold text-gray-700">+57 325 000 0000</p>
                                        </div>

                                        <div className="space-y-1.5 p-4 rounded-2xl bg-white/40 border border-white/40 backdrop-blur-sm">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                                <Calendar size={10} /> {t.profile.personal.birth}
                                            </label>
                                            <p className="text-sm font-bold text-gray-700">{language === 'es' ? '06 de Febrero, 1995' : 'February 06, 1995'}</p>
                                        </div>
                                    </div>

                                    <div className="mt-12 p-8 rounded-[28px] bg-gradient-to-br from-tikipal-orange/5 to-orange-500/5 border border-tikipal-orange/10 relative overflow-hidden group">
                                        <div className="flex items-start gap-4 relative z-10">
                                            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-tikipal-orange shrink-0">
                                                <ShieldCheck size={24} />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="font-black text-gray-800">{t.profile.personal.security_title}</h4>
                                                <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-[400px]">
                                                    {t.profile.personal.security_desc}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-tikipal-orange/5 rounded-full blur-2xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-125 pointer-events-none" />
                                    </div>
                                </motion.div>
                            )}

                            {activeSection === "payments" && (
                                <motion.div
                                    key="payments"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[32px] p-8 shadow-xl shadow-black/5 h-full"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <h2 className="text-2xl font-black text-gray-800 tracking-tight flex items-center gap-3">
                                            <CreditCard className="text-blue-500" size={24} />
                                            {t.profile.sections.payments}
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Virtual Glass Card 1 */}
                                        <div className="relative aspect-[1.6/1] rounded-[24px] overflow-hidden group cursor-pointer border border-white/40 shadow-xl shadow-black/5">
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 flex flex-col justify-between text-white">
                                                <div className="flex justify-between items-start">
                                                    <div className="w-12 h-8 rounded-md bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                                        <div className="flex -space-x-2">
                                                            <div className="w-4 h-4 rounded-full bg-red-500/80" />
                                                            <div className="w-4 h-4 rounded-full bg-orange-500/80" />
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Tikipal Premium</span>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="flex gap-4">
                                                        <span className="text-xl font-bold tracking-[0.2em]">••••</span>
                                                        <span className="text-xl font-bold tracking-[0.2em]">••••</span>
                                                        <span className="text-xl font-bold tracking-[0.2em]">••••</span>
                                                        <span className="text-xl font-bold tracking-widest">4242</span>
                                                    </div>
                                                    <div className="flex justify-between items-end">
                                                        <div>
                                                            <p className="text-[8px] font-black uppercase tracking-widest opacity-50 mb-0.5">{t.profile.payments.card_holder}</p>
                                                            <p className="text-xs font-bold font-mono">CAMILO MARTINEZ</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-[8px] font-black uppercase tracking-widest opacity-50 mb-0.5">{t.profile.payments.expires}</p>
                                                            <p className="text-xs font-bold font-mono">12/26</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-tr from-tikipal-orange/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        </div>

                                        {/* Add Method Card */}
                                        <button className="relative aspect-[1.6/1] rounded-[24px] border-2 border-dashed border-gray-300 hover:border-tikipal-orange hover:bg-white/60 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-gray-400 hover:text-tikipal-orange">
                                            <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-tikipal-orange/10 flex items-center justify-center transition-colors">
                                                <Plus size={24} />
                                            </div>
                                            <span className="text-sm font-black uppercase tracking-widest">{t.profile.payments.add}</span>
                                        </button>
                                    </div>

                                    <div className="mt-12 space-y-4">
                                        <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">{t.profile.payments.recent}</h3>
                                        <div className="space-y-2">
                                            {[1, 2].map((i) => (
                                                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/40 border border-white/20 hover:border-white transition-all cursor-pointer">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                                                            <CreditCard size={18} />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold text-gray-800">Cacao Blunt Bar</p>
                                                            <p className="text-[10px] text-gray-500 font-medium tracking-wide">{language === 'es' ? `06 de Feb, 2025` : `Feb 06, 2025`} • VISA **** 4242</p>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm font-black text-gray-900">$45.000</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeSection === "notifications" && (
                                <motion.div
                                    key="notifications"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[32px] p-8 shadow-xl shadow-black/5 h-full"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <h2 className="text-2xl font-black text-gray-800 tracking-tight flex items-center gap-3">
                                            <Bell className="text-purple-500" size={24} />
                                            {t.profile.sections.notifications}
                                        </h2>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">{t.profile.notifications.channels}</h3>
                                            <div className="space-y-3">
                                                {[
                                                    { title: t.profile.notifications.push.title, desc: t.profile.notifications.push.desc, active: true, icon: Smartphone, color: "text-tikipal-orange" },
                                                    { title: t.profile.notifications.email.title, desc: t.profile.notifications.email.desc, active: true, icon: Mail, color: "text-blue-500" },
                                                    { title: t.profile.notifications.sms.title, desc: t.profile.notifications.sms.desc, active: false, icon: MessageSquare, color: "text-green-500" }
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/40 border border-white/20 hover:border-white transition-all group">
                                                        <div className="flex items-center gap-4">
                                                            <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${item.color}`}>
                                                                <item.icon size={18} />
                                                            </div>
                                                            <div className="space-y-0.5">
                                                                <p className="text-sm font-bold text-gray-800">{item.title}</p>
                                                                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                                                            </div>
                                                        </div>
                                                        <button className={`w-12 h-6 rounded-full transition-all duration-300 relative flex items-center px-1 ${item.active ? "bg-tikipal-orange" : "bg-gray-300"}`}>
                                                            <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-300 ${item.active ? "translate-x-6" : "translate-x-0"}`} />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">{t.profile.notifications.activity_title}</h3>
                                            <div className="space-y-3">
                                                {[
                                                    { title: t.profile.notifications.new_events, active: true, icon: Ticket },
                                                    { title: t.profile.notifications.promos, active: false, icon: Zap },
                                                    { title: t.profile.notifications.security_alerts, active: true, icon: Lock }
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/40 border border-white/20 hover:border-white transition-all">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                                                                <item.icon size={16} />
                                                            </div>
                                                            <p className="text-sm font-bold text-gray-800">{item.title}</p>
                                                        </div>
                                                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all duration-300 ${item.active ? "bg-tikipal-orange/10 border-tikipal-orange text-tikipal-orange" : "bg-white/20 border-gray-300 text-transparent"}`}>
                                                            <Check size={14} strokeWidth={4} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </main>
        </div>
    );
}
