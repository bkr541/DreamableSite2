import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Brand Identity",
      description: "Logo suite, type + color, brand marks.",
      deliverables: ["Primary logo", "Submarks", "Usage basics"]
    },
    {
      title: "Design Systems",
      description: "Reusable components and visual rules.",
      deliverables: ["Layout rules", "Typography scale", "UI style tokens"]
    },
    {
      title: "Landing Pages",
      description: "Premium one-page sites that convert.",
      deliverables: ["Sections", "Responsive build", "Basic SEO, analytics-ready"]
    },
    {
      title: "Content Kits",
      description: "Social templates, cover art layouts, promo assets.",
      deliverables: ["Editable templates", "Export sets", "Consistency rules"]
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-6 text-ink">
            Services.
          </h2>
          <p className="text-lg text-ink/60 font-medium max-w-2xl mx-auto text-balance">
            We build the foundation for your brand to grow. No enterprise automation pipelines, just high-craft deliverables that work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel rounded-[2rem] p-8 md:p-12 flex flex-col h-full border border-black/5 hover:border-brand-violet/20 transition-colors group"
            >
              <h3 className="text-2xl font-semibold text-ink mb-3 group-hover:text-brand-violet transition-colors">
                {service.title}
              </h3>
              <p className="text-ink/60 font-medium mb-8 flex-grow">
                {service.description}
              </p>
              
              <div className="space-y-4">
                <div className="text-xs font-bold tracking-wider text-ink/40 uppercase mb-4">
                  Deliverables
                </div>
                {service.deliverables.map((item, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-violet/60 shrink-0 mt-0.5" />
                    <span className="text-ink/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
