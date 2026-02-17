import sportsImg from "@/assets/news-sports.jpg";
import businessImg from "@/assets/news-business.jpg";
import entertainmentImg from "@/assets/news-entertainment.jpg";
import politicsImg from "@/assets/news-politics.jpg";
import { Clock, MessageCircle, Share2 } from "lucide-react";

interface NewsCardData {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  categoryEmoji: string;
  categoryColor: string;
  time: string;
  comments: number;
}

const newsItems: NewsCardData[] = [
  { id: 1, title: "IPL 2026: चेन्नई सुपर किंग्स ने लगाई जीत की हैट्रिक", summary: "धोनी की कप्तानी में CSK ने शानदार प्रदर्शन करते हुए मुंबई इंडियंस को 5 विकेट से हराया।", image: sportsImg, category: "SPORTS", categoryEmoji: "🏏", categoryColor: "bg-news-sports", time: "1 घंटे पहले", comments: 234 },
  { id: 2, title: "शेयर बाजार में उछाल: सेंसेक्स ने छुआ नया रिकॉर्ड", summary: "BSE सेंसेक्स आज 500 अंकों की तेजी के साथ 82,000 के पार बंद हुआ।", image: businessImg, category: "BUSINESS", categoryEmoji: "📈", categoryColor: "bg-news-category", time: "3 घंटे पहले", comments: 89 },
  { id: 3, title: "बॉलीवुड: सलमान खान की 'टाइगर 4' का ट्रेलर रिलीज", summary: "फिल्म ईद 2026 पर रिलीज होगी। ट्रेलर में जबरदस्त एक्शन सीन्स देखने को मिले।", image: entertainmentImg, category: "ENTERTAINMENT", categoryEmoji: "🎬", categoryColor: "bg-news-entertainment", time: "5 घंटे पहले", comments: 567 },
  { id: 4, title: "किसानों के लिए बड़ी खबर: MSP में 10% की बढ़ोतरी", summary: "केंद्र सरकार ने रबी फसलों के न्यूनतम समर्थन मूल्य में 10% की बढ़ोतरी की घोषणा की।", image: politicsImg, category: "INDIA", categoryEmoji: "🇮🇳", categoryColor: "bg-primary", time: "6 घंटे पहले", comments: 342 },
];

const NewsGrid = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-black text-foreground flex items-center gap-2">
          <span className="w-1.5 h-7 bg-gradient-to-b from-primary to-accent rounded-full inline-block" />
          ताज़ा खबरें
        </h2>
        <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1 hover-scale">
          और देखें →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {newsItems.map((item, i) => (
          <article
            key={item.id}
            className="bg-card rounded-2xl overflow-hidden border border-border news-card-hover cursor-pointer group animate-slide-up"
            style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
          >
            <div className="relative overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-news-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className={`absolute top-2.5 left-2.5 ${item.categoryColor} text-primary-foreground px-2.5 py-0.5 rounded-full text-xs font-bold shadow-md`}>
                {item.categoryEmoji} {item.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-foreground font-bold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs mt-2 line-clamp-2">{item.summary}</p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                <span className="text-muted-foreground text-xs flex items-center gap-1"><Clock size={10} /> {item.time}</span>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground text-xs flex items-center gap-0.5"><MessageCircle size={10} /> {item.comments}</span>
                  <button className="text-muted-foreground hover:text-primary transition-colors"><Share2 size={12} /></button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;
