import Header from "@/components/Header";
import BreakingTicker from "@/components/BreakingTicker";
import TrendingBar from "@/components/TrendingBar";
import HeroNews from "@/components/HeroNews";
import NewsGrid from "@/components/NewsGrid";
import VideoSection from "@/components/VideoSection";
import EpaperSection from "@/components/EpaperSection";
import { Newspaper, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreakingTicker />
      <TrendingBar />
      <HeroNews />
      <VideoSection />
      <NewsGrid />
      <EpaperSection />

      {/* Footer */}
      <footer className="bg-news-dark mt-8">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-black text-xs">DG</span>
                </div>
                <span className="text-xl font-black text-primary-foreground">DG <span className="text-accent">NEWS</span></span>
              </div>
              <p className="text-primary-foreground/40 text-xs leading-relaxed">
                India's most trusted Hindi news platform. Get breaking news, latest updates, and in-depth analysis.
              </p>
            </div>
            <div>
              <h4 className="text-primary-foreground font-bold text-sm mb-3">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {["होम", "ताज़ा खबर", "Sports", "Entertainment", "Business", "E-Paper"].map(link => (
                  <a key={link} href="#" className="text-primary-foreground/40 text-xs hover:text-accent transition-colors">{link}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-primary-foreground font-bold text-sm mb-3">Connect</h4>
              <div className="flex flex-col gap-2">
                {["About Us", "Contact", "Privacy Policy", "Terms of Service", "Advertise"].map(link => (
                  <a key={link} href="#" className="text-primary-foreground/40 text-xs hover:text-accent transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-primary-foreground/30 text-xs">© 2026 DG NEWS. All rights reserved.</p>
            <p className="text-primary-foreground/30 text-xs flex items-center gap-1">Made with <Heart size={10} className="text-primary" /> in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
