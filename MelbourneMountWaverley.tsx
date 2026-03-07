import { useEffect } from "react";
import Header from "@/components/Header";
import MountWaverleyHeroSection from "@/components/mount-waverley/MountWaverleyHeroSection";
import MountWaverleyHowItWorks from "@/components/mount-waverley/MountWaverleyHowItWorks";
import MountWaverleyFenceTypes from "@/components/mount-waverley/MountWaverleyFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import MountWaverleyFAQSection from "@/components/mount-waverley/MountWaverleyFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneMountWaverley = () => {
  useEffect(() => {
    document.title = "Mount Waverley Fencing Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <MountWaverleyHeroSection />
        <MountWaverleyHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <MountWaverleyFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <MountWaverleyFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneMountWaverley;
