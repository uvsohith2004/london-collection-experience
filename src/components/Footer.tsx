import { motion } from "framer-motion";

const footerLinks = {
  "Customer Care": ["Contact Us", "Shipping", "Returns", "FAQ"],
  "The House": ["Our Story", "Careers", "Press"],
  "Legal": ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  return (
    <motion.footer
      className="border-t border-border bg-midnight/50 pt-16 pb-8 px-6 md:px-10 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--royal-red) / 0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div className="col-span-2 md:col-span-1" variants={itemVariants}>
            <motion.h3
              className="font-display text-xl tracking-luxury text-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              LONDON
            </motion.h3>
            <p className="font-body text-[10px] tracking-luxury text-metallic-light">COLLECTION</p>
            <p className="font-body text-xs text-muted-foreground mt-4 leading-relaxed max-w-xs">
              A curated destination for modern luxury, rooted in Kuwait, trusted globally.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div key={title} variants={itemVariants}>
              <h4 className="font-body text-xs tracking-luxury uppercase text-foreground/80 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <motion.li key={link} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <a
                      href="#"
                      className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="metallic-line mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-body text-[10px] text-muted-foreground tracking-wide">
            © 2025 London Collection. All rights reserved.
          </p>
          <p className="font-body text-[10px] text-muted-foreground tracking-wide">
            Kuwait · London · Dubai
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
