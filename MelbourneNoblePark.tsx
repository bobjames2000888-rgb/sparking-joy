import { useEffect } from "react";
import Header from "@/components/Header";
import NobleParkHeroSection from "@/components/noble-park/NobleParkHeroSection";
import NobleParkHowItWorks from "@/components/noble-park/NobleParkHowItWorks";
import NobleParkFenceTypes from "@/components/noble-park/NobleParkFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import NobleParkFAQSection from "@/components/noble-park/NobleParkFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneNoblePark = () => {
  useEffect(() => { document.title = "Noble Park Fencing Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <NobleParkHeroSection />
        <NobleParkHowItWorks />
        <div id="fence-types"><NobleParkFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><NobleParkFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneNoblePark;
