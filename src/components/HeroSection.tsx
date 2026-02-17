import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image (acting as hero visual) */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img
          src={heroBg}
          alt="London Collection editorial fashion"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            hsl(222 50% 6% / 0.5) 0%,
            hsl(222 50% 6% / 0.3) 40%,
            hsl(222 50% 6% / 0.6) 70%,
            hsl(222 50% 6% / 0.95) 100%
          )`,
        }}
      />

      {/* Side vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, hsl(222 50% 6% / 0.7) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.5, ease: "easeOut" }}
        >
          Step Into Modern Luxury.
        </motion.h1>

        <motion.p
          className="font-body text-sm md:text-base text-muted-foreground tracking-luxury uppercase mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 5 }}
        >
          Trusted globally since 2009.
        </motion.p>

        <motion.button
          className="btn-royal mt-10 animate-pulse-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5.3 }}
        >
          Shop Now
        </motion.button>

        <motion.p
          className="font-body text-xs text-metallic tracking-widest mt-16 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 5.6 }}
        >
          Not mass produced. Precisely chosen.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
