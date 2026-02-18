import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Fatima Al-Sabah", location: "Kuwait", text: "London Collection redefined what luxury means to me. Every piece feels like it was made just for me.", rating: 5 },
  { name: "Sarah Mitchell", location: "London", text: "The attention to detail is unmatched. I've never felt more confident in what I wear.", rating: 5 },
  { name: "Amira Hassan", location: "Dubai", text: "From ordering to unboxing, the entire experience felt like entering a private showroom.", rating: 5 },
  { name: "James Thornton", location: "New York", text: "Finally, a brand that understands modern masculinity. Bold yet refined.", rating: 5 },
  { name: "Layla Mansour", location: "Riyadh", text: "Their jewelry collection is breathtaking. Each piece tells a story of craftsmanship.", rating: 5 },
  { name: "Oliver Chen", location: "Singapore", text: "The watch I purchased exceeded every expectation. Precision meets artistry.", rating: 5 },
  { name: "Noor Al-Rashid", location: "Bahrain", text: "Shopping here feels exclusive. The curation is impeccable — nothing mass-produced.", rating: 5 },
  { name: "Elena Rossi", location: "Milan", text: "I recommend London Collection to everyone who values elegance and authenticity.", rating: 5 },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!isPaused && el) {
        scrollPos += 0.5;
        if (scrollPos >= el.scrollWidth / 2) {
          scrollPos = 0;
        }
        el.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--royal-blue-light) / 0.06), transparent 70%)" }}
        animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-display text-3xl md:text-5xl text-foreground"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="metallic-line max-w-xs mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden cursor-grab px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {doubled.map((t, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-[350px] md:w-[400px] glass-panel rounded-lg p-8 relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
          >
            {/* Quote icon */}
            <motion.div
              className="absolute top-4 right-4 text-primary/10"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 10, scale: 1.2 }}
            >
              <Quote size={30} />
            </motion.div>

            {/* Hover glow */}
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 30px hsl(var(--royal-red) / 0.05)",
              }}
            />

            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.08, duration: 0.3 }}
                >
                  <Star size={14} className="fill-primary text-primary" />
                </motion.div>
              ))}
            </div>

            <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6 italic">
              "{t.text}"
            </p>

            <motion.div
              className="metallic-line mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />

            <div>
              <p className="font-body text-sm text-foreground tracking-wide">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground tracking-luxury uppercase mt-1">{t.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
