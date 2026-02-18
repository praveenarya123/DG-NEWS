import { useState } from "react";
import { Menu, X, Search, Bell, Newspaper, User, ChevronDown } from "lucide-react";

const madhyaPradeshCities = [
  "इंदौर",
  "भोपाल",
  "जबलपुर",
  "ग्वालियर",
  "उज्जैन",
  "सागर",
  "रतलाम",
  "धार",
  "बेतुल",
  "सिओनी",
  "मंदसौर",
  "खरगोन",
  "विदिशा",
  "देवास",
  "छिंदवाड़ा",
  "मुरैना",
  "शिवपुरी",
  "अशोक नगर",
  "राइसेन",
  "नरसिंहपुर",
  "दमोह",
  "पन्ना",
  "छतरपुर",
  "टीकमगढ़",
  "दतिया",
  "गुना",
  "सीधी",
  "सिंगरौली",
  "शहडोल",
  "उमरिया",
  "अनूपपुर",
  "डिंडौरी",
  "मंडला",
  "बालाघाट",
  "होशंगाबाद",
  "खंडवा",
  "बड़वानी",
  "अलीराजपुर",
  "बुरहानपुर",
  "सहारे",
  "रीवा",
  "सतना",
  "निवारी",
  "अगर मालवा",
  "राजगढ़",
  "सिरोंज",
  "मनावर",
  "पीथमपुर",
  "मैहर",
  "नागदा",
  "मनपुर",
  "जोबट",
];

const categories = [
  { name: "होम", icon: "🏠" },
  { name: "ताज़ा खबर", icon: "🔥" },
  { name: "मध्य प्रदेश", icon: "🏞️", hasDropdown: true },
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
  const [mpDropdownOpen, setMpDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-primary via-primary to-blue-600 shadow-2xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-primary-foreground lg:hidden hover-scale transform hover:scale-110">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="flex items-center gap-2">
              <div className="w-11 h-11 bg-primary-foreground rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                <span className="text-primary font-black text-base">DG</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-3xl md:text-4xl font-black text-primary-foreground tracking-tight leading-none transition-all">DG <span className="text-yellow-300 drop-shadow-lg">NEWS</span></span>
                <span className="text-[13px] md:text-base text-primary-foreground tracking-[0.2em] font-bold drop-shadow-sm">दैनिक दिव्य गौरव</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="text-primary-foreground hover:text-white transition-all p-2.5 rounded-full hover:bg-white/20 hover:scale-110 transform">
              <Search size={24} />
            </button>
            <button className="relative text-primary-foreground hover:text-white transition-all p-2.5 rounded-full hover:bg-white/20 hover:scale-110 transform">
              <Bell size={24} />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-yellow-300 rounded-full pulse-live border-2 border-white" />
            </button>
            <button className="hidden md:flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
              <Newspaper size={18} />
              E-Paper
            </button>
            <button className="hidden md:flex items-center gap-2 bg-white text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
              <User size={18} />
              लॉगिन
            </button>
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="bg-gradient-to-r from-white to-gray-50 backdrop-blur-md border-b-2 border-primary/20 shadow-md relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-4">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  if (cat.hasDropdown) {
                    setMpDropdownOpen(!mpDropdownOpen);
                  }
                }}
                className={`whitespace-nowrap px-5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 transform hover:scale-110 ${
                  activeCategory === cat.name
                    ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg scale-105 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-yellow-400 after:rounded-b-lg"
                    : "text-foreground hover:bg-gray-200/50 hover:border-b-2 hover:border-primary"
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                {cat.name}
                {cat.hasDropdown && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mpDropdownOpen ? "rotate-180" : ""}`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Madhya Pradesh dropdown - rendered outside scrollable area */}
        {mpDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border-t-4 border-primary shadow-2xl z-50 rounded-b-xl">
            <div className="container mx-auto px-4">
              <div className="p-4 border-b-2 border-primary/10 bg-gradient-to-r from-primary/5 to-blue-600/5">
                <p className="text-sm font-bold text-primary">
                  🏙️ मध्य प्रदेश के शहर
                </p>
              </div>
              <div className="grid grid-cols-4 gap-3 p-5 max-h-80 overflow-y-auto">
                {madhyaPradeshCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      setActiveCategory(`मध्य प्रदेश - ${city}`);
                      setMpDropdownOpen(false);
                    }}
                    className="text-left px-4 py-2.5 text-sm rounded-lg text-foreground hover:bg-primary hover:text-white transition-all transform hover:scale-105 hover:shadow-md font-medium border border-gray-200 hover:border-primary"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-white to-gray-50 backdrop-blur-md border-b-2 border-primary/20 shadow-2xl animate-fade-in">
          <nav className="container mx-auto px-4 py-5 flex flex-col gap-2">
            {categories.map((cat, i) => (
              <div key={cat.name}>
                <button
                  onClick={() => {
                    setActiveCategory(cat.name);
                    if (cat.hasDropdown) {
                      setMpDropdownOpen(!mpDropdownOpen);
                    } else {
                      setMenuOpen(false);
                    }
                  }}
                  className="text-left px-4 py-3.5 rounded-lg text-foreground hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 hover:text-white font-bold transition-all flex items-center gap-3 justify-between animate-slide-up w-full border-l-4 border-transparent hover:border-yellow-400"
                  style={{ animationDelay: `${i * 40}ms`, animationFillMode: "both" }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    {cat.name}
                  </span>
                  {cat.hasDropdown && (
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        mpDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Madhya Pradesh dropdown */}
                {cat.hasDropdown && mpDropdownOpen && (
                  <div className="ml-6 bg-gradient-to-b from-blue-50 to-primary/5 rounded-lg mt-2 max-h-96 overflow-y-auto border-l-4 border-primary">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {madhyaPradeshCities.map((city) => (
                        <button
                          key={city}
                          onClick={() => {
                            setActiveCategory(`मध्य प्रदेश - ${city}`);
                            setMpDropdownOpen(false);
                            setMenuOpen(false);
                          }}
                          className="text-left px-4 py-2.5 text-sm rounded-lg text-foreground hover:bg-primary hover:text-white transition-all transform hover:scale-105 font-medium border border-primary/20 hover:border-primary"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button className="w-full text-center px-5 py-3.5 mt-4 rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white font-bold transition-all flex items-center gap-2 justify-center hover:shadow-lg transform hover:scale-105 active:scale-95 shadow-md">
              <User size={20} />
              लॉगिन
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
