import { SlideController } from "@/components/pitch/SlideController";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tikipal | Investor & Conference Deck 2026",
    description: "Interactive investor and conference presentation for the Tikipal platform.",
};

export default function PitchPage() {
    return (
        <div className="bg-transparent min-h-screen">
            <SlideController />
        </div>
    );
}
