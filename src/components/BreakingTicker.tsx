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
    <div className="bg-news-dark overflow-hidden">
      <div className="container mx-auto flex items-center">
        <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-bold whitespace-nowrap flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 bg-accent rounded-full pulse-live" />
          BREAKING
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-animate whitespace-nowrap py-2 px-4">
            {[...headlines, ...headlines].map((h, i) => (
              <span key={i} className="text-primary-foreground text-sm mx-8 inline-block">
                {h}
                <span className="text-primary mx-4">●</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingTicker;
