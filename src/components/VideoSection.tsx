import { Play, Clock, Eye } from "lucide-react";
import sportsImg from "@/assets/news-sports.jpg";
import heroImg from "@/assets/hero-news.jpg";
import entertainmentImg from "@/assets/news-entertainment.jpg";
import businessImg from "@/assets/news-business.jpg";
import politicsImg from "@/assets/news-politics.jpg";

interface VideoItem {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  time: string;
  category: string;
  live?: boolean;
}

const videos: VideoItem[] = [
  { id: 1, title: "देखिए आज की सबसे बड़ी खबर — PM का बड़ा ऐलान", thumbnail: heroImg, duration: "12:45", views: "45K", time: "1 घंटे पहले", category: "TOP NEWS", live: true },
  { id: 2, title: "IPL 2026: CSK vs MI — मैच के बेस्ट मोमेंट्स", thumbnail: sportsImg, duration: "08:30", views: "120K", time: "2 घंटे पहले", category: "SPORTS" },
  { id: 3, title: "बॉलीवुड की टॉप 5 अपकमिंग फिल्में — 2026", thumbnail: entertainmentImg, duration: "15:20", views: "89K", time: "3 घंटे पहले", category: "ENTERTAINMENT" },
  { id: 4, title: "शेयर बाजार: आज कहाँ करें निवेश? एक्सपर्ट की राय", thumbnail: businessImg, duration: "10:15", views: "32K", time: "4 घंटे पहले", category: "BUSINESS" },
  { id: 5, title: "बजट 2026 का पूरा विश्लेषण — क्या सस्ता, क्या महंगा", thumbnail: politicsImg, duration: "20:00", views: "67K", time: "5 घंटे पहले", category: "POLITICS" },
];

const VideoSection = () => {
  const featured = videos[0];
  const rest = videos.slice(1);

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-black text-foreground flex items-center gap-2">
          <span className="w-1.5 h-7 bg-gradient-to-b from-primary to-primary/50 rounded-full inline-block" />
          🎥 वीडियो न्यूज़
        </h2>
        <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1 hover-scale">
          सभी वीडियो →
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Featured video */}
        <div className="lg:col-span-3 relative rounded-2xl overflow-hidden group cursor-pointer shadow-xl news-card-hover">
          <img src={featured.thumbnail} alt={featured.title} className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-news-dark via-news-dark/40 to-news-dark/10" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="video-play-btn group-hover:scale-125">
              <Play size={24} className="text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Live badge */}
          {featured.live && (
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 bg-accent rounded-full pulse-live" />
                LIVE
              </span>
            </div>
          )}

          {/* Duration */}
          <div className="absolute top-4 right-4">
            <span className="bg-news-dark/80 backdrop-blur-sm text-primary-foreground px-2 py-1 rounded text-xs font-mono">
              {featured.duration}
            </span>
          </div>

          {/* Info */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="text-accent text-xs font-bold tracking-wider mb-1 inline-block">{featured.category}</span>
            <h3 className="text-primary-foreground text-lg md:text-xl font-black leading-tight drop-shadow-lg">
              {featured.title}
            </h3>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-primary-foreground/50 text-xs flex items-center gap-1"><Eye size={10} /> {featured.views} views</span>
              <span className="text-primary-foreground/50 text-xs flex items-center gap-1"><Clock size={10} /> {featured.time}</span>
            </div>
          </div>
        </div>

        {/* Video list */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {rest.map((video, i) => (
            <div
              key={video.id}
              className="flex gap-3 bg-card rounded-xl overflow-hidden border border-border news-card-hover cursor-pointer group p-2 animate-slide-up"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className="relative w-32 h-20 shrink-0 rounded-lg overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-news-dark/30 group-hover:bg-news-dark/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary/80 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors shadow-md">
                    <Play size={12} className="text-primary-foreground ml-0.5" fill="currentColor" />
                  </div>
                </div>
                <span className="absolute bottom-1 right-1 bg-news-dark/80 text-primary-foreground px-1.5 py-0.5 rounded text-[10px] font-mono">
                  {video.duration}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-center min-w-0">
                <span className="text-primary text-[10px] font-bold tracking-wider">{video.category}</span>
                <h4 className="text-foreground font-bold text-xs leading-snug line-clamp-2 group-hover:text-primary transition-colors mt-0.5">
                  {video.title}
                </h4>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-muted-foreground text-[10px] flex items-center gap-0.5"><Eye size={8} /> {video.views}</span>
                  <span className="text-muted-foreground text-[10px] flex items-center gap-0.5"><Clock size={8} /> {video.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
