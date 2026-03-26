const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-serif text-lg text-foreground">
          Dr. Jonathan <span className="text-gold">Vidal</span>
        </span>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-gold text-primary-foreground text-xs tracking-widest uppercase font-medium px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
        >
          Agendar consulta
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
