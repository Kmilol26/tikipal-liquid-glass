"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Info, ChevronDown, ChevronLeft, ChevronRight, X, Phone, User, Mail, ShieldCheck } from "lucide-react";

const DATE_OPTIONS = [
    { id: "hoy", label: "Hoy" },
    { id: "mañana", label: "Mañana" },
    { id: "otro", label: "Otras fechas" },
];

function CalendarPicker({ onSelect, onClose }: { onSelect: (date: Date) => void; onClose: () => void }) {
    const [viewDate, setViewDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const padding = Array.from({ length: firstDayOfMonth }, (_, i) => i);

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur Layer specific to Calendar */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-[32px]" onClick={onClose} />

            <div className="relative w-full max-w-[320px] bg-white/10 backdrop-blur-2xl border border-white/30 rounded-[28px] p-6 shadow-2xl ring-1 ring-white/20 select-none animate-in fade-in zoom-in duration-300">
                <div className="flex items-center justify-between mb-6">
                    <button onClick={prevMonth} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-900 group">
                        <ChevronLeft size={20} className="group-active:scale-90 transition-transform" />
                    </button>
                    <h3 className="text-[16px] font-bold text-gray-900 tracking-tight">
                        {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
                    </h3>
                    <button onClick={nextMonth} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-900 group">
                        <ChevronRight size={20} className="group-active:scale-90 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                    {["D", "L", "M", "X", "J", "V", "S"].map((d) => (
                        <div key={d} className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest py-2">
                            {d}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                    {padding.map((p) => (
                        <div key={`p-${p}`} />
                    ))}
                    {days.map((d) => {
                        const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), d);
                        const isToday = new Date().toDateString() === date.toDateString();
                        const isSelected = selectedDate?.toDateString() === date.toDateString();

                        return (
                            <button
                                key={d}
                                onClick={() => {
                                    setSelectedDate(date);
                                    onSelect(date);
                                }}
                                className={`aspect-square flex items-center justify-center rounded-xl text-[13px] transition-all duration-300 hover:scale-110 ${isSelected
                                    ? "bg-tikipal-orange text-white shadow-lg shadow-tikipal-orange/30 scale-105"
                                    : isToday
                                        ? "bg-tikipal-orange/10 text-tikipal-orange border border-tikipal-orange/20"
                                        : "text-gray-900 hover:bg-white/20"
                                    }`}
                            >
                                {d}
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1.5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-gray-900"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}

export function BookingWidget() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedDate, setSelectedDate] = useState("hoy");
    const [customDate, setCustomDate] = useState<Date | null>(null);

    const handleDateSelect = (id: string) => {
        if (id === "otro") {
            setIsCalendarOpen(true);
        } else {
            setSelectedDate(id);
            setCustomDate(null);
        }
    };

    const formatDate = (date: Date) => {
        const d = date.getDate();
        const m = date.toLocaleString('es-ES', { month: 'short' });
        return `${d} ${m}`;
    };

    return (
        <>
            <div className="sticky top-28 group/widget transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                {/* Glossy Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover/widget:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[32px] z-20" />

                <div className={`relative bg-white/[0.22] backdrop-blur-[40px] border border-tikipal-orange/30 rounded-[32px] p-8 shadow-[0_32px_64px_-16px_rgba(255,107,38,0.15)] selection:bg-tikipal-orange/10 ring-1 ring-white/30 transition-all duration-700 overflow-y-auto overflow-x-hidden custom-scrollbar ${isExpanded ? "max-h-[calc(100vh-140px)]" : "max-h-none overflow-hidden"}`}>
                    {/* Inner Top Glow */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent z-20" />

                    {/* Calendar Picker Overlay */}
                    {isCalendarOpen && (
                        <CalendarPicker
                            onSelect={(date) => {
                                setCustomDate(date);
                                setSelectedDate("otro");
                                setIsCalendarOpen(false);
                            }}
                            onClose={() => setIsCalendarOpen(false)}
                        />
                    )}

                    {/* Header */}
                    <div className="mb-8 relative z-10">
                        <h2 className="text-[28px] font-bold tracking-tighter leading-none text-gray-900 uppercase">
                            Entrada Gratuita
                        </h2>
                        {/* Header Reflection Line */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-tikipal-orange/10 to-transparent mt-4" />
                    </div>

                    {/* Schedule Info */}
                    <div className="mb-8 relative z-10">
                        <p className="text-[14px] font-semibold text-gray-900 mb-4">
                            <span className="text-tikipal-orange">Días</span> de atención
                        </p>
                        <div className="flex items-center justify-center py-4 px-6 rounded-[20px] bg-white/20 border border-tikipal-orange/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-xl">
                            <span className="text-[14px] font-bold text-gray-900">Martes - Domingo</span>
                            <div className="h-4 w-px bg-tikipal-orange/30 mx-4"></div>
                            <span className="text-[14px] font-normal text-gray-500">14:00 - <span className="text-tikipal-orange font-medium">02:00</span></span>
                        </div>
                    </div>

                    {/* Date Selection */}
                    <div className="mb-8 relative z-10">
                        <p className="text-[14px] font-semibold text-gray-900 mb-4">
                            <span className="text-tikipal-orange">Selecciona</span> fecha
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                            {DATE_OPTIONS.map((date) => (
                                <button
                                    key={date.id}
                                    onClick={() => handleDateSelect(date.id)}
                                    className={`px-2 py-3.5 rounded-[16px] text-[12px] font-normal transition-all duration-500 border ${selectedDate === date.id
                                        ? "bg-tikipal-orange text-white border-tikipal-orange shadow-[0_8px_20px_-4px_rgba(255,107,38,0.4)] scale-[1.02]"
                                        : "bg-white/30 text-gray-600 border-tikipal-orange/20 hover:border-tikipal-orange/40 hover:bg-white/50"
                                        }`}
                                >
                                    {date.id === "otro" && customDate ? formatDate(customDate) : date.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Collapsible Billing Form */}
                    <div className={`overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${isExpanded ? "max-h-[1000px] opacity-100 mt-8" : "max-h-0 opacity-0"}`}>
                        <div className="pt-6 border-t border-tikipal-orange/10 space-y-6 relative z-10">
                            <p className="text-[14px] font-semibold text-gray-900">
                                <span className="text-tikipal-orange">Información</span> de facturación
                            </p>

                            <div className="relative group">
                                <label className="absolute -top-2.5 left-4 bg-white/80 backdrop-blur-sm px-2 text-[10px] font-black text-gray-400 uppercase tracking-widest group-focus-within:text-tikipal-orange transition-colors z-10 rounded-full border border-gray-100 flex items-center gap-1.5">
                                    <Phone size={10} strokeWidth={3} /> Celular
                                </label>
                                <div className="flex items-center h-14 border border-white/50 rounded-[14px] px-4 bg-white/10 backdrop-blur-xl group-focus-within:border-tikipal-orange/60 group-focus-within:ring-4 group-focus-within:ring-tikipal-orange/5 transition-all duration-300 overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                                    <div className="flex items-center gap-2 border-r border-gray-900/10 pr-3 mr-3 cursor-pointer hover:bg-black/5 p-1 rounded-lg transition-colors">
                                        <span className="text-xl">🇨🇴</span>
                                        <ChevronDown size={14} className="text-gray-400" />
                                    </div>
                                    <span className="text-gray-900 font-bold mr-2">+57</span>
                                    <input
                                        type="tel"
                                        placeholder="300 123 4567"
                                        className="flex-1 bg-transparent border-none outline-none text-[14px] text-gray-900 font-medium placeholder:text-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="relative group/field">
                                <label className="absolute -top-2.5 left-4 bg-white/80 backdrop-blur-sm px-2 text-[10px] font-black text-gray-400 uppercase tracking-widest group-focus-within/field:text-tikipal-orange transition-colors z-10 rounded-full border border-gray-100 flex items-center gap-1.5">
                                    <User size={10} strokeWidth={3} /> Nombre
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ej: Camilo"
                                    className="w-full h-14 border border-white/50 rounded-[14px] px-4 bg-white/10 backdrop-blur-xl outline-none text-[14px] text-gray-900 font-medium group-focus-within/field:border-tikipal-orange/60 group-focus-within/field:ring-4 group-focus-within/field:ring-tikipal-orange/5 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder:text-gray-300"
                                />
                            </div>

                            <div className="relative group/field">
                                <label className="absolute -top-2.5 left-4 bg-white/80 backdrop-blur-sm px-2 text-[10px] font-black text-gray-400 uppercase tracking-widest group-focus-within/field:text-tikipal-orange transition-colors z-10 rounded-full border border-gray-100 flex items-center gap-1.5">
                                    <User size={10} strokeWidth={3} /> Apellido
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ej: Martinez"
                                    className="w-full h-14 border border-white/50 rounded-[14px] px-4 bg-white/10 backdrop-blur-xl outline-none text-[14px] text-gray-900 font-medium group-focus-within/field:border-tikipal-orange/60 group-focus-within/field:ring-4 group-focus-within/field:ring-tikipal-orange/5 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder:text-gray-300"
                                />
                            </div>

                            <div className="relative group/field">
                                <label className="absolute -top-2.5 left-4 bg-white/80 backdrop-blur-sm px-2 text-[10px] font-black text-gray-400 uppercase tracking-widest group-focus-within/field:text-tikipal-orange transition-colors z-10 rounded-full border border-gray-100 flex items-center gap-1.5">
                                    <Mail size={10} strokeWidth={3} /> E-mail
                                </label>
                                <input
                                    type="email"
                                    placeholder="camilo.m@tikipal.com"
                                    className="w-full h-14 border border-white/50 rounded-[14px] px-4 bg-white/10 backdrop-blur-xl outline-none text-[14px] text-gray-900 font-medium group-focus-within/field:border-tikipal-orange/60 group-focus-within/field:ring-4 group-focus-within/field:ring-tikipal-orange/5 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] placeholder:text-gray-300"
                                />
                            </div>

                            {/* Final CTA */}
                            <button
                                onClick={() => setShowConfirmation(true)}
                                className="w-full bg-tikipal-orange text-white h-16 rounded-[22px] font-bold text-[18px] tracking-tight shadow-[0_20px_40px_-10px_rgba(255,107,38,0.3)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(255,107,38,0.4)] active:scale-[0.98] mt-4 relative overflow-hidden group/cta"
                            >
                                <span className="relative z-10">Obtener entrada</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500" />
                            </button>

                            {/* Footer Terms */}
                            <p className="text-[11px] text-gray-500 text-center leading-relaxed px-4 opacity-80">
                                Al enviar tu información aceptas los{" "}
                                <span className="text-tikipal-orange underline cursor-pointer hover:text-tikipal-orange/80 transition-colors">
                                    términos y condiciones
                                </span>{" "}
                                de los datos registrados en este sitio.
                            </p>
                        </div>
                    </div>

                    {/* Main Toggle Button */}
                    {!isExpanded && (
                        <div className="mt-8 space-y-4 relative z-10">
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="w-full relative overflow-hidden group/btn bg-tikipal-orange text-white h-16 rounded-[22px] font-semibold text-[13px] tracking-[0.2em] shadow-[0_15px_30px_-5px_rgba(255,107,38,0.3)] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span className="relative z-10">Continuar</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                            </button>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-[10px] font-normal text-gray-400 tracking-tight">+14 asistirán</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Confirmation Modal Overlay - Moved outside for global positioning */}
            <AnimatePresence>
                {showConfirmation && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowConfirmation(false)}
                            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-[500px] bg-white rounded-[40px] p-8 sm:p-10 shadow-2xl overflow-hidden"
                        >
                            {/* Inner Glow Decorative */}
                            <div className="absolute inset-0 bg-gradient-to-br from-tikipal-orange/5 via-transparent to-transparent pointer-events-none" />

                            <div className="relative z-10 text-center">
                                {/* Decorative Icon */}
                                <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-tikipal-orange/10 flex items-center justify-center mb-6 sm:mb-8 border border-tikipal-orange/20">
                                    <ShieldCheck className="text-tikipal-orange" size={32} sm-size={40} strokeWidth={1.5} />
                                </div>

                                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 text-left sm:text-center">
                                    <p className="text-[14px] sm:text-[15px] text-gray-700 font-medium leading-[1.6]">
                                        ¡Gracias por elegirnos! Nos enorgullece ofrecer una experiencia única a nuestros clientes y para lograrlo, nos reservamos el derecho de admisión y permanencia en el sitio.
                                    </p>
                                    <p className="text-[14px] sm:text-[15px] text-gray-700 font-medium leading-[1.6]">
                                        Por favor, asegúrate de cumplir con nuestro código de vestimenta antes de ingresar.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    <button
                                        onClick={() => setShowConfirmation(false)}
                                        className="h-14 rounded-2xl border border-gray-200 text-gray-600 font-bold text-[14px] hover:bg-gray-50 transition-colors"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowConfirmation(false);
                                            window.location.href = "/checkout";
                                        }}
                                        className="h-14 rounded-2xl bg-tikipal-orange text-white font-bold text-[14px] shadow-lg shadow-tikipal-orange/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                                    >
                                        Continuar
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

