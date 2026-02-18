import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import ProductGrid from "@/components/ProductGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Shop");

  return (
    <div className="min-h-screen bg-background">
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <Navbar activeItem={activeCategory} onItemChange={setActiveCategory} />
      <HeroSection />
      <CategorySection />
      <ProductGrid activeCategory={activeCategory} />
      <TestimonialsSection />
      <TrustBar />
      <Footer />
    </div>
  );
};

export default Index;
