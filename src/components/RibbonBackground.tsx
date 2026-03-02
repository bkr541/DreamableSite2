import { motion, useScroll, useTransform } from "motion/react";

export function RibbonBackground() {
  const { scrollYProgress } = useScroll();
  
  // cyan/teal -> coral/red -> warm gold/yellow -> mint/seafoam
  const color1 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["#2dd4bf", "#fb7185", "#fbbf24", "#34d399", "#2dd4bf"]);
  const color2 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["#0ea5e9", "#f43f5e", "#f59e0b", "#10b981", "#0ea5e9"]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] blur-[100px] rounded-full opacity-30 mix-blend-multiply"
        style={{ backgroundColor: color1 }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] blur-[100px] rounded-full opacity-30 mix-blend-multiply"
        style={{ backgroundColor: color2 }}
      />
      
      {/* Fine contour lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none">
        <motion.path
          d="M-100,200 C200,100 400,300 800,200 C1200,100 1600,400 2000,200"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          style={{
            pathLength: useTransform(scrollYProgress, [0, 1], [0.5, 1]),
            pathOffset: useTransform(scrollYProgress, [0, 1], [0, 0.5])
          }}
        />
        <motion.path
          d="M-100,220 C200,120 400,320 800,220 C1200,120 1600,420 2000,220"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1"
          style={{
            pathLength: useTransform(scrollYProgress, [0, 1], [0.4, 1]),
            pathOffset: useTransform(scrollYProgress, [0, 1], [0, 0.6])
          }}
        />
        <motion.path
          d="M-100,180 C200,80 400,280 800,180 C1200,80 1600,380 2000,180"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1"
          style={{
            pathLength: useTransform(scrollYProgress, [0, 1], [0.6, 1]),
            pathOffset: useTransform(scrollYProgress, [0, 1], [0, 0.4])
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#fb7185" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
