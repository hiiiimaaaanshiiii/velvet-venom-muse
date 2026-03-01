import { X } from "lucide-react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

const CartDrawer = ({ isOpen, onClose, items, onRemove }: CartDrawerProps) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-background/60" onClick={onClose} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] glass-cart border-l border-accent/20 transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-accent/20">
            <h2 className="font-display text-lg tracking-[0.2em]">YOUR ARSENAL</h2>
            <button onClick={onClose} className="text-foreground/50 hover:text-accent transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <p className="font-body text-muted-foreground text-sm italic">
                  Your arsenal is currently empty.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-accent/10 pb-4">
                    <img src={item.image} alt={item.name} className="w-20 h-24 object-cover" />
                    <div className="flex-1">
                      <h3 className="font-display text-sm">{item.name}</h3>
                      <p className="font-body text-accent text-sm mt-1">₹{item.price.toLocaleString()}</p>
                      <p className="font-body text-muted-foreground text-xs mt-1">Qty: {item.quantity}</p>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-muted-foreground hover:text-foreground text-xs">
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-accent/20">
              <div className="flex justify-between mb-4">
                <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">Total</span>
                <span className="font-display text-lg text-accent">₹{total.toLocaleString()}</span>
              </div>
              <button className="w-full py-4 border border-accent text-accent font-body text-sm tracking-[0.2em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                PROCEED TO CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
