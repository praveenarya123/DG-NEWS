import { Newspaper, Calendar, ArrowRight } from "lucide-react";

const dates = [
  { day: "आज", date: "17 फरवरी" },
  { day: "कल", date: "16 फरवरी" },
  { day: "परसों", date: "15 फरवरी" },
  { day: "", date: "14 फरवरी" },
  { day: "", date: "13 फरवरी" },
];

const EpaperSection = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 md:p-8 text-primary-foreground">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Newspaper size={28} />
              <h2 className="text-2xl font-black">DG NEWS E-Paper</h2>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              रोज़ाना का अखबार अब डिजिटल रूप में। अपने शहर का E-Paper पढ़ें।
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {dates.map((d, i) => (
                <button
                  key={i}
                  className={`flex flex-col items-center px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    i === 0
                      ? "bg-primary-foreground text-primary shadow-lg"
                      : "bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground"
                  }`}
                >
                  {d.day && <span className="font-bold">{d.day}</span>}
                  <span>{d.date}</span>
                </button>
              ))}
            </div>

            <button className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-bold text-sm hover:brightness-110 transition-all shadow-lg">
              <Calendar size={16} />
              आज का E-Paper पढ़ें
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="w-48 md:w-56 shrink-0">
            <div className="bg-primary-foreground rounded-lg p-3 shadow-2xl rotate-2 hover:rotate-0 transition-transform">
              <div className="bg-muted rounded overflow-hidden">
                <div className="bg-primary text-primary-foreground text-center py-1.5 text-xs font-bold">
                  DG NEWS — 17 फरवरी 2026
                </div>
                <div className="p-2 space-y-1.5">
                  <div className="h-2 bg-border rounded w-full" />
                  <div className="h-8 bg-border rounded" />
                  <div className="h-2 bg-border rounded w-3/4" />
                  <div className="h-2 bg-border rounded w-5/6" />
                  <div className="grid grid-cols-2 gap-1.5 mt-2">
                    <div className="h-10 bg-border rounded" />
                    <div className="h-10 bg-border rounded" />
                  </div>
                  <div className="h-2 bg-border rounded w-2/3" />
                  <div className="h-2 bg-border rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpaperSection;
