import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";
const ChoosingFenceMaterialGuide = () => {
  const handleQuoteClick = () => {
    window.location.href = QUOTE_URL;
  };
  return <div className="min-h-screen bg-background">
      <Header onQuoteClick={handleQuoteClick} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Fencing Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Choosing the Right
              <br />
              <span className="text-gradient">Fence Material</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Compare timber, Colorbond®, aluminium, and glass fencing for Australian homes
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Choosing the right fence material is one of the most important decisions homeowners make when planning a new fence. The right choice depends on your priorities — such as privacy, budget, maintenance, appearance, and long‑term durability.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              In Australia, the four most common residential fencing materials are timber, Colorbond® steel, aluminium, and glass. Each has clear strengths and trade‑offs.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This guide explains how these materials compare in real‑world conditions, so you can confidently choose the fence that suits your home, lifestyle, and budget.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">At‑a‑Glance Fence Material Comparison</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Material</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Typical Lifespan*</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Maintenance</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Privacy</th>
                    <th className="border border-border px-4 py-3 text-left text-foreground font-semibold">Best Uses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Timber</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">~15–25 years (with upkeep)</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Medium–High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Budget privacy, traditional homes</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-3 text-muted-foreground">Colorbond®</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">~20–30+ years</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Low</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">High</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Side/rear boundaries, low‑maintenance homes</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Aluminium</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">~20–30+ years</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Very low</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Low–Medium</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Pool fences, front fences, coastal areas</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-3 text-muted-foreground">Glass</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">~20+ years</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Medium</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Low</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Pools, views, premium designs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mb-8 italic">
              *Typical residential ranges. Installation quality, climate, and maintenance all affect lifespan.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Timber Fencing</h2>
            <p className="text-muted-foreground mb-4">
              Timber fencing remains a popular choice for Australian homes, particularly where a natural, warm appearance is desired.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advantages of Timber Fencing</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Traditional and timeless look</li>
              <li>Often the lowest upfront cost for tall privacy fences</li>
              <li>Easy to customise (heights, lattice tops, decorative styles)</li>
              <li>Readily available materials</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Requires regular painting or staining</li>
              <li>Susceptible to warping, cracking, rot, and termites</li>
              <li>Ongoing maintenance is essential to reach its full lifespan</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Timber fencing suits homeowners who value appearance and affordability and are comfortable with ongoing upkeep. It's common for side and rear boundaries but can become a point of dispute if neighbouring fences weather unevenly.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Colorbond® Steel Fencing</h2>
            <p className="text-muted-foreground mb-4">
              Colorbond® fencing is one of the most popular modern fencing options in Australia due to its privacy, durability, and low maintenance.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advantages of Colorbond® Fencing</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Solid panels provide full privacy</li>
              <li>Very low maintenance — no painting or staining</li>
              <li>Resistant to rust, fading, and weather damage</li>
              <li>Non‑combustible, suitable for bushfire‑prone areas</li>
              <li>Long lifespan with manufacturer warranties</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Higher upfront cost than basic timber</li>
              <li>Less flexible for custom shapes or decorative designs</li>
              <li>Can feel industrial if colour choice doesn't suit the home</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Colorbond® fencing is ideal for homeowners who want a set‑and‑forget solution, especially for side and rear boundaries, rental properties, and harsh Australian conditions.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Aluminium Fencing</h2>
            <p className="text-muted-foreground mb-4">
              Aluminium fencing is lightweight, rust‑proof, and widely used for pool fencing and front boundary fences.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advantages of Aluminium Fencing</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Will not rust — ideal for coastal and humid areas</li>
              <li>Very low maintenance</li>
              <li>Modern, clean appearance</li>
              <li>Meets pool safety requirements when designed correctly</li>
              <li>Good airflow and visibility</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Offers less privacy than solid fencing</li>
              <li>Typically used in slat or tubular designs</li>
              <li>More expensive than basic timber</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Aluminium fencing is a practical choice where safety, durability, and appearance matter more than full privacy.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Glass Fencing</h2>
            <p className="text-muted-foreground mb-4">
              Glass fencing is considered a premium fencing option, most commonly used around pools, decks, and areas with views.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advantages of Glass Fencing</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Unobstructed views</li>
              <li>High‑end, architectural appearance</li>
              <li>Fully compliant with pool safety regulations</li>
              <li>Durable tempered safety glass</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Considerations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Highest installed cost of all fence materials</li>
              <li>Requires regular cleaning to maintain appearance</li>
              <li>Offers minimal privacy</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Glass fencing is best used selectively — typically around pools or view‑facing areas — and often paired with Colorbond® or timber fencing elsewhere.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">How to Choose the Right Fence for Your Home</h2>
            <p className="text-muted-foreground mb-4">When choosing a fence material, consider the following factors:</p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Choose Timber If:</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>You want a traditional or natural look</li>
              <li>Budget is your main concern</li>
              <li>You're comfortable with regular maintenance</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Choose Colorbond® If:</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>You want full privacy</li>
              <li>Low maintenance is a priority</li>
              <li>You want long‑term durability</li>
              <li>Your property is in a bushfire‑prone or harsh climate area</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Choose Aluminium If:</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>You need a pool‑compliant fence</li>
              <li>You live near the coast</li>
              <li>You want a modern, open design</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Choose Glass If:</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Preserving views is essential</li>
              <li>You want a premium finish</li>
              <li>The fence is mainly for a pool or feature area</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Many Australian homes use a combination of materials — for example, Colorbond® for boundaries and glass or aluminium around pools.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Final Advice for Homeowners</h2>
            <p className="text-muted-foreground mb-4">
              There's no single "best" fence material — only the best choice for your needs, location, and budget.
            </p>
            <p className="text-muted-foreground mb-4">Before deciding:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Consider your privacy and maintenance preferences</li>
              <li>Think about long‑term costs, not just upfront price</li>
              <li>Check local council and pool safety requirements</li>
              <li>Get professional advice for your specific property</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting the Right Fence Installed</h2>
            <p className="text-muted-foreground mb-4">
              QuoteMyFence helps homeowners compare local fencing professionals and explore different fencing materials with confidence.
            </p>
            <p className="text-muted-foreground mb-8">
              By understanding your options upfront, you can choose a fence that looks good, lasts longer, and suits your lifestyle — without costly surprises.
            </p>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">
                Always confirm material suitability and compliance with local council rules before installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-gradient rounded-2xl p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your Fence Quote?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Compare local fencing professionals and get free quotes in 60 seconds.
            </p>
            <Button variant="secondary" size="lg" onClick={handleQuoteClick}>
              Get 3 Free Quotes Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ChoosingFenceMaterialGuide;