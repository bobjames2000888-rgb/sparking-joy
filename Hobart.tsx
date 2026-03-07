import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Eye, Wind, Sparkles, Shield, Award } from "lucide-react";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const GlassFencing = () => {
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  const benefits = [
    {
      icon: Eye,
      title: "Unobstructed Views",
      description: "Crystal-clear panoramic views that don't compromise your scenery"
    },
    {
      icon: Wind,
      title: "Wind Protection",
      description: "Creates a comfortable outdoor space while maintaining air flow"
    },
    {
      icon: Sparkles,
      title: "Modern Elegance",
      description: "Sophisticated glass finish that adds luxury to any property"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Toughened safety glass meeting all Australian safety standards"
    }
  ];

  const features = [
    "12mm toughened safety glass",
    "Frameless and semi-frameless options",
    "Pool-safe certified installations",
    "316 marine-grade stainless steel spigots",
    "Easy-clean nano coating available",
    "10-year warranty on glass and hardware"
  ];

  const options = [
    { name: "Frameless Pool", description: "Seamless glass panels" },
    { name: "Semi-Frameless", description: "Modern with top rail" },
    { name: "Balustrade", description: "Balcony & deck solutions" },
    { name: "Privacy Screen", description: "Frosted glass options" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Luxury & Sophistication</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Stunning Glass<br />
                <span className="text-gradient">Fencing Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your outdoor space with elegant frameless glass fencing. 
                Maximize views while maintaining safety and style for pools, balconies, and patios.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>
                  Get Free Quote
                </Button>
                <Button variant="outline" size="lg">
                  View Options
                </Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Safety Glass</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Pool Certified</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img src="/lovable-uploads/955ee7f3-f949-41dd-bf06-5a1418ae50b3.webp" alt="Glass Fence Installation" className="w-full h-full object-cover" />
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
              Why Choose Glass Fencing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The ultimate in modern luxury fencing - where safety meets stunning aesthetics
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 accent-gradient rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Premium Safety & Quality Standards
              </h2>
              <p className="text-muted-foreground mb-8">
                Every glass fence we install uses premium toughened safety glass and 
                marine-grade hardware, ensuring maximum safety and longevity.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 accent-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
                <img src="/lovable-uploads/a1d4ad87-8be5-436a-83c5-e8c44ba8bf04.webp" alt="Glass Fencing Features" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Glass Fencing Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect glass fencing solution for your space
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {options.map((option, index) => (
              <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6 text-center">
                  <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{option.name}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Install Your Glass Fence?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get a free quote today and elevate your space with stunning glass fencing
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={handleQuoteClick}
              >
                Get Free Quote Now
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Call 0400 000 000
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlassFencing;
