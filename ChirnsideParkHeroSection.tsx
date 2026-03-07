import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ChirnsideParkFenceTypes = () => {
  const fenceTypes = [
    { title: "Chirnside Park Colorbond Fencing", description: "Australia's favourite steel fencing solution. Durable, low-maintenance, and available in 22 colours.", image: "/lovable-uploads/5dc8e99f-d31f-45a3-82b0-2cbaf923d400.webp", link: "/colorbond-fencing", features: ["22 Colours", "Steel Construction", "30 Year Warranty"] },
    { title: "Chirnside Park Timber Fencing", description: "Natural beauty and timeless appeal. Choose from hardwood or treated pine for a classic fence.", image: "/lovable-uploads/b398ce61-451a-430e-8e0c-bd29476ef2c4.webp", link: "/timber-fencing", features: ["Hardwood Options", "Natural Look", "Customisable"] },
    { title: "Chirnside Park Aluminium Fencing", description: "Sleek and modern aluminium fencing. Perfect for pool areas, gardens, and contemporary homes.", image: "/lovable-uploads/aluminium-fence-hero.webp", link: "/aluminium-fencing", features: ["Rust-Proof", "Low Maintenance", "Modern Design"] },
    { title: "Chirnside Park Glass Pool Fencing", description: "Frameless and semi-frameless glass pool fencing for unobstructed views.", image: "/lovable-uploads/pool-fence-hero.webp", link: "/pool-fencing", features: ["Safety Compliant", "Unobstructed Views", "Premium Look"] },
    { title: "Chirnside Park Security Fencing", description: "Heavy-duty security solutions for commercial and residential properties.", image: "/lovable-uploads/security-fence-hero.webp", link: "/security-fencing", features: ["High Security", "Durable", "Commercial Grade"] },
    { title: "Chirnside Park Steel Fencing", description: "Strong tubular and steel panel fencing for properties requiring durability.", image: "/lovable-uploads/steel-fence-hero.webp", link: "/steel-fencing", features: ["Heavy Duty", "Long Lasting", "Versatile"] },
    { title: "Chirnside Park Chain Link Fencing", description: "Cost-effective chain wire fencing for large properties and commercial applications.", image: "/lovable-uploads/chain-link-fence-hero.webp", link: "/chain-link-fencing", features: ["Affordable", "Quick Install", "Low Maintenance"] },
    { title: "Chirnside Park Gate Installation", description: "Complete gate solutions including sliding, swing, and automated gates.", image: "/lovable-uploads/gate-installation-hero-v2.webp", link: "/gate-installation", features: ["Automated Options", "Custom Designs", "All Materials"] },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fencing Options in Chirnside Park</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Explore our range of fencing solutions available from verified Chirnside Park contractors. All materials available in 15 colour options.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fenceTypes.map((fence, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={fence.image} alt={fence.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 select-none pointer-events-none" draggable="false" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{fence.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{fence.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {fence.features.map((feature, i) => (<span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">{feature}</span>))}
                </div>
                <Link to={fence.link}><Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">Learn More</Button></Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChirnsideParkFenceTypes;
