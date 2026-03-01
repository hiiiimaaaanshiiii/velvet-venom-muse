import aboutEditorial from "@/assets/about-editorial.png";

const About = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Text column */}
          <div className="lg:col-span-7 lg:py-16">
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent block mb-8">
              The Manifesto
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-[0.05em] leading-[1.1] mb-12">
              Not for the faint of heart.
            </h1>
            <div className="max-w-2xl">
              <p className="font-body text-foreground/70 text-base md:text-lg leading-[1.8] mb-8">
                Society wants you in palatable pastels. They want you digestible. But honestly? Being digestible is exhausting.
              </p>
              <p className="font-body text-foreground/70 text-base md:text-lg leading-[1.8] mb-8">
                Velvet & Venom was forged for the main characters. We don't do quiet luxury; we do calculated luxury. Every drape, every sharp hem, and every heavy velvet lapel is designed to be an inciting incident.
              </p>
              <p className="font-display text-xl md:text-2xl text-accent tracking-wide leading-relaxed italic">
                Dress like the plot twist you are.
              </p>
            </div>
          </div>

          {/* Image column */}
          <div className="lg:col-span-5 lg:mt-32">
            <div className="border border-accent/20">
              <img
                src={aboutEditorial}
                alt="Velvet & Venom editorial"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
