import Header from "@/components/Header";
import SyndalHeroSection from "@/components/syndal/SyndalHeroSection";
import SyndalHowItWorks from "@/components/syndal/SyndalHowItWorks";
import SyndalFenceTypes from "@/components/syndal/SyndalFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SyndalFAQSection from "@/components/syndal/SyndalFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneSyndal = () => {
  useDocumentTitle("Syndal Fencing Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SyndalHeroSection />
        <SyndalHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types"><SyndalFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><SyndalFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneSyndal;
