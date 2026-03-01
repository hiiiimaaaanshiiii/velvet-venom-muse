import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-accent/20 bg-background">
      <div className="px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-lg tracking-[0.3em] mb-6">VELVET & VENOM</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Fusion wear for the unbothered and the untamed.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-6">Navigate</h4>
            <div className="flex flex-col gap-3 font-body text-sm text-muted-foreground">
              <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
              <Link to="/journal" className="hover:text-foreground transition-colors">Style Journal</Link>
              <Link to="/about" className="hover:text-foreground transition-colors">The Manifesto</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-6">Follow the Tension</h4>
            <div className="flex flex-col gap-3 font-body text-sm text-muted-foreground">
              <span className="hover:text-foreground transition-colors cursor-pointer">Instagram</span>
              <span className="hover:text-foreground transition-colors cursor-pointer">Twitter / X</span>
              <span className="hover:text-foreground transition-colors cursor-pointer">Pinterest</span>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-accent/10">
          <p className="font-body text-xs text-muted-foreground tracking-widest text-center">
            © 2026 VELVET & VENOM — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
