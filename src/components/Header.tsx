import { useState } from "react";
import { Menu, X, Search, Bell, Newspaper, User, Flame } from "lucide-react";

const categories = [
  { name: "होम", icon: "🏠" },
  { name: "ताज़ा खबर", icon: "🔥" },
  { name: "India", icon: "🇮🇳" },
  { name: "World", icon: "🌍" },
  { name: "Politics", icon: "🏛️" },
  { name: "Sports", icon: "🏏" },
  { name: "Business", icon: "📈" },
  { name: "Entertainment", icon: "🎬" },
  { name: "Tech", icon: "💻" },
  { name: "Videos", icon: "🎥" },
  { name: "E-Paper", icon: "📰" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("होम");

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary-foreground lg:hidden hover-scale">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="w-9 h-9 bg-primary-foreground rounded-lg flex items-center justify-center shadow-md">
                <span className="text-primary font-black text-sm">DG</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl md:text-3xl font-black text-primary-foreground tracking-tight leading-none">DG <span className="text-accent">NEWS</span></span>
                <span className="text-[8px] text-primary-foreground/60 tracking-[0.3em] font-medium">INDIA'S TRUSTED NEWS</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button className="text-primary-foreground/80 hover:text-accent transition-colors p-2 rounded-full hover:bg-primary-foreground/10">
              <Search size={20} />
            </button>
            <button className="relative text-primary-foreground/80 hover:text-accent transition-colors p-2 rounded-full hover:bg-primary-foreground/10">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-accent rounded-full pulse-live border-2 border-primary" />
            </button>
            <button className="hidden md:flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-md hover-scale">
              <Newspaper size={16} />
              E-Paper
            </button>
            <button className="hidden md:flex items-center gap-1 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-3 py-2 rounded-full text-sm font-medium transition-colors">
              <User size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.name
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <span className="text-xs">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-b border-border shadow-xl animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => { setActiveCategory(cat.name); setMenuOpen(false); }}
                className="text-left px-4 py-3 rounded-xl text-foreground hover:bg-primary hover:text-primary-foreground font-medium transition-all flex items-center gap-3 animate-slide-up"
                style={{ animationDelay: `${i * 40}ms`, animationFillMode: "both" }}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
