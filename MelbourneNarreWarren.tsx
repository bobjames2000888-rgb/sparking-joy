import { useEffect } from "react";
import Header from "@/components/Header";
import NarreWarrenHeroSection from "@/components/narre-warren/NarreWarrenHeroSection";
import NarreWarrenHowItWorks from "@/components/narre-warren/NarreWarrenHowItWorks";
import NarreWarrenFenceTypes from "@/components/narre-warren/NarreWarrenFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import NarreWarrenFAQSection from "@/components/narre-warren/NarreWarrenFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneNarreWarren = () => {
  useEffect(() => {
    document.title = "Narre Warren Fencing Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <NarreWarrenHeroSection />
        <NarreWarrenHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <NarreWarrenFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <NarreWarrenFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneNarreWarren;
