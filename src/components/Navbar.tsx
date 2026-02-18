import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const NAV_ITEMS = ["Shop", "New", "Women", "Men", "Jewelry", "Watches", "Gifts"];

interface NavbarProps {
  activeItem: string;
  onItemChange: (item: string) => void;
}

const Navbar = ({ activeItem, onItemChange }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  const handleNavClick = (item: string) => {
    onItemChange(item);
    setMobileOpen(false);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 8.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex flex-col items-start">
          <span className="font-display text-lg md:text-xl tracking-luxury text-foreground">
            LONDON
          </span>
          <span className="font-body text-[10px] tracking-luxury text-metallic-light -mt-1">
            COLLECTION
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="relative font-body text-xs tracking-luxury uppercase text-foreground/70 hover:text-foreground transition-colors duration-300 pb-1"
            >
              {item}
              {activeItem === item && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-royal-red"
                  style={{
                    boxShadow: "0 0 8px hsl(0 72% 40% / 0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-foreground/70 hover:text-foreground transition-colors duration-300"
          >
            <Search size={18} />
          </button>
          <button className="text-foreground/70 hover:text-foreground transition-colors duration-300 relative">
            <ShoppingBag size={18} />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary rounded-full text-[8px] flex items-center justify-center text-primary-foreground font-body">
              0
            </span>
          </button>
          {user ? (
            <button
              onClick={handleSignOut}
              className="text-foreground/70 hover:text-foreground transition-colors duration-300 font-body text-xs tracking-luxury uppercase"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => navigate("/auth")}
              className="text-foreground/70 hover:text-foreground transition-colors duration-300"
            >
              <User size={18} />
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground/70 hover:text-foreground transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 glass-panel border-t-0"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-3xl mx-auto p-6">
              <input
                autoFocus
                placeholder="Search collections..."
                className="w-full bg-transparent border-b border-metallic/30 text-foreground font-body text-lg tracking-wide py-2 outline-none placeholder:text-muted-foreground"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-midnight/95 backdrop-blur-xl border-b border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`font-body text-sm tracking-luxury uppercase text-left py-2 transition-colors duration-300 ${
                    activeItem === item ? "text-royal-red" : "text-foreground/70"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
