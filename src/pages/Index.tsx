import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatIsArt } from "@/components/WhatIsArt";
import { ArtTypes } from "@/components/ArtTypes";
import { ArtworkGrid } from "@/components/ArtworkGrid";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ArtworkGrid />
      <ArtTypes />
      <WhatIsArt />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
