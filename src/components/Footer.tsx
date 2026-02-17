const footerLinks = {
  "Customer Care": ["Contact Us", "Shipping", "Returns", "FAQ"],
  "The House": ["Our Story", "Careers", "Press"],
  "Legal": ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-midnight/50 pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display text-xl tracking-luxury text-foreground">LONDON</h3>
            <p className="font-body text-[10px] tracking-luxury text-metallic-light">COLLECTION</p>
            <p className="font-body text-xs text-muted-foreground mt-4 leading-relaxed max-w-xs">
              A curated destination for modern luxury, rooted in Kuwait, trusted globally.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body text-xs tracking-luxury uppercase text-foreground/80 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="metallic-line mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-muted-foreground tracking-wide">
            © 2025 London Collection. All rights reserved.
          </p>
          <p className="font-body text-[10px] text-muted-foreground tracking-wide">
            Kuwait · London · Dubai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
