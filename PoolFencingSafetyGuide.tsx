import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";
const FenceOnlineQuoteGuide = () => {
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
              Fence Online
              <br />
              <span className="text-gradient">Quote Guide</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Understand how to get better fencing quotes online
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Getting fencing quotes online is fast and convenient — but the quality of the quote you receive depends heavily on the information you provide. Clear details lead to accurate pricing, fewer surprises, and smoother installation.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This guide explains how online fencing quote systems work, what information contractors actually need, and how homeowners can get more accurate, comparable, and reliable quotes using multi‑step forms and online tools.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Why Online Fence Quotes Vary So Much</h2>
            <p className="text-muted-foreground mb-4">
              Online quotes are estimates based on the details you submit. If information is missing or unclear, contractors must make assumptions — and assumptions often lead to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Price changes later</li>
              <li>Unexpected extras</li>
              <li>Delays or disputes</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              The goal is simple: help contractors understand your job properly from the start so they can price it correctly.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 1: Know What Information Contractors Need</h2>
            <p className="text-muted-foreground mb-4">
              Most online fencing quote forms — especially multi‑step forms — ask for similar core details.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Fence details</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Fence material (Colorbond®, timber, aluminium, glass, etc.)</li>
              <li>Fence style (privacy, slat, tubular, pool‑compliant)</li>
              <li>Fence height</li>
              <li>Total fence length</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Property & site details</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Property address (for access, soil type, and council rules)</li>
              <li>Whether the fence is on side, rear, or front boundaries</li>
              <li>Corner blocks or sloping land</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Extras & variations</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Number and type of gates</li>
              <li>Removal of existing fencing</li>
              <li>Retaining walls, sleepers, or plinths</li>
              <li>Driveway crossings or special access points</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              The more accurately you answer these questions, the closer your online quote will be to the final price.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 2: Measure Properly Before Filling Out the Form</h2>
            <p className="text-muted-foreground mb-4">
              Accurate measurements are one of the biggest factors in quote accuracy.
            </p>
            <p className="text-muted-foreground mb-4">Helpful tips:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Run a string line along the boundary to measure total length</li>
              <li>Use a simple site sketch or council plan</li>
              <li>Measure each section separately, including returns</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Avoid guessing. Even small errors can add up over long fence runs.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 3: Use Multi‑Step Quote Forms the Right Way</h2>
            <p className="text-muted-foreground mb-4">
              Modern fencing websites use multi‑step forms instead of a single short form. This isn't to slow you down — it's to gather better information.
            </p>
            <p className="text-muted-foreground mb-4">Each step usually focuses on:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Fence type and material</li>
              <li>Measurements and layout</li>
              <li>Property and access details</li>
              <li>Extras and special conditions</li>
              <li>Contact details</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Take your time with each step. Completing all sections thoroughly reduces follow‑up calls and re‑quoting.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 4: Upload Photos (This Makes a Huge Difference)</h2>
            <p className="text-muted-foreground mb-4">
              Uploading photos is one of the easiest ways to improve quote accuracy.
            </p>
            <p className="text-muted-foreground mb-4">Helpful photos include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Existing fence (if replacing)</li>
              <li>Slopes or uneven ground</li>
              <li>Tight access points</li>
              <li>Driveways, paths, or retaining walls</li>
              <li>Nearby structures (sheds, pools, air‑conditioning units)</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Photos help contractors spot potential issues early and price them correctly — reducing surprise variations later.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 5: Understand Online Fence Calculators</h2>
            <p className="text-muted-foreground mb-4">Many Australian fencing websites offer instant calculators that:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Let you trace your fence on a map</li>
              <li>Select material, height, and style</li>
              <li>Show an estimated cost per metre</li>
            </ul>
            <p className="text-muted-foreground mb-4">These tools are useful for budget planning, but they assume:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Flat ground</li>
              <li>Average soil conditions</li>
              <li>Standard installation</li>
              <li>No demolition or retaining work</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Treat calculator results as guides, not fixed quotes. Always explain site challenges in the comments section.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 6: What a Good Online Fence Quote Should Include</h2>
            <p className="text-muted-foreground mb-4">
              A quality fence quote should be clear and detailed — not a single vague price.
            </p>
            <p className="text-muted-foreground mb-4">Look for itemised details such as:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Fence material and brand</li>
              <li>Posts, rails, panels or boards</li>
              <li>Labour and installation</li>
              <li>Concrete footings</li>
              <li>Gate supply and hardware</li>
              <li>Old fence removal and disposal</li>
              <li>Site‑specific work (rock, slope, access)</li>
            </ul>
            <p className="text-muted-foreground mb-4">It should also clearly state:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Warranty on materials and workmanship</li>
              <li>Estimated start and finish dates</li>
              <li>Payment schedule</li>
              <li>How variations are handled if extra work is found</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 7: Get and Compare Multiple Quotes</h2>
            <p className="text-muted-foreground mb-4">
              Even when using online platforms, it's smart to get at least three quotes.
            </p>
            <p className="text-muted-foreground mb-4">When comparing quotes, don't just look at the price. Compare:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Material quality (brand vs generic)</li>
              <li>Fence height and thickness</li>
              <li>Gate quality and hardware</li>
              <li>Scope of work included</li>
              <li>Warranty terms</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              A slightly higher quote with clearer scope and better materials often provides better long‑term value.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 8: Common Online Quote Mistakes to Avoid</h2>
            <p className="text-muted-foreground mb-4">Homeowners often run into trouble by:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Underestimating fence length</li>
              <li>Forgetting gates or returns</li>
              <li>Not mentioning slope or obstacles</li>
              <li>Accepting vague one‑line quotes</li>
              <li>Paying deposits before confirming licences and insurance</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Avoid pressure tactics like "today only" pricing. A professional contractor will allow time for proper review.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Step 9: Questions to Ask Before Accepting a Quote</h2>
            <p className="text-muted-foreground mb-4">Before approving any fencing quote, ask:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>What exact materials and brands will be used?</li>
              <li>How long are materials and workmanship warrantied?</li>
              <li>Does the price include council or pool‑fence compliance if required?</li>
              <li>Who handles service locating and boundary checks?</li>
              <li>How are weather delays or variations managed?</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Always get the final scope and price in writing before paying a deposit.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Final Advice for Homeowners</h2>
            <p className="text-muted-foreground mb-4">
              Getting better fencing quotes online isn't about finding the cheapest price — it's about giving contractors enough information to price the job properly.
            </p>
            <p className="text-muted-foreground mb-4">Clear details, photos, and thoughtful comparisons lead to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>More accurate pricing</li>
              <li>Fewer surprises</li>
              <li>Better workmanship</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting Better Fence Quotes with QuoteMyFence</h2>
            <p className="text-muted-foreground mb-4">
              QuoteMyFence uses a guided, multi‑step quote process designed to capture the right details from the start.
            </p>
            <p className="text-muted-foreground mb-4">This helps homeowners:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Get clearer, more accurate quotes</li>
              <li>Compare local fencing professionals</li>
              <li>Choose the right fence with confidence</li>
            </ul>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">
                Take your time with online quote forms — the effort upfront can save you money, stress, and delays later.
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
export default FenceOnlineQuoteGuide;