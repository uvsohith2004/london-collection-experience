import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [phase, setPhase] = useState<"line" | "logo" | "text" | "exit">("line");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("logo"), 1200);
    const t2 = setTimeout(() => setPhase("text"), 2400);
    const t3 = setTimeout(() => setPhase("exit"), 3800);
    const t4 = setTimeout(onComplete, 4300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, hsl(222 50% 6%) 0%, hsl(222 60% 15%) 100%)",
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Energy line */}
          <motion.div
            className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(0 72% 40%), hsl(0 80% 50%), hsl(0 72% 40%), transparent)",
              boxShadow: "0 0 20px hsl(0 72% 40% / 0.6), 0 0 60px hsl(0 72% 40% / 0.3)",
            }}
            initial={{ width: 0, x: "-10%" }}
            animate={{ width: "120%", x: "-10%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Particles */}
          {phase !== "line" && Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                background: i % 3 === 0 ? "hsl(0 72% 50%)" : "hsl(220 20% 70%)",
              }}
              initial={{
                x: (Math.random() - 0.5) * 100,
                y: 0,
                opacity: 0,
              }}
              animate={{
                x: (Math.random() - 0.5) * 400,
                y: (Math.random() - 0.5) * 300,
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={
              phase === "logo" || phase === "text"
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.8, filter: "blur(20px)" }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Glow behind logo */}
            <div
              className="absolute -inset-20 rounded-full opacity-30"
              style={{
                background: "radial-gradient(ellipse, hsl(0 72% 40% / 0.3), transparent 70%)",
              }}
            />

            <h1 className="font-display text-4xl md:text-5xl tracking-luxury text-foreground relative">
              LONDON
            </h1>
            <p className="font-body text-sm tracking-luxury text-metallic-light mt-2">
              COLLECTION
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="absolute bottom-[30%] font-body text-sm md:text-base tracking-widest text-muted-foreground italic"
            initial={{ opacity: 0, y: 20 }}
            animate={phase === "text" ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Entering a World of Curated Luxury.
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;
