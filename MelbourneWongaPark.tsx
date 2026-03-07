import Header from "@/components/Header";
import SuburbHeroSection from "@/components/shared/SuburbHeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneWongaPark = () => {
  useDocumentTitle("Wonga Park Fencing Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <SuburbHeroSection suburbName="Wonga Park" />
        <div id="reviews"><ReviewsSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneWongaPark;
