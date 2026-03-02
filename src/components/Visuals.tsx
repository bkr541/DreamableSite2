import { motion } from "motion/react";

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center">
      {/* Faint side windows */}
      <motion.div 
        animate={{ rotateY: 15, x: -40, scale: 0.9 }}
        className="absolute left-0 w-2/3 h-2/3 glass-window rounded-3xl opacity-60 origin-right"
      />
      <motion.div 
        animate={{ rotateY: -15, x: 40, scale: 0.9 }}
        className="absolute right-0 w-2/3 h-2/3 glass-window rounded-3xl opacity-60 origin-left"
      />
      
      {/* Main glass window */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-4/5 h-4/5 glass-window rounded-[2rem] p-8 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* 3D Product assembly simulation */}
        <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
          <motion.div 
            animate={{ rotateX: [10, -10, 10], rotateY: [-10, 10, -10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="grid grid-cols-2 gap-4 w-3/4 h-3/4"
          >
            <div className="glass-card rounded-xl" />
            <div className="glass-card rounded-xl" />
            <div className="glass-card rounded-xl col-span-2" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function DreamableVisual() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center perspective-[1000px]">
      <motion.div 
        className="w-full h-full glass-window rounded-[2rem] p-8 flex flex-wrap gap-4 items-center justify-center overflow-hidden"
        animate={{ rotateY: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Abstract ideation tiles */}
        <motion.div className="w-1/3 h-1/3 glass-card rounded-2xl bg-gradient-to-br from-teal-100/50 to-transparent" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.div className="w-1/4 h-1/4 glass-card rounded-full bg-gradient-to-tr from-rose-100/50 to-transparent" animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className="w-2/5 h-1/3 glass-card rounded-2xl bg-gradient-to-bl from-amber-100/50 to-transparent" animate={{ y: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity }} />
      </motion.div>
    </div>
  );
}

export function LaunchableVisual() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center perspective-[1000px]">
      <motion.div 
        className="w-4/5 h-full glass-window rounded-[2rem] p-6 flex flex-col gap-4 overflow-hidden"
        animate={{ rotateX: [5, -5, 5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Refined mobile + web UI preview */}
        <div className="w-full h-12 glass-card rounded-xl flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-300/50" />
          <div className="w-3 h-3 rounded-full bg-slate-300/50" />
          <div className="w-3 h-3 rounded-full bg-slate-300/50" />
        </div>
        <div className="flex-1 flex gap-4">
          <div className="w-1/3 h-full glass-card rounded-xl" />
          <div className="flex-1 h-full glass-card rounded-xl flex flex-col gap-4 p-4">
             <div className="w-full h-1/2 glass-card rounded-lg bg-gradient-to-r from-amber-100/30 to-transparent" />
             <div className="w-full h-1/4 glass-card rounded-lg" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function MemorableVisual() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center perspective-[1000px]">
      <motion.div 
        className="w-full h-full glass-window rounded-[2rem] flex items-center justify-center overflow-hidden relative"
      >
        {/* Surrounding tiles */}
        <div className="absolute top-8 left-8 w-16 h-16 glass-card rounded-full" />
        <div className="absolute bottom-12 right-12 w-24 h-24 glass-card rounded-2xl rotate-12" />
        <div className="absolute top-1/4 right-8 w-12 h-12 glass-card rounded-lg -rotate-12" />

        {/* Centered glossy abstract logo mark */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 rounded-full glass-card flex items-center justify-center relative shadow-[0_0_40px_rgba(251,113,133,0.2)]"
        >
          <div className="w-32 h-32 rounded-full border-4 border-white/50 border-t-rose-300/80 border-r-teal-300/80" />
          <div className="absolute w-24 h-24 rounded-full border-4 border-white/30 border-b-amber-300/80 border-l-emerald-300/80 rotate-45" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function EvolvableVisual() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center perspective-[1000px]">
      {/* Layered glass windows in depth */}
      <motion.div 
        animate={{ z: -100, opacity: 0.4, scale: 0.8, y: -40 }}
        className="absolute w-3/4 h-3/4 glass-window rounded-[2rem]"
      />
      <motion.div 
        animate={{ z: -50, opacity: 0.7, scale: 0.9, y: -20 }}
        className="absolute w-3/4 h-3/4 glass-window rounded-[2rem]"
      />
      <motion.div 
        animate={{ z: 0, opacity: 1, scale: 1, y: 0 }}
        className="absolute w-3/4 h-3/4 glass-window rounded-[2rem] p-6 flex items-center justify-center"
      >
        {/* Branching node network */}
        <div className="relative w-full h-full">
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            <motion.path d="M 50 50 L 150 150 L 250 100" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            <motion.path d="M 150 150 L 100 250" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
            <motion.path d="M 150 150 L 250 250" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          </svg>
          <div className="absolute top-[50px] left-[50px] w-4 h-4 bg-teal-200 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
          <div className="absolute top-[150px] left-[150px] w-6 h-6 bg-rose-200 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(251,113,133,0.5)]" />
          <div className="absolute top-[100px] left-[250px] w-4 h-4 bg-amber-200 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
          <div className="absolute top-[250px] left-[100px] w-4 h-4 bg-emerald-200 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
          <div className="absolute top-[250px] left-[250px] w-4 h-4 bg-sky-200 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
        </div>
      </motion.div>
    </div>
  );
}
