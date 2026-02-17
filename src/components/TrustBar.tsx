import { motion } from "framer-motion";
import { Shield, Globe, Clock } from "lucide-react";

const trustItems = [
  { icon: Clock, label: "Trusted Since 2009" },
  { icon: Globe, label: "Ships Worldwide" },
  { icon: Shield, label: "Secure Payment" },
];

const TrustBar = () => {
  return (
    <section className="py-16 px-6">
      <div className="metallic-line max-w-4xl mx-auto mb-12" />
      <motion.div
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {trustItems.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-muted-foreground">
            <item.icon size={16} className="text-metallic" />
            <span className="font-body text-xs tracking-luxury uppercase">{item.label}</span>
          </div>
        ))}
      </motion.div>
      <div className="metallic-line max-w-4xl mx-auto mt-12" />
    </section>
  );
};

export default TrustBar;
