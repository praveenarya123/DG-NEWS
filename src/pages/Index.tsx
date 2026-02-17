import Header from "@/components/Header";
import BreakingTicker from "@/components/BreakingTicker";
import TrendingBar from "@/components/TrendingBar";
import HeroNews from "@/components/HeroNews";
import NewsGrid from "@/components/NewsGrid";
import EpaperSection from "@/components/EpaperSection";
import { Newspaper } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreakingTicker />
      <TrendingBar />
      <HeroNews />
      <NewsGrid />
      <EpaperSection />

      {/* Footer */}
      <footer className="bg-news-dark text-primary-foreground/70 mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Newspaper size={20} className="text-primary" />
              <span className="text-xl font-black text-primary-foreground">DG</span>
              <span className="text-xl font-black text-accent">NEWS</span>
            </div>
            <div className="flex flex-wrap gap-4 text-xs">
              <a href="#" className="hover:text-primary-foreground transition-colors">About Us</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Contact</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Advertise</a>
            </div>
            <p className="text-xs">© 2026 DG NEWS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
