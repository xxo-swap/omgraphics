import Footer from "@/component/footer/Footer";
import Header from "@/component/header/Header";
import CTPShowcase from "@/component/hero/CTPShowcase";
import Hero from "@/component/hero/Hero";
import PrintShowcase from "@/component/hero/PrintShowcase";
import { CTASection } from "@/component/trust/CTASection";
import { OurMethods } from "@/component/trust/OurMethods";
import { RecentWork } from "@/component/trust/RecentWork";
import { TestimonialsSection } from "@/component/trust/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <CTPShowcase/>
    <PrintShowcase/>
    <OurMethods/>
    <RecentWork/>
    <TestimonialsSection/>
    <CTASection/>
    </>

  );
}
