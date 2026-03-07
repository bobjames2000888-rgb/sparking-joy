import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Trees, Palette, Leaf, Ruler, Award } from "lucide-react";
import treatedPineIcon from "@/assets/treated-pine-timber.webp";
import merbauIcon from "@/assets/merbau-timber.webp";
import spottedGumIcon from "@/assets/spotted-gum-timber.webp";
import cypressIcon from "@/assets/cypress-timber.webp";
import { scrollToSection } from "@/lib/scroll-utils";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";
const TimberFencing = () => {
  useDocumentTitle("Timber Fencing Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const handleViewTimberTypes = () => {
    scrollToSection("timber-types");
  };
  const benefits = [{
    icon: Trees,
    title: "Natural Beauty",
    description: "Timeless aesthetic that complements any property style and landscape"
  }, {
    icon: Palette,
    title: "Fully Customisable",
    description: "Choose from various timber types, stains, and styles to match your vision"
  }, {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable and renewable material that's environmentally responsible"
  }, {
    icon: Ruler,
    title: "Versatile Designs",
    description: "From privacy screens to decorative pickets, endless design possibilities"
  }];
  const features = ["Treated pine and hardwood options", "Custom staining and painting services", "Paling, picket, and lattice styles available", "Termite-resistant timber treatments", "Professional installation"];
  const timberTypes = [{
    name: "Treated Pine",
    description: "Cost-effective and durable",
    icon: treatedPineIcon
  }, {
    name: "Merbau",
    description: "Rich red tones, naturally durable",
    icon: merbauIcon
  }, {
    name: "Spotted Gum",
    description: "Australian hardwood classic",
    icon: spottedGumIcon
  }, {
    name: "Cypress",
    description: "Naturally termite resistant",
    icon: cypressIcon
  }];
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Natural & Timeless</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Timber
Fencing Solutions<br />
                <span className="text-gradient"></span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">Experience the natural warmth and classic beauty of timber fencing. Expertly crafted using Australian hardwoods and treated pine.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>
                  Get 3 Free Quotes in Minutes
                </Button>
                <Button variant="outline" size="lg" onClick={handleViewTimberTypes}>
                  View Timber Types
                </Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Australian Timber</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img src="/lovable-uploads/timber-fence-hero.webp" alt="Timber Fence Installation" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Timber Fencing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Classic beauty meets modern durability with Australian timber fencing solutions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Australian Quality & Expert Installation</h2>
              <p className="text-muted-foreground mb-8">
                Every timber fence our verified contractors install are built to last, using local materials and expert installation techniques that ensure longevity and beauty.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>)}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
                <img alt="Timber Fencing Features" className="w-full h-full object-cover" src="/lovable-uploads/4d010175-bbb4-455d-8657-91465e4c67e0.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timber Types Section */}
      <section id="timber-types" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Timber Type
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Select from Australian timbers, each with unique characteristics</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timberTypes.map((timber, index) => <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6 text-center">
                  <img src={timber.icon} alt={timber.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{timber.name}</h3>
                  <p className="text-sm text-muted-foreground">{timber.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Install Your Timber Fence?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Get free quotes today and discover the natural beauty of Australian timber fencing</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={handleQuoteClick}>
                Get 3 Free Quotes Now
              </Button>
              <a href="tel:0481752344" aria-label="Call 0481 752 344">
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  Call 0481 752 344
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default TimberFencing;