import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

export function SectionLayout({ 
  headline, 
  text, 
  visual, 
  align = "left", 
  children 
}: { 
  headline: React.ReactNode, 
  text: string, 
  visual: React.ReactNode, 
  align?: "left" | "right",
  children?: React.ReactNode 
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yHeadline = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const yChildren = useTransform(scrollYProgress, [0, 1], [75, -75]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-32 px-6 relative z-10">
      <div className={`max-w-7xl mx-auto w-full flex flex-col ${align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16`}>
        
        <div className="flex-1 flex flex-col items-start">
          <motion.h2 
            style={{ y: yHeadline, opacity }}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-800 mb-6"
          >
            {headline}
          </motion.h2>
          <motion.p 
            style={{ y: yText, opacity }}
            className="text-xl text-slate-600 leading-relaxed text-balance mb-8"
          >
            {text}
          </motion.p>
          <motion.div style={{ y: yChildren, opacity }}>
            {children}
          </motion.div>
        </div>

        <motion.div 
          style={{ y: yVisual, opacity }}
          className="flex-1 w-full relative"
        >
          {/* Reflective floor effect */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-white/20 blur-2xl rounded-full mix-blend-overlay pointer-events-none" />
          
          {visual}
        </motion.div>

      </div>
    </section>
  );
}
