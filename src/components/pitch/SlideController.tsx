"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    AlertCircle,
    Banknote,
    BarChart3,
    Briefcase,
    Building2,
    Check,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Coins,
    CreditCard,
    Globe,
    LayoutDashboard,
    MapPin,
    PartyPopper,
    QrCode,
    Rocket,
    Settings,
    Share2,
    Smartphone,
    Store,
    Target,
    Ticket,
    Users,
    Wine,
    type LucideIcon,
} from "lucide-react";
import { PITCH_DECK_CONTENT, Slide } from "@/data/pitch-deck";

const inUp = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
};

const TikipalLogo = ({ light = false }: { light?: boolean }) => (
    <img
        src={light ? "/brand/logo-white-text.png" : "/brand/logo-orange-text.png"}
        alt="Tikipal"
        className="h-8 w-auto object-contain"
    />
);

const SlideFrame = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
    <div className={`relative h-full w-full overflow-hidden ${dark ? "bg-slate-900" : "bg-white"}`}>
        {!dark && (
            <>
                <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_90%_-10%,rgba(249,115,22,0.18),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_0%_100%,rgba(14,165,233,0.10),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.88),rgba(255,255,255,0.72))]" />
            </>
        )}
        {dark && (
            <>
                <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_15%_10%,rgba(251,146,60,0.22),transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_90%_90%,rgba(56,189,248,0.16),transparent_60%)]" />
            </>
        )}
        <div className="relative z-10 h-full w-full">{children}</div>
    </div>
);

