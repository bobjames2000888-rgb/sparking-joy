import { useEffect } from "react";
import Header from "@/components/Header";
import SorrentoHeroSection from "@/components/sorrento/SorrentoHeroSection";
import SorrentoHowItWorks from "@/components/sorrento/SorrentoHowItWorks";
import SorrentoFenceTypes from "@/components/sorrento/SorrentoFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SorrentoFAQSection from "@/components/sorrento/SorrentoFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneSorrento = () => {
  useEffect(() => {
    document.title = "Sorrento Fencing Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SorrentoHeroSection />
        <SorrentoHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <SorrentoFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <SorrentoFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneSorrento;
