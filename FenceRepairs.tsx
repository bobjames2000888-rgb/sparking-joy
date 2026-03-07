import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Sparkles, Paintbrush, Star, Home, Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import laserCutIcon from "@/assets/laser-cut.png";
import slatScreenIcon from "@/assets/slat-screen.png";
import mixedMaterialsIcon from "@/assets/mixed-materials.png";
import architecturalIcon from "@/assets/architectural.png";
const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";
const FeatureFencing = () => {
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  const handleViewDesigns = () => {
    scrollToSection("fencing-styles");
  };
  const benefits = [{
    icon: Sparkles,
    title: "Unique Designs",
    description: "Stand out with custom decorative patterns and artistic fence designs"
  }, {
    icon: Paintbrush,
    title: "Custom Finishes",
    description: "Choose from a wide range of colours, textures, and decorative elements"
  }, {
    icon: Star,
    title: "Premium Materials",
    description: "High-quality materials ensure durability with exceptional aesthetics"
  }, {
    icon: Home,
    title: "Property Value",
    description: "Enhance curb appeal and increase your property's market value"
  }];
  const features = ["Custom laser-cut decorative panels", "Combination of materials (steel, timber, glass)", "Architectural-grade finishes", "LED lighting integration available", "Powder-coated in any custom colour"];
  const styles = [{
    name: "Laser Cut",
    description: "Intricate patterns cut from steel",
    icon: laserCutIcon
  }, {
    name: "Slat & Screen",
    description: "Modern horizontal aesthetics",
    icon: slatScreenIcon
  }, {
    name: "Mixed Materials",
    description: "Timber, steel & glass combos",
    icon: mixedMaterialsIcon
  }, {
    name: "Architectural",
    description: "Designer statement pieces",
    icon: architecturalIcon
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
                <span className="text-sm font-medium text-primary">Statement Pieces</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Feature<br />
                <span className="text-gradient">Fencing Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Make a statement with custom feature fencing. 
                Unique designs that transform your property into a work of art.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="quote" size="lg" onClick={handleQuoteClick}>
                  Get 3 Free Quotes in Minutes
                </Button>
                <Button variant="outline" size="lg" onClick={handleViewDesigns}>
                  View Designs
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img src="/lovable-uploads/feature-fence-hero-2.webp" alt="Feature Fence Installation" className="w-full h-full object-cover" />
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
              Why Choose Feature Fencing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create a unique statement piece that reflects your personal style
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
                Endless Design Possibilities
              </h2>
              <p className="text-muted-foreground mb-8">
                The feature fencing options are limited only by your imagination. 
                Work with our fencing contractors to create something truly extraordinary.
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
                <img src="/lovable-uploads/feature-fence-designs.webp" alt="Feature Fencing Designs" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles Section */}
      <section id="fencing-styles" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Feature Fencing Styles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From laser-cut panels to mixed material designs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style, index) => <Card key={index} className="hover-scale border-border/50">
                <CardContent className="p-6 text-center">
                  <img src={style.icon} alt={style.name} className="w-36 h-36 mx-auto mb-4 object-contain select-none" draggable="false" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{style.name}</h3>
                  <p className="text-sm text-muted-foreground">{style.description}</p>
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
              Ready to Create Your Feature Fence?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and quotes for your custom feature fencing project
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
export default FeatureFencing;