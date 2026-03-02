import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Packages() {
  const tiers = [
    {
      name: "Starter",
      price: "$2,500",
      desc: "One focused deliverable.",
      timeline: "1-2 Weeks",
      revisions: "1 Round",
      features: [
        "Primary Logo Design",
        "Color Palette",
        "Typography Selection",
        "Basic Usage Guidelines"
      ]
    },
    {
      name: "Core",
      price: "$5,000",
      desc: "Identity + system essentials.",
      timeline: "3-4 Weeks",
      revisions: "2 Rounds",
      features: [
        "Full Logo Suite (Primary, Secondary, Marks)",
        "Comprehensive Brand Guidelines",
        "Design System Tokens",
        "Social Media Templates (3)"
      ],
      popular: true
    },
    {
      name: "Full",
      price: "$10,000",
      desc: "Identity + landing page + content kit.",
      timeline: "6-8 Weeks",
      revisions: "3 Rounds",
      features: [
        "Everything in Core",
        "Custom Landing Page Design & Build",
        "Responsive, SEO-ready Webflow/Framer site",
        "Extended Content Kit (10+ Templates)"
      ]
    }
  ];

  return (
    <section id="packages" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-6 text-ink">
            Packages.
          </h2>
          <p className="text-lg text-ink/60 font-medium max-w-2xl mx-auto text-balance">
            Clear scope. Tasteful craft. Built to evolve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-[2.5rem] p-10 flex flex-col h-full border ${
                tier.popular ? "border-brand-violet/20 bg-brand-violet/5 shadow-xl shadow-brand-violet/5" : "border-black/5 bg-white shadow-sm"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-violet text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-ink mb-2">{tier.name}</h3>
                <p className="text-ink/60 font-medium mb-6">{tier.desc}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium text-ink/40">Starting at</span>
                  <span className="font-serif text-4xl text-ink">{tier.price}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8 py-6 border-y border-black/5">
                <div>
                  <div className="text-xs font-bold tracking-wider text-ink/40 uppercase mb-1">Timeline</div>
                  <div className="font-medium text-ink">{tier.timeline}</div>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-ink/40 uppercase mb-1">Revisions</div>
                  <div className="font-medium text-ink">{tier.revisions}</div>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                <div className="text-xs font-bold tracking-wider text-ink/40 uppercase mb-4">What's Included</div>
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-violet shrink-0 mt-0.5" />
                    <span className="text-ink/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className={`w-full py-4 rounded-full text-center font-medium transition-all ${
                  tier.popular 
                    ? "bg-brand-violet text-white hover:bg-brand-violet-dark shadow-md hover:shadow-lg" 
                    : "bg-ink text-white hover:bg-ink/90 shadow-sm hover:shadow-md"
                }`}
              >
                Select {tier.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
