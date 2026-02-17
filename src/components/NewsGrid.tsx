import sportsImg from "@/assets/news-sports.jpg";
import businessImg from "@/assets/news-business.jpg";
import entertainmentImg from "@/assets/news-entertainment.jpg";
import politicsImg from "@/assets/news-politics.jpg";

interface NewsCard {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
  categoryColor: string;
  time: string;
}

const newsItems: NewsCard[] = [
  { id: 1, title: "IPL 2026: चेन्नई सुपर किंग्स ने लगाई जीत की हैट्रिक", summary: "धोनी की कप्तानी में CSK ने शानदार प्रदर्शन करते हुए मुंबई इंडियंस को 5 विकेट से हराया।", image: sportsImg, category: "SPORTS", categoryColor: "bg-news-sports", time: "1 घंटे पहले" },
  { id: 2, title: "शेयर बाजार में उछाल: सेंसेक्स ने छुआ नया रिकॉर्ड", summary: "BSE सेंसेक्स आज 500 अंकों की तेजी के साथ 82,000 के पार बंद हुआ।", image: businessImg, category: "BUSINESS", categoryColor: "bg-news-category", time: "3 घंटे पहले" },
  { id: 3, title: "बॉलीवुड: सलमान खान की 'टाइगर 4' का ट्रेलर रिलीज", summary: "फिल्म ईद 2026 पर रिलीज होगी। ट्रेलर में जबरदस्त एक्शन सीन्स देखने को मिले।", image: entertainmentImg, category: "ENTERTAINMENT", categoryColor: "bg-news-entertainment", time: "5 घंटे पहले" },
  { id: 4, title: "किसानों के लिए बड़ी खबर: MSP में 10% की बढ़ोतरी", summary: "केंद्र सरकार ने रबी फसलों के न्यूनतम समर्थन मूल्य में 10% की बढ़ोतरी की घोषणा की।", image: politicsImg, category: "INDIA", categoryColor: "bg-primary", time: "6 घंटे पहले" },
];

const NewsGrid = () => {
  return (
    <section className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full inline-block" />
          ताज़ा खबरें
        </h2>
        <button className="text-primary text-sm font-semibold hover:underline">और देखें →</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {newsItems.map((item) => (
          <article key={item.id} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <div className="relative overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className={`absolute top-2 left-2 ${item.categoryColor} text-primary-foreground px-2 py-0.5 rounded text-xs font-bold`}>
                {item.category}
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-foreground font-bold text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs mt-1.5 line-clamp-2">{item.summary}</p>
              <span className="text-muted-foreground text-xs mt-2 inline-block">{item.time}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsGrid;
