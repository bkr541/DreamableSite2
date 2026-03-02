import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl glass-window rounded-full px-6 py-3 flex items-center justify-between"
    >
      <Link to="/" className="font-semibold text-xl tracking-tight text-slate-800">
        Dreamable<span className="text-slate-400">.studio</span>
      </Link>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link to="/about" className="hover:text-slate-900 transition-colors">About Us</Link>
          <Link to="/services" className="hover:text-slate-900 transition-colors">Services</Link>
        </div>
        <a 
          href="/#contact" 
          className="px-6 py-2.5 rounded-full text-sm font-medium bg-white/60 text-slate-800 border border-white/80 hover:bg-white transition-all shadow-sm"
        >
          Start a Project
        </a>
      </div>
    </motion.nav>
  );
}
