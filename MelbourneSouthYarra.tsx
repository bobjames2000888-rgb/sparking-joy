import { useEffect } from "react";
import Header from "@/components/Header";
import SouthYarraHeroSection from "@/components/south-yarra/SouthYarraHeroSection";
import SouthYarraHowItWorks from "@/components/south-yarra/SouthYarraHowItWorks";
import SouthYarraFenceTypes from "@/components/south-yarra/SouthYarraFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SouthYarraFAQSection from "@/components/south-yarra/SouthYarraFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneSouthYarra = () => {
  useEffect(() => {
    document.title = "South Yarra Fencing Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SouthYarraHeroSection />
        <SouthYarraHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <SouthYarraFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <SouthYarraFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneSouthYarra;
