import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";

interface ProductGridProps {
  activeCategory: string;
}

const products = [
  { id: 1, name: "Noir Velvet Blazer", price: 1250, category: "Women", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80", tag: "New" },
  { id: 2, name: "Midnight Silk Dress", price: 980, category: "Women", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80", remaining: 3 },
  { id: 3, name: "Royal Crest Cufflinks", price: 420, category: "Jewelry", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80" },
  { id: 4, name: "Heritage Chronograph", price: 4500, category: "Watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80", remaining: 2 },
  { id: 5, name: "Tailored Wool Coat", price: 2100, category: "Men", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", tag: "New" },
  { id: 6, name: "Diamond Pendant", price: 3200, category: "Jewelry", image: "https://images.unsplash.com/photo-1515562141589-67f0d569b6f5?w=600&q=80" },
  { id: 7, name: "Cashmere Overcoat", price: 1890, category: "Men", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80" },
  { id: 8, name: "Sapphire Ring", price: 5600, category: "Jewelry", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80", remaining: 1 },
  { id: 9, name: "Lunar Automatic Watch", price: 3800, category: "Watches", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&q=80", tag: "New" },
  { id: 10, name: "Evening Gown", price: 2750, category: "Women", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80" },
  { id: 11, name: "Leather Weekend Bag", price: 890, category: "Gifts", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80" },
  { id: 12, name: "Silk Pocket Square Set", price: 180, category: "Gifts", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80", tag: "New" },
];

const ProductGrid = ({ activeCategory }: ProductGridProps) => {
  const filtered = activeCategory === "Shop" || activeCategory === "New"
    ? activeCategory === "New"
      ? products.filter(p => p.tag === "New")
      : products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="relative py-24 px-6 md:px-10 overflow-hidden" id="products">
      {/* Background ambient */}
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--royal-blue-light) / 0.08), transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {activeCategory === "Shop" ? "Featured Collection" : activeCategory === "New" ? "New Arrivals" : activeCategory}
          </motion.h2>
          <motion.div
            className="metallic-line max-w-xs mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group glass-panel rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to top, hsl(222 50% 6% / 0.8) 0%, transparent 50%)",
                    }}
                  />

                  {product.tag && (
                    <motion.span
                      className="absolute top-3 left-3 bg-primary text-primary-foreground font-body text-[10px] tracking-luxury uppercase px-3 py-1 rounded-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {product.tag}
                    </motion.span>
                  )}

                  {product.remaining && (
                    <motion.span
                      className="absolute top-3 right-3 font-body text-[11px] tracking-wide text-primary font-medium"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Only <span className="text-primary font-semibold">{product.remaining}</span> left
                    </motion.span>
                  )}

                  {/* Action buttons */}
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Heart size={15} />
                    </motion.button>
                    <motion.button
                      className="w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-primary-foreground"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      <ShoppingBag size={15} />
                    </motion.button>
                  </div>
                </div>

                <motion.div
                  className="p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-body text-sm text-foreground tracking-wide group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    KWD {product.price.toLocaleString()}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
