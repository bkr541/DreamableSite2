import { SectionLayout } from "../components/SectionLayout";
import { HeroVisual, DreamableVisual, LaunchableVisual, MemorableVisual, EvolvableVisual } from "../components/Visuals";
import { ContactSection } from "../components/ContactSection";

export function Home() {
  return (
    <main className="relative z-10">
      <SectionLayout 
        headline="Dreamable.studio"
        text="Design and engineering that ships. We craft scalable web platforms and native apps with clean architecture, thoughtful UX, and maintainable code."
        visual={<HeroVisual />}
        align="left"
      >
        <div className="flex items-center gap-4">
          <a href="#contact" className="px-8 py-4 bg-slate-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Start a project
          </a>
          <a href="#work" className="px-8 py-4 bg-white/50 text-slate-800 border border-white/60 rounded-full font-medium hover:bg-white/80 transition-all">
            See our work
          </a>
        </div>
      </SectionLayout>

      <SectionLayout 
        headline={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-rose-400 to-amber-400">Dream</span>able</>}
        text="Turn fuzzy ideas into a clear product vision, fast. We help you shape the concept, define the experience, and map the path from 'what if' to 'what's next'."
        visual={<DreamableVisual />}
        align="right"
      />

      <SectionLayout 
        headline={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-rose-400 to-amber-400">Launch</span>able</>}
        text="From polished product to confident release. We take you through testing, performance, and go-live readiness so shipping feels like a moment, not a gamble."
        visual={<LaunchableVisual />}
        align="left"
      />

      <SectionLayout 
        headline={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-rose-400 to-amber-400">Memor</span>able</>}
        text="A brand people recognize and remember. Logos, identity systems, and custom visuals that feel premium, consistent, and unmistakably you."
        visual={<MemorableVisual />}
        align="right"
      />

      <SectionLayout 
        headline={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-rose-400 to-amber-400">Evolv</span>able</>}
        text="Built to grow, not break. We iterate with you post-launch, improving features, design systems, and performance as your product and audience expand."
        visual={<EvolvableVisual />}
        align="left"
      />

      <ContactSection />
    </main>
  );
}
