import { useEffect } from "react";
import Header from "@/components/Header";
import JunctionVillageHeroSection from "@/components/junction-village/JunctionVillageHeroSection";
import JunctionVillageHowItWorks from "@/components/junction-village/JunctionVillageHowItWorks";
import JunctionVillageFenceTypes from "@/components/junction-village/JunctionVillageFenceTypes";
import ReviewsSection from "@/components/ReviewsSection";
import JunctionVillageFAQSection from "@/components/junction-village/JunctionVillageFAQSection";
import Footer from "@/components/Footer";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const MelbourneJunctionVillage = () => {
  useEffect(() => { document.title = "Junction Village Fencing Quotes — Get 3 Free Quotes in Minutes"; }, []);
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      <main>
        <JunctionVillageHeroSection />
        <JunctionVillageHowItWorks onQuoteClick={handleQuoteClick} />
        <div id="fence-types"><JunctionVillageFenceTypes /></div>
        <div id="reviews"><ReviewsSection /></div>
        <div id="faq"><JunctionVillageFAQSection /></div>
      </main>
      <Footer />
    </div>
  );
};

export default MelbourneJunctionVillage;
