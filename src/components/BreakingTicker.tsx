import { Flame } from "lucide-react";

const headlines = [
  "बड़ी खबर: सरकार ने नई शिक्षा नीति की घोषणा की",
  "IPL 2026: चेन्नई ने मुंबई को 5 विकेट से हराया",
  "शेयर बाजार में तेजी, सेंसेक्स 500 अंक ऊपर",
  "दिल्ली में भारी बारिश, कई इलाकों में जलभराव",
  "PM ने किसानों के लिए नई योजना का ऐलान किया",
  "बॉलीवुड: सलमान खान की नई फिल्म का ट्रेलर रिलीज",
];

const BreakingTicker = () => {
  return (
    <div className="bg-news-dark overflow-hidden shadow-inner">
      <div className="container mx-auto flex items-center">
        <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2.5 text-sm font-bold whitespace-nowrap flex items-center gap-2 shrink-0 shadow-lg relative">
          <Flame size={14} className="text-accent" />
          <span className="tracking-wider">BREAKING</span>
          <span className="w-2 h-2 bg-accent rounded-full pulse-live" />
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-r from-primary/80 to-news-dark z-10" />
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-animate whitespace-nowrap py-2.5 px-4">
            {[...headlines, ...headlines].map((h, i) => (
              <span key={i} className="text-primary-foreground/90 text-sm mx-6 inline-block hover:text-accent transition-colors cursor-pointer">
                {h}
                <span className="text-primary mx-4 text-xs">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingTicker;
