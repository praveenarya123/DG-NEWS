import { TrendingUp } from "lucide-react";

const topics = [
  "बजट 2026", "IPL", "मौसम अपडेट", "शेयर बाजार", "नई शिक्षा नीति",
  "पेट्रोल दाम", "Bollywood", "Tech News"
];

const TrendingBar = () => {
  return (
    <section className="container mx-auto px-4 py-3">
      <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
        <span className="flex items-center gap-1 text-primary font-bold text-sm whitespace-nowrap shrink-0">
          <TrendingUp size={16} />
          Trending
        </span>
        {topics.map((t, i) => (
          <button
            key={i}
            className="whitespace-nowrap bg-card border border-border text-foreground text-xs font-medium px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
          >
            #{t}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TrendingBar;
