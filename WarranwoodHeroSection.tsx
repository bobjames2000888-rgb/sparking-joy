import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Shield, CheckCircle2 } from "lucide-react";
const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

const WantirnaHeroSection = () => {
  const handleQuoteClick = () => { window.location.href = QUOTE_URL; };
  return (
    <section className="relative bg-gradient-to-br from-accent/30 via-accent/20 to-background pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium"><Star className="w-4 h-4 mr-2 text-yellow-500 fill-yellow-500" />Trusted by 500+ Wantirna Homeowners</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">Professional Fencing in <span className="text-primary">Wantirna</span></h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Get 3 free quotes from verified local fencing contractors in Wantirna. Compare prices, read reviews, and choose the best fencer for your property.</p>
          <Button size="lg" onClick={handleQuoteClick} className="text-lg px-8 py-6 mb-8 shadow-lg hover:shadow-xl transition-all">Get 3 Free Quotes Now</Button>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /><span>Quotes in 24 hours</span></div>
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /><span>Verified contractors</span></div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /><span>100% free service</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WantirnaHeroSection;
