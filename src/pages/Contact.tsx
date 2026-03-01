import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="pt-24 pb-16 min-h-screen px-6 md:px-12">
      <div className="max-w-2xl mx-auto">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent block mb-4">Contact</span>
        <h1 className="font-display text-3xl md:text-5xl tracking-[0.05em] mb-4">
          Send your grievances<br />(or inquiries).
        </h1>
        <p className="font-body text-muted-foreground text-sm mb-16">
          We read everything. We respond to what intrigues us.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full bg-transparent border border-accent/30 px-4 py-3 font-body text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full bg-transparent border border-accent/30 px-4 py-3 font-body text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">Message</label>
            <textarea
              required
              rows={6}
              className="w-full bg-transparent border border-accent/30 px-4 py-3 font-body text-sm text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 border border-accent text-accent font-body text-sm tracking-[0.2em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            {submitted ? "MESSAGE SENT" : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
