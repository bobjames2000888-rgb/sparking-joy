import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, AlertTriangle } from "lucide-react";
const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";
const PoolFencingSafetyGuide = () => {
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
              Pool Fencing
              <br />
              <span className="text-gradient">Safety Guide</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Essential safety requirements for pool fencing in Australia
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-medium mb-2">Important Notice</p>
                  <p className="text-muted-foreground text-sm">
                    Pool safety laws are strictly enforced and vary by state. Always confirm requirements with your local council or state pool safety authority.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Pool fencing is one of the most important safety features in any Australian home with a swimming pool or spa. Every year, pool safety regulations are enforced to reduce the risk of drowning — particularly for young children.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              In Australia, it is illegal to have an unfenced pool or spa that can hold 300 mm or more of water unless it is protected by a compliant safety barrier. Most pool fencing rules are based on Australian Standard AS 1926.1, supported by state and territory legislation.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This guide explains the core pool fencing safety requirements, how compliance works, and what homeowners must do to keep their pool area safe and legal.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">The Legal Framework for Pool Fencing in Australia</h2>
            <p className="text-muted-foreground mb-4">Across Australia, pool fencing requirements are set through a combination of:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Australian Standard AS 1926.1 (2012, with 2024 updates being adopted)</li>
              <li>State and territory building legislation</li>
              <li>Local council approval and inspection systems</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Most states and territories reference AS 1926.1–2012, while newer versions are being progressively adopted. The ACT has confirmed that by 1 May 2028, all pools and spas must meet the current standard, regardless of when they were built.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">What Pools and Spas Must Be Fenced?</h2>
            <p className="text-muted-foreground mb-4">A compliant safety barrier is required for:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>In-ground swimming pools</li>
              <li>Above-ground pools</li>
              <li>Indoor pools</li>
              <li>Outdoor spas</li>
              <li>Portable or inflatable pools capable of holding 300 mm or more of water</li>
            </ul>
            <p className="text-muted-foreground mb-8 font-medium">
              If it can hold enough water for a child to drown, it must be fenced.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Minimum Pool Fence Height, Gaps & Climbability</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Fence Height</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Minimum height: 1.2 metres measured from finished ground level</li>
              <li>No point along the barrier may be lower than 1.2 m</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Gaps & Openings</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Maximum gap under the fence: 100 mm</li>
              <li>Maximum spacing between vertical members: 100 mm</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              These limits are designed to prevent a small child from crawling through or squeezing between panels.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Non-Climbable Zones (NCZ)</h2>
            <p className="text-muted-foreground mb-4">
              A critical part of pool safety is the non-climbable zone (NCZ).
            </p>
            <p className="text-muted-foreground mb-4">Key requirements:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>A 900 mm non-climbable zone must be maintained around the outside of the barrier</li>
              <li>No footholds, handholds, or climbable objects are allowed in this zone</li>
            </ul>
            <p className="text-muted-foreground mb-4">Items that commonly cause non-compliance include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Planter boxes</li>
              <li>Outdoor furniture</li>
              <li>BBQs</li>
              <li>Trees and branches</li>
              <li>Pool equipment enclosures</li>
              <li>Retaining wall steps</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              If a boundary fence forms part of the pool barrier, it generally must be at least 1.8 m high, and have a 900 mm NCZ measured down from the top on the pool side.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Pool Gates, Latches & Hardware</h2>
            <p className="text-muted-foreground mb-4">
              Pool gates are the most critical safety component and are closely inspected.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Gate Requirements</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Gates must swing away from the pool area</li>
              <li>Gates must be self-closing from any open position</li>
              <li>Gates must self-latch automatically every time</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Latch Position</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Latches are usually required to be at least 1.5 m above ground level on the outside</li>
              <li>If positioned lower, they must be on the pool side and properly shielded so a child cannot reach over or through the gate</li>
            </ul>
            <p className="text-muted-foreground mb-8 font-medium">
              Propping a pool gate open — even temporarily — is expressly prohibited.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Doors, Windows & Boundary Structures</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Doors</h3>
            <p className="text-muted-foreground mb-4">
              In most jurisdictions, external doors from a house cannot open directly into a pool area as part of the safety barrier.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Windows</h3>
            <p className="text-muted-foreground mb-4">Windows within the pool barrier zone must:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Be restricted so they cannot open more than 100 mm, or</li>
              <li>Be fitted with compliant security screens</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Boundary Walls & Retaining Walls</h3>
            <p className="text-muted-foreground mb-8">
              If walls or retaining structures form part of the pool barrier, they must meet higher height requirements. Horizontal rails may need shielding or infill panels, and modifications may be required to remove climbable features.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Approved Pool Fence Materials</h2>
            <p className="text-muted-foreground mb-4">Pool fencing can be built from several materials, provided they meet AS 1926.1 and local regulations:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Aluminium fencing (tubular or flat-top)</li>
              <li>Glass fencing (frameless or semi-frameless)</li>
              <li>Steel fencing</li>
              <li>Engineered pool fence systems</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Glass Pool Fencing</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Must use toughened safety glass of approved thickness</li>
              <li>Hardware must meet impact and wind-load requirements</li>
              <li>Regular cleaning is needed to maintain visibility</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">State & Territory Differences</h2>
            <p className="text-muted-foreground mb-4">
              While AS 1926.1 sets the technical baseline, each state adds its own requirements.
            </p>
            <p className="text-muted-foreground mb-4">Common differences include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Pool registration systems</li>
              <li>Inspection frequency</li>
              <li>Rules for older or existing pools</li>
              <li>Sale and lease compliance certificates</li>
            </ul>
            <p className="text-muted-foreground mb-4">Examples:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li><strong>Victoria:</strong> Regular inspections, commonly every four years</li>
              <li><strong>Queensland:</strong> Mandatory pool safety certificates at sale or lease</li>
              <li><strong>ACT:</strong> Mandatory upgrades to current standards by 2028</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Always check your state or council pool safety website before building or altering a fence.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Signage, Inspections & Ongoing Maintenance</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">CPR Signage</h3>
            <p className="text-muted-foreground mb-4">
              Many states require a CPR or resuscitation sign to be clearly visible from the pool area.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Inspections</h3>
            <p className="text-muted-foreground mb-4">Inspections typically check:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Fence height and gaps</li>
              <li>Gate self-closing and latching</li>
              <li>Non-climbable zones</li>
              <li>Door and window compliance</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Maintenance Obligations</h3>
            <p className="text-muted-foreground mb-4">Homeowners must:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Repair rust, rot, or loose panels</li>
              <li>Replace worn hinges or self-closers</li>
              <li>Trim trees and landscaping regularly</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Failure to maintain compliance can result in fines — and increases the risk of serious injury or death.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Final Advice for Pool Owners</h2>
            <p className="text-muted-foreground mb-4 font-medium">
              Pool fencing is not optional. It is a legal and moral responsibility.
            </p>
            <p className="text-muted-foreground mb-4">Before installing or modifying a pool fence:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Confirm state and council requirements</li>
              <li>Use compliant materials and designs</li>
              <li>Arrange required approvals and inspections</li>
              <li>Maintain the barrier at all times</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting a Compliant Pool Fence Installed</h2>
            <p className="text-muted-foreground mb-4">QuoteMyFence helps homeowners:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Compare licensed fencing professionals</li>
              <li>Understand pool fencing compliance</li>
              <li>Get clear, no-obligation quotes</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              A compliant pool fence protects lives, avoids fines, and gives homeowners peace of mind — especially during the Australian summer.
            </p>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">
                Always verify pool fencing requirements with your local council or state authority before installation or alteration.
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
              Ready to Get Your Pool Fence Quote?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Compare fencing professionals and get free quotes in 60 seconds.
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
export default PoolFencingSafetyGuide;