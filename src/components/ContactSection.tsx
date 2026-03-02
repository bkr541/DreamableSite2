import { motion } from "motion/react";

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-32 px-6 relative z-10">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-800 mb-6">
          Start a project
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          Tell us what you’re building. We’ll reply with next steps and a clear plan.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full glass-window rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
        >
          {/* Calm glass arc / portal */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-teal-100/30 to-transparent blur-xl pointer-events-none" />
          
          <form className="flex flex-col gap-6 text-left relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-500">Name</label>
                <input type="text" className="bg-white/40 border border-white/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-slate-800" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-500">Email</label>
                <input type="email" className="bg-white/40 border border-white/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-slate-800" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-500">Project Type</label>
                <select className="bg-white/40 border border-white/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-slate-800 appearance-none">
                  <option>Web App</option>
                  <option>Native App</option>
                  <option>Branding</option>
                  <option>Visuals</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-500">Budget Range</label>
                <select className="bg-white/40 border border-white/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-slate-800 appearance-none">
                  <option>$5k - $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k+</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-500">Message</label>
              <textarea rows={4} className="bg-white/40 border border-white/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-slate-800 resize-none" />
            </div>

            <button className="mt-4 w-full md:w-auto md:self-center px-12 py-4 bg-slate-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
