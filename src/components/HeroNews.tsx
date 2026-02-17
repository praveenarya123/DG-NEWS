import heroImg from "@/assets/hero-news.jpg";
import politicsImg from "@/assets/news-politics.jpg";

const HeroNews = () => {
  return (
    <section className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main hero */}
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden group cursor-pointer">
          <img src={heroImg} alt="Breaking news" className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent rounded-full pulse-live" />
              LIVE
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <h2 className="text-primary-foreground text-xl md:text-2xl font-bold leading-tight mb-2">
              देश में नई शिक्षा नीति लागू: 10 बड़े बदलाव जो बदलेंगे शिक्षा का भविष्य
            </h2>
            <p className="text-primary-foreground/80 text-sm md:text-base line-clamp-2">
              केंद्र सरकार ने आज नई शिक्षा नीति को मंजूरी दी। इसमें स्कूली शिक्षा से लेकर उच्च शिक्षा तक कई बड़े बदलाव किए गए हैं।
            </p>
            <span className="text-muted-foreground text-xs mt-2 inline-block">2 घंटे पहले • DG NEWS</span>
          </div>
        </div>

        {/* Side stories */}
        <div className="flex flex-col gap-4">
          <div className="relative rounded-xl overflow-hidden group cursor-pointer flex-1">
            <img src={politicsImg} alt="Politics" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="bg-news-category text-primary-foreground px-2 py-0.5 rounded text-xs font-bold">POLITICS</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-primary-foreground text-sm font-bold leading-snug">
                संसद का बजट सत्र: विपक्ष ने सरकार पर साधा निशाना
              </h3>
            </div>
          </div>

          <div className="bg-card rounded-xl p-4 border border-border flex-1 cursor-pointer hover:shadow-lg transition-shadow">
            <span className="text-primary text-xs font-bold">TRENDING</span>
            <h3 className="text-foreground font-bold mt-1 text-sm leading-snug">
              पेट्रोल-डीजल के दामों में आज फिर बढ़ोतरी, जानें नए रेट
            </h3>
            <p className="text-muted-foreground text-xs mt-2 line-clamp-2">
              तेल कंपनियों ने आज सुबह नए दाम जारी किए। दिल्ली में पेट्रोल ₹105 प्रति लीटर...
            </p>
            <span className="text-muted-foreground text-xs mt-2 inline-block">4 घंटे पहले</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNews;
