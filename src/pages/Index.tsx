import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <Navbar />
      <HeroSection />
      <CategorySection />
      <TrustBar />
      <Footer />
    </div>
  );
};

export default Index;
