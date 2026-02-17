import { Newspaper, Calendar, ArrowRight, Sparkles, Download } from "lucide-react";

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
      <div className="bg-gradient-to-br from-primary via-primary to-primary/70 rounded-3xl p-6 md:p-10 text-primary-foreground relative overflow-hidden shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <Newspaper size={22} className="text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black leading-none">DG NEWS E-Paper</h2>
                <p className="text-primary-foreground/60 text-xs flex items-center gap-1 mt-0.5"><Sparkles size={10} /> Daily Digital Edition</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-5 max-w-md">
              रोज़ाना का अखबार अब डिजिटल रूप में। अपने शहर का E-Paper पढ़ें — कभी भी, कहीं भी।
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {dates.map((d, i) => (
                <button
                  key={i}
                  className={`flex flex-col items-center px-3 py-2 rounded-xl text-xs font-medium transition-all hover-scale ${
                    i === 0
                      ? "bg-primary-foreground text-primary shadow-xl ring-2 ring-accent"
                      : "bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/10"
                  }`}
                >
                  {d.day && <span className="font-bold text-[10px]">{d.day}</span>}
                  <span>{d.date}</span>
                </button>
              ))}
            </div>

            <button className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-xl hover-scale group">
              <Calendar size={16} />
              आज का E-Paper पढ़ें
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <br></br>
             <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-green-900 transition-all duration-300 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
          </div>

          <div className="w-52 md:w-60 shrink-0">
            <div className="bg-primary-foreground rounded-2xl p-3 shadow-2xl animate-float">
              <div className="bg-muted rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center py-2 text-xs font-bold flex items-center justify-center gap-1">
                  <Newspaper size={10} />
                  DG NEWS — 17 फरवरी 2026
                </div>
                <div className="p-2.5 space-y-2">
                  <div className="h-2 bg-border rounded-full w-full" />
                  <div className="h-10 bg-gradient-to-r from-border to-border/50 rounded" />
                  <div className="h-2 bg-border rounded-full w-3/4" />
                  <div className="h-2 bg-border rounded-full w-5/6" />
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="h-12 bg-gradient-to-b from-border to-border/30 rounded" />
                    <div className="h-12 bg-gradient-to-b from-border to-border/30 rounded" />
                  </div>
                  <div className="h-2 bg-border rounded-full w-2/3" />
                  <div className="h-2 bg-border rounded-full" />
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
