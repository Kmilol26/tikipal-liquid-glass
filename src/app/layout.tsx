"use client";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { LiquidBackground } from "@/components/layout/LiquidBackground";
import "./globals.css";

import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <LayoutContent roboto={roboto}>
        {children}
      </LayoutContent>
    </LanguageProvider>
  );
}

function LayoutContent({ children, roboto }: { children: React.ReactNode, roboto: any }) {
  const { language } = useLanguage();

  return (
    <html lang={language}>
      <body
        className={`${roboto.variable} antialiased`}
      >
        <LiquidBackground />
        {children}
      </body>
    </html>
  );
}
