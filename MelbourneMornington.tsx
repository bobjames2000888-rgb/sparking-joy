import { useEffect } from "react";
import Header from "@/components/Header";
import MooroolbarkHeroSection from "@/components/mooroolbark/MooroolbarkHeroSection";
import MooroolbarkHowItWorks from "@/components/mooroolbark/MooroolbarkHowItWorks";
import MooroolbarkFenceTypes from "@/components/mooroolbark/MooroolbarkFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import MooroolbarkFAQSection from "@/components/mooroolbark/MooroolbarkFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneMooroolbark = () => {
  useEffect(() => { document.title = "Mooroolbark Fencing Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <MooroolbarkHeroSection />
        <MooroolbarkHowItWorks />
        <div id="fence-types"><MooroolbarkFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><MooroolbarkFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneMooroolbark;
