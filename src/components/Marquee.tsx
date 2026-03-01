const Marquee = () => {
  const text = "Tension is in the tailoring. — The new standard of power. — ";
  const repeated = text.repeat(8);

  return (
    <div className="border-y border-accent/20 py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="font-body text-sm tracking-[0.3em] uppercase text-accent/60">
          {repeated}
        </span>
        <span className="font-body text-sm tracking-[0.3em] uppercase text-accent/60">
          {repeated}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
