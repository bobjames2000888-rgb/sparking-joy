import { useEffect } from "react";
import Header from "@/components/Header";
import LangwarrinHeroSection from "@/components/langwarrin/LangwarrinHeroSection";
import LangwarrinHowItWorks from "@/components/langwarrin/LangwarrinHowItWorks";
import LangwarrinFenceTypes from "@/components/langwarrin/LangwarrinFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import LangwarrinFAQSection from "@/components/langwarrin/LangwarrinFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneLangwarrin = () => {
  useEffect(() => {
    document.title = "Langwarrin Fencing Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <LangwarrinHeroSection />
        <LangwarrinHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <LangwarrinFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <LangwarrinFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneLangwarrin;
