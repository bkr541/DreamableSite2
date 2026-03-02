import { motion } from "motion/react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Goals, references, positioning."
    },
    {
      num: "02",
      title: "Design",
      desc: "Concepts, iterations, system."
    },
    {
      num: "03",
      title: "Deliver",
      desc: "Final files, handoff, launch-ready."
    }
  ];

  return (
    <section id="process" className="py-32 px-6 bg-bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-6 text-ink">
            Process.
          </h2>
          <p className="text-lg text-ink/60 font-medium max-w-2xl mx-auto text-balance">
            No chaos. No mystery meat deliverables. Just a clear path from idea to launch.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-black/10 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center mb-8 relative group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                  <span className="font-serif text-3xl text-brand-violet italic">{step.num}</span>
                  <div className="absolute inset-0 rounded-full border border-brand-violet/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
                </div>
                <h3 className="text-2xl font-semibold text-ink mb-3">{step.title}</h3>
                <p className="text-ink/60 font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
