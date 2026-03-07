import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link2, Lock, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import colorbondWhiteIcon from "@/assets/colorbond-white-icon.webp";
import timberWhiteIcon from "@/assets/timber-white-icon.webp";
import aluminiumWhiteIcon from "@/assets/aluminium-white-icon.webp";
import steelWhiteIcon from "@/assets/steel-white-icon.webp";
import featureWhiteIcon from "@/assets/feature-white-icon.webp";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

interface CarltonFenceTypesProps {
  onQuoteClick?: () => void;
}

const CarltonFenceTypes = ({ onQuoteClick }: CarltonFenceTypesProps) => {
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };

  const fenceTypes = [
    {
      id: "colorbond",
      name: "Colorbond Fencing",
      description: "Durable, weather-resistant steel fencing available in 15 colours. Perfect for Australian conditions.",
      features: ["10 year manufacturer warranty", "Termite resistant", "Low maintenance", "15 colour options"],
      price: "$75/metre",
      iconImage: colorbondWhiteIcon,
      popular: true,
      href: "/colorbond-fencing"
    },
    {
      id: "timber",
      name: "Timber Fencing",
      description: "Natural timber fencing that adds warmth and character to your property. Eco-friendly option.",
      features: ["Natural appearance", "Cost effective", "Easy to repair", "Customisable"],
      price: "$65/metre",
      iconImage: timberWhiteIcon,
      href: "/timber-fencing"
    },
    {
      id: "pool",
      name: "Pool Fencing",
      description: "Compliant pool fencing in glass, aluminium, or steel. Safety certified installations.",
      features: ["AS 1926.1 compliant", "Self-closing gates", "Clear visibility", "Council certified"],
      price: "$60/metre",
      icon: Waves,
      href: "/pool-fencing"
    },
    {
      id: "aluminium",
      name: "Aluminium Fencing",
      description: "Modern aluminium slats offering privacy and style. Lightweight yet strong construction.",
      features: ["Contemporary design", "Rust resistant", "Easy installation", "Various colours"],
      price: "$170/metre",
      iconImage: aluminiumWhiteIcon,
      href: "/aluminium-fencing"
    },
    {
      id: "chainlink",
      name: "Chain Link Fencing",
      description: "Economical and practical fencing solution for large areas. Quick installation.",
      features: ["Budget friendly", "Quick install", "Durable", "Low maintenance"],
      price: "$60/metre",
      icon: Link2,
      href: "/chain-link-fencing"
    },
    {
      id: "security",
      name: "Security Fencing",
      description: "High-security anti-climb fencing for commercial and industrial properties.",
      features: ["Anti-climb design", "Heavy duty", "CCTV compatible", "Visible deterrent"],
      price: "$180/metre",
      icon: Lock,
      href: "/security-fencing"
    },
    {
      id: "steel",
      name: "Steel Fencing",
      description: "Premium steel fencing with ultimate strength and longevity. Built to last decades.",
      features: ["Maximum strength", "Long lifespan", "Custom finishes", "Gate compatible"],
      price: "$120/metre",
      iconImage: steelWhiteIcon,
      href: "/steel-fencing"
    },
    {
      id: "feature",
      name: "Feature Fencing",
      description: "Custom decorative fencing with laser-cut panels and unique designs. Make a statement.",
      features: ["Custom designs", "Laser-cut panels", "Mixed materials", "Unique aesthetics"],
      price: "$130/metre",
      iconImage: featureWhiteIcon,
      href: "/feature-fencing"
    }
  ];

  return (
    <section id="fence-types" className="py-12 sm:py-20" style={{ backgroundColor: "hsl(215 40% 18%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Perfect Fence in Carlton
          </h2>
          <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
            Discover Carlton fencing options tailored to your needs, budget, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {fenceTypes.map((fence) => (
            <Card
              key={fence.id}
              className={`relative shadow-strong hover:shadow-accent transition-smooth group cursor-pointer ${fence.popular ? "border-accent ring-2 ring-accent/20" : ""}`}
            >
              {fence.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="accent-gradient text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                  {fence.iconImage ? (
                    <img src={fence.iconImage} alt={fence.name} className="w-8 h-8" />
                  ) : fence.icon ? (
                    <fence.icon className="w-8 h-8 text-white" />
                  ) : null}
                </div>
                <div className="text-muted-foreground text-sm font-normal text-center">Carlton</div>
                <CardTitle className="text-lg">{fence.name}</CardTitle>
                <div className="text-2xl font-bold text-accent">
                  <span className="text-muted-foreground text-sm font-normal mr-1">from</span>
                  {fence.price}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-center">{fence.description}</CardDescription>

                <div className="space-y-2">
                  {fence.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 accent-gradient rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant={fence.popular ? "hero" : "outline"} className="flex-1" onClick={handleQuoteClick}>
                    Get Quotes
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to={fence.href}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-gradient rounded-2xl p-8 shadow-soft border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Need Help Choosing?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert Carlton team can help you select the perfect fencing solution based on your specific needs, budget, and property requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href={QUOTE_URL}>Speak to an Expert</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarltonFenceTypes;
