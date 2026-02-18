import { motion } from "framer-motion";
import categoryWomen from "@/assets/category-women.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryJewelry from "@/assets/category-jewelry.jpg";
import categoryWatches from "@/assets/category-watches.jpg";

const categories = [
  { name: "Women", subtitle: "Effortless Elegance", image: categoryWomen, span: "md:col-span-2 md:row-span-2" },
  { name: "Men", subtitle: "Refined Power", image: categoryMen, span: "md:col-span-1 md:row-span-2" },
  { name: "Jewelry", subtitle: "Timeless Craft", image: categoryJewelry, span: "md:col-span-1 md:row-span-1" },
  { name: "Watches", subtitle: "Precision Art", image: categoryWatches, span: "md:col-span-2 md:row-span-1" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const CategorySection = () => {
  return (
    <section className="relative py-24 px-6 md:px-10">
      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--royal-red) / 0.04), transparent 70%)" }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="font-display text-3xl md:text-5xl text-foreground"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Explore the Collection
          </motion.h2>
          <motion.div
            className="metallic-line max-w-xs mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[250px] md:auto-rows-[280px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              className={`category-card group cursor-pointer rounded-lg ${cat.span}`}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <motion.img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: "linear-gradient(to top, hsl(222 50% 6% / 0.85) 0%, hsl(222 50% 6% / 0.2) 60%)",
                  }}
                />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <motion.p
                    className="font-body text-[10px] tracking-luxury uppercase text-royal-red mb-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {cat.subtitle}
                  </motion.p>
                  <motion.h3
                    className="font-display text-2xl md:text-3xl text-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {cat.name}
                  </motion.h3>
                </div>

                {/* Hover border glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: "inset 0 0 30px hsl(var(--royal-red) / 0.1), 0 0 20px hsl(var(--royal-red) / 0.05)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
