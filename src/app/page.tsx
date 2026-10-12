import Features from "@/component/home/Features";
import Hero from "@/component/home/Hero";
import HowItWorks from "@/component/home/HowItWorks";
import TemplatePreview from "@/component/home/TemplatePreview";
import WhyChoose from "@/component/home/WhyChoose";
import Footer from "@/component/layout/Footer";
import Navbar from "@/component/layout/Navbar";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TemplatePreview />
      <WhyChoose />
      <Footer />
    </main>
  );
}
