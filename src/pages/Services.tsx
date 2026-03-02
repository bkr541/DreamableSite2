import { motion } from "motion/react";
import { ContactSection } from "../components/ContactSection";
import { Code, PenTool, LayoutTemplate, Sparkles, CheckCircle2 } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-teal-500" />,
      title: "Software Development",
      promise: "Clean architecture and thoughtful UX that actually ships.",
      deliverables: [
        "Marketing websites",
        "Web applications",
        "Full native mobile apps (iOS + Android)",
        "Product UI/UX and design systems",
        "Performance and maintainability focus"
      ],
      bestFor: "Founders and teams needing a robust, scalable product built from the ground up."
    },
    {
      icon: <PenTool className="w-8 h-8 text-rose-500" />,
      title: "Logo & Branding Design",
      promise: "Visual identities that feel premium, consistent, and unmistakably you.",
      deliverables: [
        "Logo design and mark exploration",
        "Brand identity systems (type, color, usage rules)",
        "Brand kits and handoff files",
        "Launch-ready assets and templates"
      ],
      bestFor: "New ventures or existing products needing a cohesive, memorable market presence."
    },
    {
      icon: <LayoutTemplate className="w-8 h-8 text-amber-500" />,
      title: "Custom Visual Systems",
      promise: "Tailored visual languages that elevate your digital experience.",
      deliverables: [
        "Project-specific visuals for apps and sites",
        "UI component visuals and illustrations",
        "High-impact hero visuals",
        "Motion-ready design direction"
      ],
      bestFor: "Brands looking to stand out with a unique, polished aesthetic beyond standard UI."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-sky-500" />,
      title: "Practical AI Automations",
      promise: "Lightweight workflows that save your small team hours of repetitive work.",
      deliverables: [
        "Content generation workflows",
        "Internal tooling and data cleanup",
        "Automated publishing systems",
        "Customer support triage"
      ],
      bestFor: "Lean teams wanting to operate faster without the bloat of enterprise consulting."
    }
  ];

  const models = [
    {
      title: "Project Sprint",
      timeline: "2–4 weeks",
      includes: "Focused execution on a single deliverable—like a brand identity, a marketing site, or a specific app feature.",
      ideal: "Teams with a clear, immediate need and a strictly defined scope."
    },
    {
      title: "Build + Launch",
      timeline: "2–4 months",
      includes: "End-to-end product creation. We take you from initial concept and branding to full software development and go-live readiness.",
      ideal: "Early-stage startups or businesses launching a brand new digital product."
    },
    {
      title: "Ongoing Care",
      timeline: "Monthly retainer",
      includes: "Monthly design, development, and automation support. We iterate on features, refine systems, and maintain performance as you grow.",
      ideal: "Growing products that need a reliable, evolvable partnership without hiring a full in-house team."
    }
  ];

  const examples = [
    {
      client: "The Solo Founder",
      goal: "Needed a trustworthy brand and a high-converting marketing site to launch a new fintech tool.",
      delivered: "Complete logo suite, brand guidelines, and a lightning-fast responsive marketing website.",
      outcome: "Secured 500+ waitlist signups in the first week with a digital presence that felt like a Series A company."
    },
    {
      client: "The Seed-Stage Startup",
      goal: "Required a native mobile MVP and a scalable design system to test their core hypothesis with real users.",
      delivered: "iOS and Android native apps, complete product UI/UX, and a modular component library.",
      outcome: "Successfully launched in both app stores within 3 months, leading directly to a closed seed funding round."
    },
    {
      client: "The Boutique Agency",
      goal: "Drowning in manual data entry, client onboarding tasks, and inbox triage.",
      delivered: "Lightweight AI automations for content sorting, automated client onboarding flows, and internal data cleanup.",
      outcome: "Saved the team 15+ hours per week, allowing them to take on two additional retainer clients without hiring."
    },
    {
      client: "The E-commerce Pivot",
      goal: "Needed a fresh visual direction and a launch kit for a major new premium product line.",
      delivered: "Custom 3D hero visuals, a refreshed UI component library, and motion-ready social assets.",
      outcome: "40% increase in day-one sales compared to previous launches, driven by cohesive, premium visuals."
    }
  ];

  const faqs = [
    {
      q: "Do you build native apps?",
      a: "Yes. We design and engineer full native mobile applications for both iOS and Android, ensuring smooth performance and a truly native feel."
    },
    {
      q: "Do you do automation?",
      a: "Yes, but we focus strictly on lightweight, practical AI workflows. We build tools that actually save your team time—like content triage or internal data cleanup—without the massive price tag of enterprise consulting."
    },
    {
      q: "What do you need from me to start?",
      a: "A clear understanding of your goals, any existing brand assets, and a willingness to collaborate. We’ll guide you through a brief discovery process to align on scope before any design or code is written."
    },
    {
      q: "What does a typical timeline look like?",
      a: "It depends on the engagement model. Focused sprints take 2–4 weeks, while end-to-end product builds typically range from 2–4 months. We establish clear, realistic milestones from day one."
    },
    {
      q: "Do you do ongoing support after launch?",
      a: "Absolutely. Products need to be Evolvable. We offer 'Ongoing Care' retainers to iterate on features, refine design systems, and maintain performance as your audience expands."
    },
    {
      q: "Are you a massive agency?",
      a: "No. We are a lean, capable product studio. When you work with us, you work directly with the senior designers and engineers who are actually building your product."
    }
  ];

  return (
    <main className="relative z-10 pt-48 pb-24 px-6">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-32 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-gradient-to-r from-teal-200/20 via-rose-200/20 to-amber-200/20 blur-[100px] rounded-full pointer-events-none -z-10"
        />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-semibold tracking-tight text-slate-800 mb-8"
        >
          Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl text-slate-600 leading-relaxed text-balance mb-6"
        >
          We design, engineer, and launch digital products for teams that want to move fast without sacrificing craft.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-500 font-medium tracking-wide mb-12"
        >
          Dreamable. Buildable. Launchable. Memorable. Evolvable.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <a href="#contact" className="px-8 py-4 bg-slate-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Start a Project
          </a>
          <a href="#examples" className="px-8 py-4 bg-white/50 text-slate-800 border border-white/60 rounded-full font-medium hover:bg-white/80 transition-all">
            See Examples
          </a>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-800">What we do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
              className="glass-window rounded-[2rem] p-10 flex flex-col h-full relative group overflow-hidden perspective-[1000px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="mb-6 bg-white/50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-lg text-slate-600 mb-8 font-medium">{service.promise}</p>
              
              <ul className="space-y-3 mb-10 flex-grow">
                {service.deliverables.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/40">
                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase block mb-1">Best For</span>
                <p className="text-sm text-slate-600">{service.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="max-w-7xl mx-auto mb-32 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-800">How we work together</h2>
        </div>
        
        <div className="relative">
          {/* Glowing timeline path */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-teal-300 via-rose-300 to-amber-300 hidden md:block origin-left rounded-full opacity-50"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {models.map((model, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2 }}
                className="glass-card rounded-[2rem] p-8 bg-white/60"
              >
                <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">{model.timeline}</div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">{model.title}</h3>
                <p className="text-slate-600 mb-6">{model.includes}</p>
                <div className="pt-6 border-t border-white/40">
                  <span className="text-xs font-bold tracking-wider text-slate-400 uppercase block mb-1">Ideal Client</span>
                  <p className="text-sm text-slate-600">{model.ideal}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Examples */}
      <section id="examples" className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-800">Selected Work Examples</h2>
        </div>
        <div className="space-y-8">
          {examples.map((example, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-window rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="md:w-1/3">
                <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">Client Type</div>
                <h3 className="text-2xl font-semibold text-slate-800">{example.client}</h3>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">Goal</div>
                  <p className="text-slate-600">{example.goal}</p>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">Delivered</div>
                  <p className="text-slate-600">{example.delivered}</p>
                </div>
                <div className="sm:col-span-2 pt-6 border-t border-white/40">
                  <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">Outcome</div>
                  <p className="text-lg font-medium text-slate-800">{example.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-800">Common Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="glass-card rounded-2xl group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg text-slate-800">
                {faq.q}
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="max-w-5xl mx-auto glass-window rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-100/30 via-transparent to-rose-100/30 pointer-events-none" />
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-800 mb-6 relative z-10">
          Let’s build something people remember.
        </h2>
        <p className="text-xl text-slate-600 mb-12 relative z-10">
          No enterprise jargon. Just work that ships.
        </p>
        <a href="#contact" className="inline-block px-10 py-5 bg-slate-800 text-white rounded-full font-medium shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all relative z-10">
          Start a Project
        </a>
      </section>

      <ContactSection />
    </main>
  );
}
