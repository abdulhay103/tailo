import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TravelUsa from "@/components/TravelUsa";
import React from "react";

export default function Home() {
    return (
        <div>
            <Hero />
            <TravelUsa />
            <CtaSection />
            <Footer />
        </div>
    );
}
