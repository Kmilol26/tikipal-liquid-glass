import { SlideController } from "@/components/pitch/SlideController";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tikipal | Lean Pitch Deck 2026",
    description: "Interactive investor presentation for Tikipal Nightlife platform.",
};

export default function PitchPage() {
    return (
        <div className="bg-black min-h-screen">
            <SlideController />
        </div>
    );
}
