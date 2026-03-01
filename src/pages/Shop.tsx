import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const moods = ["All", "Vengeful", "Untouchable", "Triumphant", "Heartbreak"];

const Shop = () => {
  const [activeMood, setActiveMood] = useState("All");

  const filtered = activeMood === "All" ? products : products.filter((p) => p.mood === activeMood);

  return (
    <main className="pt-24 pb-16 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl tracking-[0.1em] mb-4">THE COLLECTION</h1>
        <p className="font-body text-muted-foreground text-sm tracking-widest mb-12">
          Every piece is an inciting incident.
        </p>

        {/* Mood filters */}
        <div className="flex flex-wrap gap-3 mb-16">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => setActiveMood(mood)}
              className={`font-body text-xs tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                activeMood === mood
                  ? "border-accent text-accent"
                  : "border-accent/20 text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {mood}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              mood={product.mood}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
