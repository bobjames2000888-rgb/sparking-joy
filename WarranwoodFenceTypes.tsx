import { Link } from "react-router-dom";
const fenceTypes = [
  { name: "Colorbond Fencing", description: "Durable steel fencing perfect for Wantirna's climate.", href: "/colorbond-fencing", popular: true },
  { name: "Timber Fencing", description: "Classic wooden fencing that complements Wantirna homes.", href: "/timber-fencing", popular: true },
  { name: "Pool Fencing", description: "Compliant pool fencing for Wantirna properties.", href: "/pool-fencing", popular: false },
  { name: "Aluminium Fencing", description: "Stylish fencing ideal for Wantirna front yards.", href: "/aluminium-fencing", popular: false },
  { name: "Security Fencing", description: "Security solutions for Wantirna homes.", href: "/security-fencing", popular: false },
  { name: "Gate Installation", description: "Custom gates for your Wantirna fence.", href: "/gate-installation", popular: false }
];
const WantirnaFenceTypes = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Fence Types in Wantirna</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Popular fencing options in Wantirna.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {fenceTypes.map((fence, index) => (
            <Link key={index} to={fence.href} className="group bg-muted/30 rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{fence.name}</h3>
                {fence.popular && <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Popular</span>}
              </div>
              <p className="text-muted-foreground text-sm">{fence.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WantirnaFenceTypes;
