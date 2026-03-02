export function Footer() {
  return (
    <footer className="py-12 px-6 bg-ink text-white/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-serif font-medium text-xl tracking-tight text-white">
          Dreamable<span className="text-brand-violet-light">.studio</span>
        </div>
        
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="mailto:hello@dreamable.studio" className="hover:text-white transition-colors">hello@dreamable.studio</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
