import ButtonGradient from "@/public/assets/svg/ButtonGradient";
import Header from "@/components/Header";
import React from "react";
import Hero from "@/components/hero";
import {Benefits} from "@/components/benefits";
import {Collaboration} from "@/components/collaboration";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";


export default function Home() {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header/>
                <Hero/>
                <Benefits />
                <Collaboration/>
                <Services />
                <Pricing />
                <Roadmap />
                <Footer />
            </div>
            <ButtonGradient/>
        </>
    );
}
