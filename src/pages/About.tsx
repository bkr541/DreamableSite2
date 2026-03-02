import { motion } from "motion/react";
import { ContactSection } from "../components/ContactSection";

export function About() {
  return (
    <main className="relative z-10 pt-48 pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-800 mb-6"
        >
          About Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 leading-relaxed text-balance"
        >
          We are a digital product and creative studio defined by five words: Dreamable. Buildable. Launchable. Memorable. Evolvable.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto glass-window rounded-[2.5rem] p-8 md:p-16 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-800 mb-6">Our Philosophy</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We believe in clean architecture, thoughtful UX, and maintainable code. We don't just design; we build products that ship and scale.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              No corporate jargon. No "Fortune 500 automation" positioning. Just a capable creative product studio that actually delivers.
            </p>
          </div>
          <div className="aspect-square glass-card rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100/40 via-rose-100/40 to-amber-100/40" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 rounded-full border-4 border-white/40 border-t-teal-400/60 border-r-rose-400/60"
            />
          </div>
        </div>
      </div>

      <ContactSection />
    </main>
  );
}
