import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

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
    <section className="relative py-24 px-6 md:px-10" id="products">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            {activeCategory === "Shop" ? "Featured Collection" : activeCategory === "New" ? "New Arrivals" : activeCategory}
          </h2>
          <div className="metallic-line max-w-xs mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass-panel rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to top, hsl(222 50% 6% / 0.8) 0%, transparent 50%)",
                    }}
                  />

                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground font-body text-[10px] tracking-luxury uppercase px-3 py-1 rounded-sm">
                      {product.tag}
                    </span>
                  )}

                  {product.remaining && (
                    <span className="absolute top-3 right-3 font-body text-[11px] tracking-wide text-primary font-medium">
                      Only <span className="text-primary font-semibold">{product.remaining}</span> left
                    </span>
                  )}

                  {/* Quick add button */}
                  <motion.button
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingBag size={16} />
                  </motion.button>
                </div>

                <div className="p-4">
                  <h3 className="font-body text-sm text-foreground tracking-wide">{product.name}</h3>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    KWD {product.price.toLocaleString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
