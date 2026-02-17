import { TrendingUp, Flame } from "lucide-react";

const topics = [
  { tag: "बजट 2026", hot: true },
  { tag: "IPL", hot: true },
  { tag: "मौसम अपडेट", hot: false },
  { tag: "शेयर बाजार", hot: false },
  { tag: "नई शिक्षा नीति", hot: true },
  { tag: "पेट्रोल दाम", hot: false },
  { tag: "Bollywood", hot: false },
  { tag: "Tech News", hot: false },
];

const TrendingBar = () => {
  return (
    <section className="container mx-auto px-4 py-3">
      <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
        <span className="flex items-center gap-1.5 text-primary font-bold text-sm whitespace-nowrap shrink-0 bg-primary/10 px-3 py-1.5 rounded-full">
          <TrendingUp size={14} />
          Trending
        </span>
        {topics.map((t, i) => (
          <button
            key={i}
            className="whitespace-nowrap bg-card border border-border text-foreground text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover-scale flex items-center gap-1 shadow-sm"
          >
            {t.hot && <Flame size={10} className="text-accent" />}
            #{t.tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TrendingBar;
