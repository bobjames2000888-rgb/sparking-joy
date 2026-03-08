import Header from "@/components/Header";
import SuburbHeroSection from "@/components/shared/SuburbHeroSection";
import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
import SuburbFenceTypes from "@/components/shared/SuburbFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import SuburbFAQSection from "@/components/shared/SuburbFAQSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbournePortsea = () => {
  useDocumentTitle("Portsea Fencing Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SuburbHeroSection suburbName="Portsea" />
        <SuburbHowItWorks suburbName="Portsea" />
        <div id="fence-types"><SuburbFenceTypes suburbName="Portsea" /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><SuburbFAQSection suburbName="Portsea" /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbournePortsea;
