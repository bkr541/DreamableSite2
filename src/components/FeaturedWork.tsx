import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function FeaturedWork() {
  const projects = [
    {
      title: "Artist Identity Kit",
      category: "Logo + Visual System",
      outcome: "A cohesive brand that scales from Spotify to merch.",
      image: "https://picsum.photos/seed/artist/800/600?blur=2"
    },
    {
      title: "Launch Landing Page",
      category: "One-page site + copy",
      outcome: "High-converting digital home for a new product.",
      image: "https://picsum.photos/seed/launch/800/600?blur=2"
    },
    {
      title: "Social Design Kit",
      category: "Templates + headers",
      outcome: "Consistent, beautiful assets for every platform.",
      image: "https://picsum.photos/seed/social/800/600?blur=2"
    },
    {
      title: "Brand Refresh",
      category: "Guidelines + rollout",
      outcome: "Modernizing a legacy brand for the next decade.",
      image: "https://picsum.photos/seed/refresh/800/600?blur=2"
    }
  ];

  return (
    <section id="work" className="py-32 px-6 overflow-hidden bg-bg-base relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-4 text-ink">
              Featured Work.
            </h2>
            <p className="text-lg text-ink/60 font-medium max-w-md">
              Real projects. Clear outcomes. Built to evolve with you.
            </p>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Oversized Tilted Mega-Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-black/5"
          style={{ transformPerspective: 1000 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group cursor-pointer flex flex-col gap-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-ink" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
                    <span className="text-xs font-bold tracking-wider text-brand-violet uppercase bg-brand-violet/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-ink/60 font-medium">{project.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
