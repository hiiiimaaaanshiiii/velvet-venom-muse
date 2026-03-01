import journalFeatured from "@/assets/journal-featured.png";
import velvetArchive from "@/assets/velvet-archive.png";
import venomDrop from "@/assets/venom-drop.png";

const Journal = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">
          Style Journal
        </span>
        <h1 className="font-display text-4xl md:text-5xl tracking-[0.1em] mb-16">DISPATCHES FROM THE EDGE</h1>

        {/* Featured Post */}
        <article className="mb-20">
          <div className="border border-accent/10 overflow-hidden">
            <div className="aspect-[16/7] overflow-hidden">
              <img src={journalFeatured} alt="The Anatomy of an Entrance" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-12 border-t border-accent/10">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">Featured</span>
              <h2 className="font-display text-2xl md:text-4xl tracking-[0.05em] mb-6">The Anatomy of an Entrance</h2>
              <p className="font-body text-foreground/60 text-sm md:text-base leading-[1.8] max-w-3xl">
                Let's get one thing straight: walking into a room isn't just a physical transition. It's a shift in power dynamics. You think a tailored blazer or a draped silk dupatta is just fabric? Please. It's armor. The way our silhouettes fall is designed specifically for those moments when you need to make an exit that leaves everyone absolutely speechless. Throw on the crimson threadwork. Let them stare. You didn't get dressed to blend into the drywall.
              </p>
            </div>
          </div>
        </article>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          <article className="break-inside-avoid border border-accent/10 overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={velvetArchive} alt="Why Velvet Will Outlast Every Trend" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 border-t border-accent/10">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent/60 block mb-2">Material Studies</span>
              <h3 className="font-display text-lg tracking-wide mb-2">Why Velvet Will Outlast Every Trend</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                While fast fashion cycles through fleeting obsessions, velvet remains the fabric of power. There's a reason thrones were draped in it.
              </p>
            </div>
          </article>

          <article className="break-inside-avoid border border-accent/10 overflow-hidden">
            <div className="p-6">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent/60 block mb-2">On Dressing</span>
              <h3 className="font-display text-lg tracking-wide mb-2">The Case Against Comfort Dressing</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Comfort is a cage disguised as freedom. The best fashion has always been a little dangerous, a little inconvenient, and entirely unforgettable.
              </p>
            </div>
          </article>

          <article className="break-inside-avoid border border-accent/10 overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={venomDrop} alt="Street After Dark" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 border-t border-accent/10">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent/60 block mb-2">Lookbook</span>
              <h3 className="font-display text-lg tracking-wide mb-2">Street After Dark: A Visual Essay</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                When the sun drops, the silhouettes sharpen. A photo series exploring how our pieces transform under the cover of night.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Journal;
