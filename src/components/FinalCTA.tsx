import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function FinalCTA() {
  const words = ["Brandable", "Recognizable", "Memorable", "Evolvable", "Dreamable"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="relative py-32 px-6 bg-ink text-white overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-5 mix-blend-overlay">
        <motion.div
          key={currentWordIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="font-serif text-[15vw] leading-none tracking-tighter whitespace-nowrap text-white italic"
        >
          {words[currentWordIndex]}.
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Left: Copy */}
        <div className="flex-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-6xl md:text-8xl tracking-tight mb-8 text-white"
          >
            Make it<br/>
            <span className="text-brand-violet-light italic">Dreamable.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/60 font-medium max-w-md leading-relaxed text-balance"
          >
            Tell us what you're building. We'll reply with a clear plan and next steps.
          </motion.p>
        </div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 w-full bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-wider text-white/40 uppercase">Name</label>
              <input 
                type="text" 
                placeholder="Jane Doe"
                className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-violet-light transition-colors font-medium"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-wider text-white/40 uppercase">Email</label>
              <input 
                type="email" 
                placeholder="jane@example.com"
                className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-violet-light transition-colors font-medium"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-wider text-white/40 uppercase">What are you building?</label>
              <textarea 
                placeholder="A new brand identity for my studio..."
                rows={3}
                className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-violet-light transition-colors font-medium resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-wider text-white/40 uppercase">Budget Range</label>
                <select className="bg-transparent border-b border-white/20 pb-2 text-white/80 focus:outline-none focus:border-brand-violet-light transition-colors font-medium appearance-none cursor-pointer">
                  <option value="" disabled selected className="text-ink">Select...</option>
                  <option value="2k-5k" className="text-ink">$2k - $5k</option>
                  <option value="5k-10k" className="text-ink">$5k - $10k</option>
                  <option value="10k+" className="text-ink">$10k+</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-wider text-white/40 uppercase">Timeline</label>
                <select className="bg-transparent border-b border-white/20 pb-2 text-white/80 focus:outline-none focus:border-brand-violet-light transition-colors font-medium appearance-none cursor-pointer">
                  <option value="" disabled selected className="text-ink">Select...</option>
                  <option value="asap" className="text-ink">ASAP</option>
                  <option value="1-3m" className="text-ink">1-3 Months</option>
                  <option value="flexible" className="text-ink">Flexible</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button 
                type="submit"
                className="flex-1 py-4 rounded-full text-center font-medium bg-brand-violet text-white hover:bg-brand-violet-light transition-all shadow-md"
              >
                Send Inquiry
              </button>
              <button 
                type="button"
                className="flex-1 py-4 rounded-full text-center font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                Book a Call
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
