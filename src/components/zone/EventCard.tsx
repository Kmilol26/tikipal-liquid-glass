"use client";

import { MapPin, Users } from "lucide-react";

interface EventCardProps {
    date: string;
    dayOfWeek: string;
    time: string;
    title: string;
    venue: string;
    address: string;
    image: string;
    price?: string;
    isLive?: boolean;
    isSoldOut?: boolean;
    attendees?: number;
    isFirst?: boolean;
    isLast?: boolean;
}

export function EventCard({
    date,
    dayOfWeek,
    time,
    title,
    venue,
    address,
    image,
    price,
    isLive = false,
    isSoldOut = false,
    attendees,
    isFirst = false,
    isLast = false
}: EventCardProps) {
    return (
        <div className="group relative pl-10 pb-12">
            {/* Timeline Line */}
            <div className={`absolute left-[11px] w-[2px] bg-purple-400/50 ${isFirst ? 'top-3' : 'top-0'} ${isLast ? 'bottom-full h-3' : 'bottom-0'}`} />

            {/* Timeline Dot */}
            <div className="absolute left-0 top-[1px] z-10">
                <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-600 border-4 border-white shadow-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                </div>
            </div>

            {/* Date Header */}
            <div className="mb-3 flex items-baseline">
                <span className="text-sm font-semibold text-gray-900 leading-none">{date}</span>
                <span className="text-sm text-gray-400 ml-2 leading-none">{dayOfWeek}</span>
            </div>

            {/* Event Card */}
            <div className={`relative rounded-2xl border ${isLive ? 'border-tikipal-orange bg-tikipal-orange/5' : 'border-white/50 bg-white/60'} backdrop-blur-md p-4 shadow-sm hover:shadow-md transition-all hover:border-tikipal-orange/50 overflow-hidden`}>
                <div className="flex gap-4">
                    {/* Event Info */}
                    <div className="flex-1 space-y-2">
                        {/* Live Badge or Time */}
                        <div className="flex items-center gap-2">
                            {isLive && (
                                <span className="flex items-center gap-1 text-xs font-bold text-red-500">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                    EN VIVO
                                </span>
                            )}
                            <span className="text-sm text-gray-500">{time}</span>
                            {price && (
                                <span className="px-2 py-0.5 rounded-full bg-tikipal-orange/10 text-xs font-bold text-tikipal-orange">
                                    {price}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h4 className="text-base font-bold text-gray-900 group-hover:text-tikipal-orange transition-colors">
                            {title}
                        </h4>

                        {/* Venue and Address */}
                        <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                <span className="w-4 h-4 rounded-full bg-tikipal-orange/10 flex items-center justify-center">
                                    <span className="text-[8px]">📍</span>
                                </span>
                                {venue}
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                <MapPin size={10} />
                                {address}
                            </div>
                        </div>

                        {/* Status Badges */}
                        <div className="flex items-center gap-2 pt-1">
                            {isSoldOut && (
                                <span className="px-2 py-0.5 rounded-full bg-red-500 text-[10px] font-bold text-white uppercase">
                                    Agotado
                                </span>
                            )}
                            {attendees && (
                                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 text-[10px] font-bold text-blue-600">
                                    <Users size={10} />
                                    {attendees} Personas
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Image Thumbnail */}
                    <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
