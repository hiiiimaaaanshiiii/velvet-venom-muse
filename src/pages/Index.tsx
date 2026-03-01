import { Link } from "react-router-dom";
import Marquee from "@/components/Marquee";
import heroBg from "@/assets/hero-bg.png";
import velvetArchive from "@/assets/velvet-archive.png";
import venomDrop from "@/assets/venom-drop.png";

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Velvet & Venom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] leading-tight mb-6">
            WEAR YOUR VICES.
          </h1>
          <p className="font-body text-foreground/70 text-base md:text-lg tracking-[0.1em] mb-12">
            Fusion wear for the unbothered and the untamed.
          </p>
          <Link
            to="/shop"
            className="inline-block border border-accent text-accent font-body text-sm tracking-[0.3em] uppercase px-10 py-4 hover:bg-accent hover:text-accent-foreground transition-all duration-500"
          >
            Enter the Collection
          </Link>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Featured Categories */}
      <section className="px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 max-w-7xl mx-auto">
          {/* Velvet Archive - larger */}
          <Link to="/shop" className="md:col-span-7 group relative overflow-hidden border border-accent/10 hover:border-accent/40 transition-all duration-500">
            <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden">
              <img
                src={velvetArchive}
                alt="The Velvet Archive"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-background/90 to-transparent">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent block mb-2">Collection</span>
              <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em]">The Velvet Archive</h2>
              <p className="font-body text-foreground/50 text-sm mt-2">Heavy fabrics. Heavier intentions.</p>
            </div>
          </Link>

          {/* Venom Drop - smaller, offset */}
          <Link to="/shop" className="md:col-span-5 md:mt-24 group relative overflow-hidden border border-accent/10 hover:border-accent/40 transition-all duration-500">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={venomDrop}
                alt="The Venom Drop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-background/90 to-transparent">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent block mb-2">Collection</span>
              <h2 className="font-display text-2xl md:text-3xl tracking-[0.1em]">The Venom Drop</h2>
              <p className="font-body text-foreground/50 text-sm mt-2">Sharp streetwear. No antidote.</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
