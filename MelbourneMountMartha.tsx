import { useEffect } from "react";
import Header from "@/components/Header";
import MountMarthaHeroSection from "@/components/mount-martha/MountMarthaHeroSection";
import MountMarthaHowItWorks from "@/components/mount-martha/MountMarthaHowItWorks";
import MountMarthaFenceTypes from "@/components/mount-martha/MountMarthaFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import MountMarthaFAQSection from "@/components/mount-martha/MountMarthaFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneMountMartha = () => {
  useEffect(() => {
    document.title = "Mount Martha Fencing Quotes — Get 3 Free Quotes in Minutes";
  }, []);

  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <MountMarthaHeroSection />
        <MountMarthaHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types">
          <MountMarthaFenceTypes onQuoteClick={handleQuoteClick} />
        </div>
        <div id="reviews">
          <ReviewsSection />
        </div>
        <div id="faq">
          <MountMarthaFAQSection onQuoteClick={handleQuoteClick} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneMountMartha;
