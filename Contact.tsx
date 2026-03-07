import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Droplets, Sun, Wrench, Award, ChevronDown, ChevronUp } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";
const ColorbondFencing = () => {
  useDocumentTitle("Colorbond Fencing Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const handleViewColours = () => {
    scrollToSection("colour-range");
  };
  const benefits = [{
    icon: Shield,
    title: "Superior Durability",
    description: "Built to withstand harsh Australian conditions with a lifespan of 30+ years"
  }, {
    icon: Droplets,
    title: "Weather Resistant",
    description: "Resistant to rust, corrosion, and extreme weather conditions"
  }, {
    icon: Sun,
    title: "Heat Reflective",
    description: "Thermal efficiency with Thermatech® technology keeps your property cooler"
  }, {
    icon: Wrench,
    title: "Low Maintenance",
    description: "No painting or staining required - stays looking great for decades"
  }];
  const features = ["10-year manufacture warranty on all Colorbond installations", "Available in 15 modern colours", "Wind-tested to withstand Australian conditions", "Termite and fire resistant", "Environmentally friendly and recyclable", "Professional installation by verified tradies"];
  const [showAllColours, setShowAllColours] = useState(false);
  const initialColors = [{
    name: "Surfmist®",
    hex: "#E8E8E3"
  }, {
    name: "Shale Grey™",
    hex: "#B1ACA3"
  }, {
    name: "Bluegum®",
    hex: "#6B7B7B"
  }, {
    name: "Pale Eucalypt®",
    hex: "#6B7D6B"
  }, {
    name: "Domain®",
    hex: "#A19A8B"
  }, {
    name: "Evening Haze®",
    hex: "#C2B4A2"
  }, {
    name: "Basalt®",
    hex: "#525252"
  }, {
    name: "Wilderness®",
    hex: "#3C4537"
  }];
  const additionalColors = [{
    name: "Paperbark®",
    hex: "#968D7D"
  }, {
    name: "Dune®",
    hex: "#A99C8D"
  }, {
    name: "Ironstone®",
    hex: "#4D3C3A"
  }, {
    name: "Wollemi®",
    hex: "#5C5652"
  }, {
    name: "Riversand®",
    hex: "#8A7B6A"
  }, {
    name: "Woodland Grey®",
    hex: "#4F4943"
  }, {
    name: "Monument®",
    hex: "#282829"
  }];
  const displayedColors = showAllColours ? [...initialColors, ...additionalColors] : initialColors;
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
                <span className="text-sm font-medium text-primary">Australia's #1 Fencing Choice</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Colorbond
Fencing Solutions<br />
                
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Experience the strength, style, and durability of genuine Colorbond® steel fencing. 
                Trusted by Australian homeowners for over 50 years.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>
                  Get 3 Free Quotes in Minutes 
                </Button>
                <Button variant="outline" size="lg" onClick={handleViewColours}>
                  View Colour Range
                </Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Free Site Measure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>10 Year Manufacture Warranty </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img alt="Colorbond Fence Installation" className="w-full h-full object-cover" src="/lovable-uploads/2c13420a-34b3-45f3-910c-68c4788b8db6.webp" />
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
              Why Choose Colorbond Fencing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most trusted name in Australian fencing, engineered for our unique climate
            </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Premium Features & Australian Quality
              </h2>
              <p className="text-muted-foreground mb-8">
                Every Colorbond fence our verified contractors install come with premium features and professional installation. Our contractors use only genuine Bluescope Colorbond steel.
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
                <img alt="Colorbond Features" className="w-full h-full object-cover" src="/lovable-uploads/3979817f-ca6e-4cbd-9af9-358e5e477911.webp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Range Section */}
      <section id="colour-range" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Perfect Colour
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">15 beautiful colours to match your home's style and personality</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            {displayedColors.map((color, index) => <div key={index} className="text-center group cursor-pointer">
                <div className="aspect-square rounded-xl shadow-md hover-scale border-2 border-border/50 hover:border-primary transition-smooth mb-2" style={{
              backgroundColor: color.hex
            }}></div>
                <p className="text-xs font-medium text-foreground">{color.name}</p>
              </div>)}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" onClick={() => setShowAllColours(!showAllColours)} className="gap-2">
              {showAllColours ? <>Hide Colours <ChevronUp className="w-4 h-4" /></> : <>View Full Colour Chart <ChevronDown className="w-4 h-4" /></>}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Install Your Colorbond Fence?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get free quotes today and discover why thousands of Australians choose Colorbond fencing
            </p>
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
export default ColorbondFencing;