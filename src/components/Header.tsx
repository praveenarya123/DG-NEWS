import { useState } from "react";
import { Menu, X, Search, Bell, Newspaper } from "lucide-react";

const categories = ["होम", "ताज़ा खबर", "India", "World", "Politics", "Sports", "Business", "Entertainment", "Tech", "E-Paper"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("होम");

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary-foreground lg:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-2xl md:text-3xl font-black text-primary-foreground tracking-tight">DG</span>
              <span className="text-2xl md:text-3xl font-black text-accent tracking-tight">NEWS</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-primary-foreground hover:text-accent transition-colors">
              <Search size={20} />
            </button>
            <button className="relative text-primary-foreground hover:text-accent transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full pulse-live" />
            </button>
            <button className="hidden md:flex items-center gap-1 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-3 py-1.5 rounded-md text-sm font-semibold transition-colors">
              <Newspaper size={16} />
              E-Paper
            </button>
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-card border-b border-border shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setMenuOpen(false); }}
                className="text-left px-3 py-2 rounded-md text-foreground hover:bg-muted font-medium"
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
