import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onCartOpen: () => void;
  cartCount: number;
}

const Navbar = ({ onCartOpen, cartCount }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-accent/20">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/" className="font-display text-xl md:text-2xl tracking-[0.3em] text-foreground">
          VELVET & VENOM
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 font-body text-sm tracking-[0.15em] uppercase">
          <Link to="/" className="text-foreground/70 hover:text-accent transition-colors">Home</Link>
          <Link to="/shop" className="text-foreground/70 hover:text-accent transition-colors">Shop</Link>
          <Link to="/journal" className="text-foreground/70 hover:text-accent transition-colors">Journal</Link>
          <Link to="/about" className="text-foreground/70 hover:text-accent transition-colors">Manifesto</Link>
          <Link to="/contact" className="text-foreground/70 hover:text-accent transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={onCartOpen} className="relative text-foreground/70 hover:text-accent transition-colors">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-body flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground/70">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-accent/20 bg-background px-6 py-8 flex flex-col gap-6 font-body text-sm tracking-[0.15em] uppercase">
          <Link to="/" onClick={() => setMobileOpen(false)} className="text-foreground/70 hover:text-accent transition-colors">Home</Link>
          <Link to="/shop" onClick={() => setMobileOpen(false)} className="text-foreground/70 hover:text-accent transition-colors">Shop</Link>
          <Link to="/journal" onClick={() => setMobileOpen(false)} className="text-foreground/70 hover:text-accent transition-colors">Journal</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="text-foreground/70 hover:text-accent transition-colors">Manifesto</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-foreground/70 hover:text-accent transition-colors">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