const Label = ({ text, tone = "orange" }: { text: string; tone?: "orange" | "red" | "blue" | "green" | "violet" }) => {
    const tones = {
        orange: "border-orange-200 bg-orange-50 text-orange-600",
        red: "border-red-200 bg-red-50 text-red-600",
        blue: "border-blue-200 bg-blue-50 text-blue-600",
        green: "border-emerald-200 bg-emerald-50 text-emerald-600",
        violet: "border-violet-200 bg-violet-50 text-violet-600",
    };

    return <span className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] ${tones[tone]}`}>{text}</span>;
};

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative overflow-hidden rounded-[28px] border border-white/70 bg-white/75 backdrop-blur-2xl shadow-[0_16px_36px_rgba(15,23,42,0.08)] ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-transparent to-transparent" />
        <div className="relative z-10">{children}</div>
    </div>
);

const CoverSlide = ({ slide }: { slide: Slide }) => (
    <SlideFrame>
        <div className="flex h-full flex-col items-center justify-center px-12 text-center">
            <motion.div {...inUp} transition={{ duration: 0.35 }} className="mb-8">
                <TikipalLogo />
            </motion.div>
            <motion.h1 {...inUp} transition={{ delay: 0.06, duration: 0.45 }} className="max-w-5xl text-5xl font-black leading-[0.97] tracking-tight text-slate-900 md:text-7xl">
                {slide.title}
            </motion.h1>
            <motion.p {...inUp} transition={{ delay: 0.14, duration: 0.45 }} className="mt-6 max-w-3xl text-xl font-medium leading-relaxed text-slate-500">
                {slide.subtitle}
            </motion.p>
            <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 md:grid-cols-3">
                {[
                    { k: "Traccion", v: "+100k transacciones" },
                    { k: "Modelo", v: "SaaS + take rate" },
                    { k: "Tesis", v: "Infraestructura nightlife" },
                ].map((item, idx) => (
                    <motion.div {...inUp} transition={{ delay: 0.2 + idx * 0.08 }} key={item.k}>
                        <GlassCard className="px-4 py-3 text-left">
                            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">{item.k}</p>
                            <p className="mt-1 text-sm font-bold text-slate-800">{item.v}</p>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </div>
    </SlideFrame>
);

const ProblemSlide = ({ slide }: { slide: Slide }) => {
    const icons: LucideIcon[] = [AlertCircle, CreditCard, Smartphone, Target];
    return (
        <SlideFrame>
            <div className="h-full px-12 py-12">
                <motion.div {...inUp} className="mb-5">
                    <Label text="Problema" tone="red" />
                </motion.div>
                <motion.h2 {...inUp} transition={{ delay: 0.06 }} className="max-w-4xl text-5xl font-black leading-tight text-slate-900">
                    {slide.title}
                </motion.h2>
                <motion.p {...inUp} transition={{ delay: 0.12 }} className="mt-3 max-w-3xl text-lg text-slate-500">
                    {slide.subtitle}
                </motion.p>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {slide.content.map((point, idx) => {
                        const Icon = icons[idx] || AlertCircle;
                        const [title, ...rest] = point.split(":");
                        return (
                            <motion.div {...inUp} transition={{ delay: 0.18 + idx * 0.08 }} key={idx}>
                                <GlassCard className="h-full p-5">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                                        <Icon size={18} />
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">{title.trim()}</p>
                                    <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700">{rest.join(":").trim() || point}</p>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SlideFrame>
    );
};

const ValuePropSlide = ({ slide }: { slide: Slide }) => {
    const meta = [
        { icon: Globe, chip: "Operacion 360" },
        { icon: Smartphone, chip: "Checkout rapido" },
        { icon: BarChart3, chip: "Data accionable" },
    ];

    return (
        <SlideFrame>
            <div className="grid h-full grid-cols-1 gap-8 px-10 py-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="flex flex-col justify-center">
                    <Label text="Propuesta de valor" tone="orange" />
                    <h2 className="mt-4 text-4xl font-black leading-tight text-slate-900 md:text-5xl">{slide.title}</h2>
                    <p className="mt-4 max-w-2xl text-lg text-slate-500">{slide.subtitle}</p>
                    <div className="mt-6 space-y-3">
                        {slide.content.map((item, idx) => {
                            const [title, ...rest] = item.split(":");
                            const Icon = meta[idx]?.icon || CheckCircle2;
                            return (
                                <motion.div {...inUp} transition={{ delay: 0.15 + idx * 0.08 }} key={idx}>
                                    <GlassCard className="p-4">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                                                <Icon size={16} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">{meta[idx]?.chip || "Valor"}</p>
                                                <p className="mt-1 text-sm font-bold text-slate-800">{title.trim()}</p>
                                                <p className="mt-1 text-xs leading-relaxed text-slate-600">{rest.join(":").trim() || item}</p>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <GlassCard className="w-full max-w-[560px] p-3">
                        <div className="overflow-hidden rounded-2xl border border-white/70">
                            <img src="/pitch/platform_home.png" alt="Home de Tikipal" className="h-[240px] w-full object-cover object-top" />
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                            {[
                                { src: "/pitch/platform_explore.png", label: "Exploracion" },
                                { src: "/pitch/platform_tickets.png", label: "Ticketing" },
                                { src: "/pitch/platform_tour.webp", label: "Operacion" },
                            ].map((view) => (
                                <div key={view.label} className="rounded-xl border border-white/70 bg-white/90 p-1.5">
                                    <img src={view.src} alt={view.label} className="h-16 w-full rounded-lg object-cover object-top" />
                                    <p className="mt-1 text-center text-[10px] font-black uppercase tracking-[0.13em] text-slate-500">{view.label}</p>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </SlideFrame>
    );
};

const MarketSlide = ({ slide }: { slide: Slide }) => {
    const blocks = slide.content.map((item) => {
        const [k, ...rest] = item.split(":");
        return { k: k.trim(), v: rest.join(":").trim() };
    });

    return (
        <SlideFrame>
            <div className="h-full px-12 py-11">
                <Label text="Mercado" tone="green" />
                <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <h2 className="max-w-3xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">{slide.title}</h2>
                    <div className="grid grid-cols-3 gap-2">
                        {slide.metrics?.map((m) => (
                            <GlassCard key={m.label} className="px-3 py-2 text-center">
                                <p className="text-2xl font-black text-orange-500">{m.value}</p>
                                <p className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-400">{m.label}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
                <p className="mt-3 max-w-3xl text-base text-slate-500">{slide.subtitle}</p>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {blocks.map((b, idx) => (
                        <motion.div {...inUp} transition={{ delay: 0.14 + idx * 0.08 }} key={b.k}>
                            <GlassCard className="h-full p-5">
                                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-500">{b.k}</p>
                                <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-700">{b.v}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
                <GlassCard className="mt-5 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Insight inversionista</p>
                    <p className="mt-1 text-sm font-semibold text-slate-700">El efectivo domina en experiencias; Tikipal monetiza la digitalizacion con ingresos recurrentes y transaccionales.</p>
                </GlassCard>
            </div>
        </SlideFrame>
    );
};

const BenefitsSlide = ({ slide }: { slide: Slide }) => (
    <SlideFrame>
        <div className="grid h-full grid-cols-1 gap-8 px-10 py-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-center">
                <Label text="Plataforma" tone="blue" />
                <h2 className="mt-4 text-4xl font-black leading-tight text-slate-900 md:text-5xl">{slide.title}</h2>
                <p className="mt-3 text-base text-slate-500">{slide.subtitle}</p>
                <div className="mt-6 space-y-3">
                    {slide.content.map((item, idx) => (
                        <GlassCard key={idx} className="p-3.5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                    <Check size={15} strokeWidth={3} />
                                </div>
                                <p className="text-sm font-semibold text-slate-700">{item.replace(/\*\*/g, "")}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center">
                <GlassCard className="w-full max-w-[580px] p-3">
                    <div className="overflow-hidden rounded-2xl border border-white/70">
                        <img src="/pitch/platform_tickets.png" alt="Operacion de tickets en Tikipal" className="h-[290px] w-full object-cover object-top" />
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                        {[
                            { k: "Check-in", v: "QR en puerta" },
                            { k: "Pago", v: "Online + POS" },
                            { k: "Control", v: "Dashboard live" },
                        ].map((x) => (
                            <div key={x.k} className="rounded-xl border border-slate-100 bg-slate-50/80 px-2 py-2 text-center">
                                <p className="text-[9px] font-black uppercase tracking-[0.13em] text-slate-400">{x.k}</p>
                                <p className="mt-1 text-xs font-bold text-slate-700">{x.v}</p>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </div>
    </SlideFrame>
);

const BusinessModelSlide = ({ slide }: { slide: Slide }) => {
    const icons: LucideIcon[] = [Store, CreditCard, BarChart3];
    const chips = ["MRR", "Take rate", "Data upsell"];

    return (
        <SlideFrame>
            <div className="h-full px-12 py-12">
                <Label text="Modelo de negocio" tone="green" />
                <h2 className="mt-4 max-w-3xl text-5xl font-black leading-tight text-slate-900">{slide.title}</h2>
                <p className="mt-3 max-w-2xl text-base text-slate-500">{slide.subtitle}</p>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {slide.content.map((item, idx) => {
                        const [title, ...rest] = item.split(":");
                        const Icon = icons[idx] || Coins;
                        return (
                            <motion.div {...inUp} transition={{ delay: 0.12 + idx * 0.08 }} key={idx}>
                                <GlassCard className="h-full p-6">
                                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                                        <Icon size={20} />
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-500">{chips[idx] || "Revenue"}</p>
                                    <p className="mt-1 text-base font-bold text-slate-800">{title.trim()}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{rest.join(":").replace(/\*\*/g, "").trim()}</p>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SlideFrame>
    );
};

const ComparisonSlide = ({ slide }: { slide: Slide }) => {
    if (!slide.comparison) return null;

    return (
        <SlideFrame>
            <div className="h-full px-10 py-10">
                <Label text="Ventaja competitiva" tone="violet" />
                <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">{slide.title}</h2>
                <p className="mt-3 text-base text-slate-500">{slide.subtitle}</p>

                <GlassCard className="mt-6 overflow-hidden p-5">
                    <div className="grid grid-cols-[2.1fr_1fr_1fr_1fr_1fr] gap-3 border-b border-slate-100 pb-3">
                        <p className="pl-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Atributo</p>
                        {slide.comparison.competitors.map((c, idx) => (
                            <p key={c.name} className={`text-center text-xs font-black ${idx === 0 ? "text-orange-500" : "text-slate-400"}`}>
                                {idx === 0 ? "Tikipal" : c.name}
                            </p>
                        ))}
                    </div>
                    <div className="mt-3 space-y-3">
                        {slide.comparison.features.map((f, idx) => (
                            <div key={idx} className="grid grid-cols-[2.1fr_1fr_1fr_1fr_1fr] items-center gap-3">
                                <p className="pl-2 text-sm font-semibold text-slate-700">{f.name.replace(/\*\*/g, "")}</p>
                                {f.values.map((ok, i) => (
                                    <div key={i} className="flex justify-center">
                                        {ok ? (
                                            <div className={`flex h-5 w-5 items-center justify-center rounded-full ${i === 0 ? "bg-orange-100 text-orange-500" : "bg-emerald-100 text-emerald-600"}`}>
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                        ) : (
                                            <div className="h-5 w-5 rounded-full bg-slate-100" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </SlideFrame>
    );
};

const RoadmapSlide = ({ slide }: { slide: Slide }) => {
    if (!slide.roadmap) return null;
    const iconMap: Record<string, LucideIcon> = {
        Rocket,
        Settings,
        Building2,
        Ticket,
        PartyPopper,
        LayoutDashboard,
        Users,
        Wine,
        Briefcase,
        MapPin,
    };
    const milestones = slide.roadmap.milestones.slice(0, 6);

    return (
        <SlideFrame>
            <div className="h-full px-10 py-10">
                <Label text="Roadmap" tone="blue" />
                <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">{slide.title}</h2>
                <p className="mt-3 text-base text-slate-500">{slide.subtitle}</p>

                <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3">
                    {milestones.map((m, idx) => {
                        const Icon = iconMap[m.icon] || Ticket;
                        return (
                            <motion.div {...inUp} transition={{ delay: 0.1 + idx * 0.07 }} key={`${m.title}-${idx}`}>
                                <GlassCard className="h-full p-4">
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                                        <Icon size={18} />
                                    </div>
                                    <p className="text-sm font-bold leading-snug text-slate-800">{m.title}</p>
                                    <p className="mt-1 text-xs text-slate-500">{m.subtitle}</p>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SlideFrame>
    );
};

const GrowthPlansSlide = ({ slide }: { slide: Slide }) => {
    if (!slide.plans) return null;
    return (
        <SlideFrame>
            <div className="h-full px-10 py-10">
                <Label text="Expansion" tone="blue" />
                <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">{slide.title}</h2>
                <p className="mt-3 text-base text-slate-500">{slide.subtitle}</p>
                <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {slide.plans.map((plan, idx) => (
                        <GlassCard key={idx} className="h-full p-5">
                            <p className="text-3xl font-black text-orange-500">0{idx + 1}</p>
                            <p className="mt-2 text-base font-bold text-slate-800">{plan.title}</p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{plan.description}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </SlideFrame>
    );
};

const TeamSlide = ({ slide }: { slide: Slide }) => {
    if (!slide.team) return null;
    return (
        <SlideFrame>
            <div className="h-full px-10 py-10">
                <div className="text-center">
                    <Label text="Equipo" tone="orange" />
                    <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">{slide.title}</h2>
                    <p className="mt-3 text-base text-slate-500">{slide.subtitle}</p>
                </div>
                <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {slide.team.members.map((member) => (
                        <GlassCard key={member.name} className="h-full p-5">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                                <Users size={24} />
                            </div>
                            <p className="mt-3 text-center text-base font-bold text-slate-800">{member.name}</p>
                            <p className="mt-1 text-center text-[10px] font-black uppercase tracking-[0.16em] text-orange-500">{member.role}</p>
                            <div className="mt-3 space-y-1.5">
                                {member.bio.slice(0, 2).map((b) => (
                                    <p key={b} className="text-[11px] leading-snug text-slate-500">- {b}</p>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </SlideFrame>
    );
};

const FundingSlide = ({ slide }: { slide: Slide }) => {
    if (!slide.funding) return null;
    return (
        <SlideFrame dark>
            <div className="flex h-full flex-col items-center justify-center px-10 py-12 text-center">
                <TikipalLogo light />
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1">
                    <Banknote size={13} className="text-orange-300" />
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] text-orange-200">Ronda angel</span>
                </div>
                <h2 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-white md:text-4xl">{slide.funding.ask}</h2>
                <div className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
                    {slide.funding.items.map((item) => (
                        <div key={item.title} className="rounded-[30px] border border-white/20 bg-white/10 p-6 backdrop-blur-2xl">
                            <p className="text-4xl font-black text-white">{item.value}</p>
                            <p className="mt-2 text-[10px] font-black uppercase tracking-[0.16em] text-orange-200">{item.title}</p>
                            <p className="mt-4 text-xs text-white/65">{item.subtitle}</p>
                            <p className="mt-1 text-sm font-bold text-white">{item.highlight}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SlideFrame>
    );
};

const JoinSlide = ({ slide }: { slide: Slide }) => (
    <SlideFrame>
        <div className="flex h-full flex-col items-center justify-center px-10 text-center">
            <TikipalLogo />
            <h2 className="mt-7 max-w-5xl text-4xl font-black leading-tight text-slate-900 md:text-6xl">{slide.content[0]}</h2>
            <p className="mt-4 text-sm font-semibold text-slate-500">contacto@tikipal.com - Bogota, Colombia</p>
            <GlassCard className="mt-7 p-4">
                <QrCode className="h-28 w-28 text-slate-900 md:h-36 md:w-36" strokeWidth={1.5} />
            </GlassCard>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-slate-400">www.tikipal.com</p>
        </div>
    </SlideFrame>
);

function RenderSlide({ slide }: { slide: Slide }) {
    switch (slide.type) {
        case "cover":
            return <CoverSlide slide={slide} />;
        case "problem":
            return <ProblemSlide slide={slide} />;
        case "value-prop":
            return <ValuePropSlide slide={slide} />;
        case "market":
            return <MarketSlide slide={slide} />;
        case "benefits":
            return <BenefitsSlide slide={slide} />;
        case "business-model":
            return <BusinessModelSlide slide={slide} />;
        case "comparison":
            return <ComparisonSlide slide={slide} />;
        case "roadmap":
            return <RoadmapSlide slide={slide} />;
        case "growth-plans":
            return <GrowthPlansSlide slide={slide} />;
        case "team":
            return <TeamSlide slide={slide} />;
        case "funding":
            return <FundingSlide slide={slide} />;
        case "join":
            return <JoinSlide slide={slide} />;
        default:
            return null;
    }
}

export function SlideController() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);
    const slide = PITCH_DECK_CONTENT[currentSlide];

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
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === " ") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [nextSlide, prevSlide]);

    const progress = useMemo(() => ((currentSlide + 1) / PITCH_DECK_CONTENT.length) * 100, [currentSlide]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-transparent">
            <header className="relative z-50 flex items-center justify-between px-6 py-5 md:px-8">
                <div className="flex items-center gap-3">
                    <TikipalLogo />
                    <span className="hidden rounded-full border border-orange-200 bg-orange-50/85 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-orange-500 md:inline-flex">
                        Investor deck
                    </span>
                </div>
                <div className="flex items-center gap-5">
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                        {currentSlide + 1} / {PITCH_DECK_CONTENT.length}
                    </span>
                    <button className="text-slate-400 transition-colors hover:text-slate-900" aria-label="Share deck">
                        <Share2 size={17} />
                    </button>
                </div>
            </header>

            <main className="relative flex flex-1 items-center justify-center px-3 pb-20 md:px-5">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0, x: direction > 0 ? 34 : -34, scale: 0.985 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: direction > 0 ? -34 : 34, scale: 1.01 }}
                        transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-6xl overflow-hidden rounded-[30px] border border-white/50 bg-white/70 shadow-[0_24px_55px_rgba(15,23,42,0.10)] backdrop-blur-3xl aspect-[16/10]"
                    >
                        <RenderSlide slide={slide} />
                    </motion.div>
                </AnimatePresence>
            </main>

            <div className="absolute bottom-9 left-1/2 z-50 -translate-x-1/2">
                <div className="flex items-center gap-3 rounded-3xl border border-slate-100 bg-white/80 px-4 py-3 shadow-2xl backdrop-blur-xl">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        className="p-1.5 text-slate-400 transition-colors hover:text-orange-500 disabled:opacity-25"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="w-44">
                        <div className="h-1.5 w-full rounded-full bg-slate-200">
                            <div className="h-1.5 rounded-full bg-orange-500 transition-all duration-300" style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === PITCH_DECK_CONTENT.length - 1}
                        className="p-1.5 text-slate-400 transition-colors hover:text-orange-500 disabled:opacity-25"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="absolute bottom-9 right-7 hidden md:block">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-300">Usa flechas para navegar</p>
            </div>
        </div>
    );
}
