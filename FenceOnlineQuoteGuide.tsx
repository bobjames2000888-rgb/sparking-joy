import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, AlertTriangle } from "lucide-react";
const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";
const FenceHeightRegulationsGuide = () => {
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
              Fence Height Regulations
              <br />
              <span className="text-gradient">by State</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Australian fence height regulations and permits explained for homeowners
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
                    This guide is for general information only. Always confirm requirements with your local council before building or replacing a fence.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Building a new fence in Australia isn't governed by one single national rule. Instead, fence height limits and permit requirements vary by state, territory, and local council. What's allowed in one suburb may require approval in another — even within the same city.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This guide explains fence height regulations across Australia, what typically requires council approval, and how homeowners can avoid costly mistakes before installing a fence.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Is There a National Fence Height Law in Australia?</h2>
            <p className="text-muted-foreground mb-4">
              No. Australia does not have a single national law that sets standard fence heights for residential properties.
            </p>
            <p className="text-muted-foreground mb-4">What exists instead:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Each state and territory sets general planning and building rules</li>
              <li>Local councils apply their own planning schemes and overlays</li>
              <li>Special rules apply for front fences, corner blocks, heritage areas, and pool fencing</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Australian Standards focus on safety‑critical fencing, such as pool barriers, rather than everyday boundary fences.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">National Standards & Special Fence Types</h2>
            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Pool Fencing (All States)</h3>
            <p className="text-muted-foreground mb-4">
              Swimming pool fences are regulated separately from normal boundary fences. Across Australia, pool barriers must comply with Australian Standard AS 1926.1 (2012 or the newer 2024 version where adopted).
            </p>
            <p className="text-muted-foreground mb-4">Typical pool‑fence requirements include:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Minimum height: 1.2 metres</li>
              <li>Maximum gap under fence: 100 mm</li>
              <li>Non‑climbable zone: 900 mm</li>
              <li>Vertical spacing: Designed to prevent climbing</li>
              <li>Gates: Self‑closing and self‑latching</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              State laws may add extra requirements and inspection rules.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Fence Height Regulations by State & Territory</h2>
            <p className="text-muted-foreground mb-8">
              Below is a practical overview of how fence height rules typically work in each state and territory. These are general guides only, not guaranteed approvals.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">New South Wales (NSW)</h3>
            <p className="text-muted-foreground mb-4">
              In NSW, many fences qualify as exempt development if they meet height and location rules.
            </p>
            <p className="text-muted-foreground mb-4">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Side & rear fences: Up to 1.8 m (or 1.2 m if masonry) without approval</li>
              <li>Front fences: Lower height limits and transparency rules usually apply</li>
            </ul>
            <p className="text-muted-foreground mb-4">A Development Application (DA) may be required if:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>The fence exceeds exempt heights</li>
              <li>The property is in a heritage or environmentally sensitive area</li>
              <li>The fence is masonry or affects streetscape</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Victoria (VIC)</h3>
            <p className="text-muted-foreground mb-4">
              Victoria allows many residential boundary fences to be built without a planning permit.
            </p>
            <p className="text-muted-foreground mb-4">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Side & rear fences: Up to around 2.0 m often allowed</li>
              <li>Front fences: Solid or taller fences usually require approval</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Additional rules may apply in heritage overlays and neighbourhood character overlays.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Queensland (QLD)</h3>
            <p className="text-muted-foreground mb-4">
              Queensland councils commonly allow standard boundary fencing within set height ranges.
            </p>
            <p className="text-muted-foreground mb-4">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Boundary fences: Around 0.5 m – 1.8 m generally acceptable</li>
              <li>Corner blocks: Extra controls may apply for driver visibility</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Queensland has strict pool safety laws, with inspections required at sale, lease, or new‑pool stages.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">South Australia (SA)</h3>
            <p className="text-muted-foreground mb-4">
              South Australia uses planning rules that distinguish between minor and assessable development.
            </p>
            <p className="text-muted-foreground mb-4">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Residential fences: Up to around 2.1 m before approvals are triggered</li>
              <li>Front fences: Usually lower height limits</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Approval is commonly required when the fence exceeds standard heights, acts as a retaining wall, or involves structural engineering.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Western Australia (WA)</h3>
            <p className="text-muted-foreground mb-4">
              Fence height rules in WA vary significantly by council.
            </p>
            <p className="text-muted-foreground mb-4">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Boundary fences: Around 1.8 m maximum</li>
              <li>Front fences: Stricter height and openness controls</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Local council planning schemes must always be checked. Suburb‑by‑suburb differences are common.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Tasmania (TAS)</h3>
            <p className="text-muted-foreground mb-4">
              Tasmania applies planning controls through local councils.
            </p>
            <p className="text-muted-foreground mb-8">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Front fences: Up to around 1.2 m before permits are required</li>
              <li>Side & rear fences: Higher fences may require approval depending on location</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Australian Capital Territory (ACT)</h3>
            <p className="text-muted-foreground mb-4">
              The ACT provides comparatively generous height allowances in standard residential areas.
            </p>
            <p className="text-muted-foreground mb-4">Typical guidelines:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Fences up to around 2.5 m may not require development approval</li>
              <li>The Common Boundaries Act 1981 governs neighbour responsibilities and cost sharing</li>
              <li>Estate guidelines or Territory Plan codes may restrict front fence heights</li>
            </ul>

            <h3 className="text-2xl font-semibold text-foreground mt-10 mb-4">Northern Territory (NT)</h3>
            <p className="text-muted-foreground mb-4">
              Fence regulations in the NT vary widely by council.
            </p>
            <p className="text-muted-foreground mb-8">
              Always check directly with your local council before building in the NT. Additional factors include cyclone‑prone conditions and structural requirements for solid or tall fences.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">When Do You Usually Need a Fence Permit?</h2>
            <p className="text-muted-foreground mb-4">Across Australia, approval is commonly required if a fence:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Exceeds local "exempt" height limits</li>
              <li>Is masonry above low thresholds</li>
              <li>Is built on a corner lot affecting visibility</li>
              <li>Acts as or includes a retaining wall</li>
              <li>Is in a heritage or special planning overlay</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Neighbour & Boundary Fence Considerations</h2>
            <p className="text-muted-foreground mb-4">Most states have Dividing Fences legislation that covers:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Cost sharing between neighbours</li>
              <li>Fence location on boundaries</li>
              <li>Dispute resolution processes</li>
            </ul>
            <p className="text-muted-foreground mb-4">Best practice:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Discuss plans with neighbours early</li>
              <li>Get agreements in writing</li>
              <li>Confirm boundaries before construction</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Even when approval isn't required, neighbour disputes can delay or stop a project.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Final Advice for Homeowners</h2>
            <p className="text-muted-foreground mb-4">
              Fence height regulations are not one‑size‑fits‑all. Council rules, overlays, property type, and fence design all matter.
            </p>
            <p className="text-muted-foreground mb-4">Before installing a fence:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Check your local council planning rules</li>
              <li>Confirm exempt height limits for your property</li>
              <li>Discuss boundary fences with neighbours</li>
              <li>Get professional advice if unsure</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Getting the Right Fence Installed</h2>
            <p className="text-muted-foreground mb-4">QuoteMyFence helps homeowners:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
              <li>Compare local fencing professionals</li>
              <li>Understand fence options and regulations</li>
              <li>Get clear, no‑obligation quotes</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              A well‑planned fence avoids compliance issues, neighbour disputes, and costly rebuilds — and ensures your new fence is built right the first time.
            </p>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-8">
              <p className="text-muted-foreground text-sm italic">
                Always confirm fence height rules with your local council before building. Regulations can change, and local controls may apply.
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
export default FenceHeightRegulationsGuide;