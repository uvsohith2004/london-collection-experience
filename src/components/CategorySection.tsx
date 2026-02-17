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

const CategorySection = () => {
  return (
    <section className="relative py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Explore the Collection
          </h2>
          <div className="metallic-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[250px] md:auto-rows-[280px]">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className={`category-card group cursor-pointer rounded-lg ${cat.span}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                  <p className="font-body text-[10px] tracking-luxury uppercase text-royal-red mb-1">
                    {cat.subtitle}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    {cat.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
