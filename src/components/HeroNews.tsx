import heroImg from "@/assets/hero-news.jpg";
import politicsImg from "@/assets/news-politics.jpg";
import { Clock, Eye, Share2 } from "lucide-react";

const HeroNews = () => {
  return (
    <section className="container mx-auto px-4 py-4 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main hero */}
        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl news-card-hover">
          <img src={heroImg} alt="Breaking news" className="w-full h-72 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-news-dark via-news-dark/40 to-transparent" />
          <div className="gradient-shine absolute inset-0 pointer-events-none" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 bg-accent rounded-full pulse-live" />
              LIVE
            </span>
            <span className="bg-news-dark/70 backdrop-blur-sm text-primary-foreground/80 px-2 py-1 rounded-full text-xs flex items-center gap-1">
              <Eye size={10} /> 12.5K
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
            <span className="text-accent text-xs font-bold tracking-wider mb-2 inline-block">TOP STORY</span>
            <h2 className="text-primary-foreground text-xl md:text-3xl font-black leading-tight mb-2 drop-shadow-lg">
              देश में नई शिक्षा नीति लागू: 10 बड़े बदलाव जो बदलेंगे शिक्षा का भविष्य
            </h2>
            <p className="text-primary-foreground/70 text-sm md:text-base line-clamp-2">
              केंद्र सरकार ने आज नई शिक्षा नीति को मंजूरी दी। इसमें स्कूली शिक्षा से लेकर उच्च शिक्षा तक कई बड़े बदलाव किए गए हैं।
            </p>
            <div className="flex items-center gap-4 mt-3">
              <span className="text-primary-foreground/50 text-xs flex items-center gap-1"><Clock size={10} /> 2 घंटे पहले</span>
              <span className="text-primary-foreground/50 text-xs">DG NEWS</span>
              <button className="text-primary-foreground/50 hover:text-accent transition-colors ml-auto">
                <Share2 size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Side stories */}
        <div className="flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer flex-1 shadow-lg news-card-hover">
            <img src={politicsImg} alt="Politics" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-news-dark/90 via-news-dark/30 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="bg-news-category text-primary-foreground px-2.5 py-0.5 rounded-full text-xs font-bold shadow-md">🏛️ POLITICS</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-primary-foreground text-sm font-bold leading-snug drop-shadow-md">
                संसद का बजट सत्र: विपक्ष ने सरकार पर साधा निशाना
              </h3>
              <span className="text-primary-foreground/50 text-xs mt-1 inline-block">3 घंटे पहले</span>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 flex-1 cursor-pointer news-card-hover group">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">🔥 TRENDING</span>
              <span className="text-muted-foreground text-xs">#1 Trending</span>
            </div>
            <h3 className="text-foreground font-bold text-sm leading-snug group-hover:text-primary transition-colors">
              पेट्रोल-डीजल के दामों में आज फिर बढ़ोतरी, जानें नए रेट
            </h3>
            <p className="text-muted-foreground text-xs mt-2 line-clamp-2">
              तेल कंपनियों ने आज सुबह नए दाम जारी किए। दिल्ली में पेट्रोल ₹105 प्रति लीटर...
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-muted-foreground text-xs flex items-center gap-1"><Clock size={10} /> 4 घंटे पहले</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Eye size={10} /> 8.2K</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNews;
