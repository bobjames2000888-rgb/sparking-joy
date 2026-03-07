import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ShieldCheck, Eye, Baby, FileCheck, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import framelessGlassIcon from "@/assets/frameless-glass.png";
import semiFramelessIcon from "@/assets/semi-frameless.png";
import aluminiumPoolFenceIcon from "@/assets/aluminium-pool-fence.png";
import steelTubularPoolFenceIcon from "@/assets/steel-tubular-pool-fence.png";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";
const PoolFencing = () => {
  useDocumentTitle("Pool Fencing Quotes — Get 3 Free Quotes in Minutes");
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const handleViewOptions = () => {
    scrollToSection("pool-materials");
  };
  const benefits = [{
    icon: ShieldCheck,
    title: "Safety Compliant",
    description: "Meets all Australian pool safety standards and council regulations"
  }, {
    icon: Eye,
    title: "Clear Visibility",
    description: "Maintain supervision of the pool area with unobstructed views"
  }, {
    icon: Baby,
    title: "Child Safe",
    description: "Self-closing, self-latching gates and non-climbable designs"
  }, {
    icon: FileCheck,
    title: "Certified Install",
    description: "Installation by licensed professionals with compliance certificates"
  }];
  const features = ["Compliant with AS 1926.1 pool fencing standards", "Self-closing and self-latching gate mechanisms", "Non-climbable design requirements met", "Glass, aluminium, and steel options", "Council inspection ready installations", "Compliance certificate provided"];
  const materials = [{
    name: "Frameless Glass",
    description: "Premium unobstructed views",
    icon: framelessGlassIcon
  }, {
    name: "Semi-Frameless",
    description: "Glass panels with posts",
    icon: semiFramelessIcon
  }, {
    name: "Aluminium",
    description: "Modern tubular or flat bar",
    icon: aluminiumPoolFenceIcon
  }, {
    name: "Steel Tubular",
    description: "Classic pool safe design",
    icon: steelTubularPoolFenceIcon
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
                <span className="text-sm font-medium text-primary">Safety Certified</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Pool<br />
                <span className="text-gradient">Fencing Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Keep your family safe with fully compliant pool fencing. 
                Beautiful designs that meet all Australian safety standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>
                  Get 3 Free Quotes in Minutes
                </Button>
                <Button variant="outline" size="lg" onClick={handleViewOptions}>
                  View Options
                </Button>
              </div>
              <div className="flex items-center space-x-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>AS 1926.1 Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Council Certified</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img src="/lovable-uploads/pool-fence-hero.webp" alt="Pool Fence Installation" className="w-full h-full object-cover" />
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
              Why Choose Our Pool Fencing Installers?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Safety, style, and compliance in every pool fencing installation
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
                Full Compliance
              </h2>
              <p className="text-muted-foreground mb-8">
                Pool fence installations need to meet Australian Standard AS 1926.1. 
                The Pool Fencing Contractors handle all compliance requirements and provide certification.
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
                <img src="/lovable-uploads/pool-fence-features.webp" alt="Pool Fencing Compliance" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="pool-materials" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pool Fencing Materials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from materials that suit your style and budget
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6 text-center">
                  <img src={material.icon} alt={material.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{material.name}</h3>
                  <p className="text-sm text-muted-foreground">{material.description}</p>
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
              Ready to Install Compliant Pool Fencing?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get free quotes today and protect your family with certified pool fencing
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
export default PoolFencing;