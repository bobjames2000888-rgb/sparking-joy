import { useEffect } from "react";
import Header from "@/components/Header";
import HeathmontHeroSection from "@/components/heathmont/HeathmontHeroSection";
import HeathmontHowItWorks from "@/components/heathmont/HeathmontHowItWorks";
import HeathmontFenceTypes from "@/components/heathmont/HeathmontFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import HeathmontFAQSection from "@/components/heathmont/HeathmontFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneHeathmont = () => {
  useEffect(() => { document.title = "Heathmont Fencing Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <HeathmontHeroSection />
        <HeathmontHowItWorks />
        <div id="fence-types"><HeathmontFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><HeathmontFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneHeathmont;
