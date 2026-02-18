import { motion } from "framer-motion";
import { Shield, Globe, Clock, Award, Gem } from "lucide-react";

const trustItems = [
  { icon: Clock, label: "Trusted Since 2009" },
  { icon: Globe, label: "Ships Worldwide" },
  { icon: Shield, label: "Secure & Encrypted" },
  { icon: Award, label: "Award Winning" },
  { icon: Gem, label: "Authenticity Guaranteed" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TrustBar = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Ambient line animation */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--metallic-light) / 0.4), transparent)" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {trustItems.map((item, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 text-muted-foreground group cursor-default"
            variants={itemVariants}
            whileHover={{ scale: 1.08, color: "hsl(var(--foreground))", transition: { duration: 0.3 } }}
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <item.icon size={16} className="text-metallic group-hover:text-primary transition-colors duration-300" />
            </motion.div>
            <span className="font-body text-xs tracking-luxury uppercase">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--metallic-light) / 0.4), transparent)" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
    </section>
  );
};

export default TrustBar;
