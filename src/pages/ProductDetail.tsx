import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

interface ProductDetailProps {
  onAddToCart: (product: { id: string; name: string; price: number; image: string }) => void;
}

const ProductDetail = ({ onAddToCart }: ProductDetailProps) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="pt-20 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
        {/* Image gallery - left */}
        <div className="p-4 lg:p-0">
          <div className="lg:h-screen lg:overflow-y-auto">
            <img src={product.image} alt={product.name} className="w-full object-cover" />
          </div>
        </div>

        {/* Product details - right, sticky on desktop */}
        <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto p-6 md:p-12 lg:p-16 flex flex-col justify-center">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">
            {product.mood}
          </span>
          <h1 className="font-display text-3xl md:text-4xl tracking-[0.05em] mb-4">{product.name}</h1>
          <p className="font-display text-2xl text-accent mb-8">₹{product.price.toLocaleString()}</p>

          <div className="mb-8">
            <h2 className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">The Lore</h2>
            <p className="font-body text-foreground/80 text-sm leading-relaxed">{product.description}</p>
          </div>

          <div className="mb-8">
            <Accordion type="single" collapsible className="border-t border-accent/20">
              <AccordionItem value="materials" className="border-b border-accent/20">
                <AccordionTrigger className="font-body text-sm tracking-[0.1em] py-4 hover:no-underline hover:text-accent">
                  Materials
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground pb-4">
                  {product.materials}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sizing" className="border-b border-accent/20">
                <AccordionTrigger className="font-body text-sm tracking-[0.1em] py-4 hover:no-underline hover:text-accent">
                  Sizing & Fit
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground pb-4">
                  {product.sizing}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <button
            onClick={handleAdd}
            className="w-full py-4 border border-accent text-accent font-body text-sm tracking-[0.2em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            {added ? "ADDED TO ARSENAL" : "ADD TO CART"}
          </button>
        </div>
      </div>

      {/* Mobile sticky add to cart */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/95 backdrop-blur-sm border-t border-accent/20">
        <button
          onClick={handleAdd}
          className="w-full py-3.5 border border-accent text-accent font-body text-sm tracking-[0.2em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        >
          {added ? "ADDED" : `ADD TO CART — ₹${product.price.toLocaleString()}`}
        </button>
      </div>
    </main>
  );
};

export default ProductDetail;
