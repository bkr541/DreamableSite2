import { motion } from "motion/react";
import { ArrowRight, Circle } from "lucide-react";

export function Hero() {
  const words = ["Brandable.", "Recognizable.", "Memorable.", "Evolvable.", "Dreamable."];

  const pillStrips = [
    { label: "Brand Identity", chip: "VIEW" },
    { label: "Design Systems", chip: "GET" },
    { label: "Landing Pages", chip: "LAUNCH" },
    { label: "Content Kits", chip: "BUILD" },
    { label: "Creative Direction", chip: "ALIGN" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
      <div className="bg-grain" />
      
      {/* Glossy Abstract Shapes (Restrained) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-200/20 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Oversized Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, staggerChildren: 0.1 }}
          className="flex flex-col items-center mb-10"
        >
          {words.map((word, i) => (
            <motion.h1 
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-tight ${
                i === words.length - 1 ? "text-brand-violet italic mt-2" : "text-ink"
              }`}
            >
              {word}
            </motion.h1>
          ))}
        </motion.div>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl text-lg md:text-xl text-ink/60 font-medium leading-relaxed mb-16 text-balance"
        >
          Dreamable.studio is a creative lab for brand identity, design systems, and premium landing pages. Built for artists and small brands who want work that lasts and keeps working.
        </motion.p>

        {/* Floating Pill Strips */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col gap-3 w-full max-w-md mx-auto mb-16"
        >
          {pillStrips.map((strip, i) => (
            <div 
              key={strip.label}
              className="flex items-center justify-between px-5 py-3.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-md hover:bg-white transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <Circle className="w-2 h-2 fill-ink text-ink opacity-20 group-hover:opacity-100 group-hover:fill-brand-violet group-hover:text-brand-violet transition-colors" />
                <span className="font-medium text-sm text-ink/80 group-hover:text-ink transition-colors">{strip.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-wider text-ink/40 group-hover:text-brand-violet transition-colors">{strip.chip}</span>
                <ArrowRight className="w-3 h-3 text-ink/40 group-hover:text-brand-violet transition-colors" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Hero CTAs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full text-base font-medium bg-ink text-white hover:bg-ink/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book a Call
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full text-base font-medium bg-white text-ink border border-black/5 hover:bg-black/5 transition-all shadow-sm"
            >
              Start a Project
            </a>
          </div>
          
          <p className="text-sm font-medium text-ink/40 tracking-wide uppercase">
            Clear scope. Tasteful craft. Built to evolve.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
