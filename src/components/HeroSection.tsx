import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with Ken Burns */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <img
          src={heroBg}
          alt="London Collection editorial fashion"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay gradient */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 8 }}
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

      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-metallic-light/20"
          style={{
            left: `${15 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground tracking-wide"
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 8.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Step Into Modern Luxury.
        </motion.h1>

        <motion.p
          className="font-body text-sm md:text-base text-muted-foreground tracking-luxury uppercase mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 9 }}
        >
          Trusted globally since 2009.
        </motion.p>

        <motion.button
          className="btn-royal mt-10 animate-pulse-glow"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 9.3 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.97 }}
          onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
        >
          Shop Now
        </motion.button>

        <motion.p
          className="font-body text-xs text-metallic tracking-widest mt-16 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 9.6 }}
        >
          Not mass produced. Precisely chosen.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 10, duration: 0.8 }}
        >
          <span className="font-body text-[10px] tracking-luxury uppercase text-muted-foreground">Scroll</span>
          <motion.div
            className="w-[1px] h-6 bg-metallic/40"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
