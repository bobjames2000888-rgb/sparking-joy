import { useEffect } from "react";
import Header from "@/components/Header";
import ToorakHeroSection from "@/components/toorak/ToorakHeroSection";
import ToorakHowItWorks from "@/components/toorak/ToorakHowItWorks";
import ToorakFenceTypes from "@/components/toorak/ToorakFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import ToorakFAQSection from "@/components/toorak/ToorakFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneToorak = () => {
  useEffect(() => {
    document.title = "Toorak Fencing Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <ToorakHeroSection />
        <ToorakHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <ToorakFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <ToorakFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneToorak;
