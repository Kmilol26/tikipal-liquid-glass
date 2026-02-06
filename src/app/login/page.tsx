"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Eye, EyeOff, Check } from "lucide-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#FFF5F1] via-[#FFF8F5] to-white flex items-center justify-center p-4">
            <div className="w-full max-w-[420px] bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 relative overflow-hidden">
                {/* Decorative background blur inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-tikipal-orange/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 text-tikipal-orange shadow-sm border border-orange-100/50">
                        <Sparkles size={24} fill="currentColor" className="opacity-80" />
                    </div>

                    {/* Header */}
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-2 text-center">
                        Bienvenido de nuevo
                    </h1>
                    <p className="text-gray-500 font-medium text-sm text-center mb-8">
                        Ingresa a tu cuenta para gestionar tus eventos
                    </p>

                    {/* Form */}
                    <form className="w-full space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-700 ml-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tu@email.com"
                                className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-900 text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-tikipal-orange/20 focus:border-tikipal-orange/30 transition-all"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-gray-700 ml-1">Contraseña</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-900 text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-tikipal-orange/20 focus:border-tikipal-orange/30 transition-all pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <label className="flex items-center gap-2.5 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input type="checkbox" className="peer sr-only" />
                                    <div className="w-5 h-5 border-2 border-gray-200 rounded-md peer-checked:bg-tikipal-orange peer-checked:border-tikipal-orange transition-all duration-200" />
                                    <Check size={12} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" strokeWidth={3} />
                                </div>
                                <span className="text-xs font-bold text-gray-500 group-hover:text-gray-700 transition-colors">Recordarme</span>
                            </label>

                            <Link href="#" className="text-xs font-bold text-tikipal-orange hover:text-orange-600 transition-colors">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>

                        <button className="w-full py-4 bg-tikipal-orange hover:bg-orange-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-tikipal-orange/20 hover:shadow-xl hover:shadow-tikipal-orange/30 transform hover:-translate-y-0.5 transition-all duration-300 mt-2">
                            Iniciar Sesión
                        </button>

                        <div className="relative flex items-center gap-4 my-2">
                            <div className="h-px bg-gray-100 flex-1" />
                            <span className="text-xs font-medium text-gray-400">O continúa con</span>
                            <div className="h-px bg-gray-100 flex-1" />
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                localStorage.setItem("isLoggedIn", "true");
                                // Dispatch storage event for same-tab updates
                                window.dispatchEvent(new Event("storage"));
                                window.location.href = "/bogota";
                            }}
                            className="w-full py-3.5 bg-white border border-gray-100 hover:bg-gray-50 text-gray-700 rounded-xl text-sm font-bold flex items-center justify-center gap-3 transition-all duration-300 group"
                        >
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                    </form>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-sm font-medium text-gray-500">
                    ¿No tienes una cuenta?{' '}
                    <Link href="/signup" className="font-bold text-tikipal-orange hover:text-orange-600 transition-colors">
                        Crear cuenta
                    </Link>
                </p>
            </div>
        </div>
    );
}
