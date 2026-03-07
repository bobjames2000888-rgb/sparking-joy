import { FileText, Users, CheckCircle } from "lucide-react";

const steps = [
  { icon: FileText, title: "1. Describe Your Project", description: "Tell us about your Scoresby fencing needs - type, length, and any specific requirements." },
  { icon: Users, title: "2. Get Matched", description: "We connect you with up to 3 verified fencing contractors serving Scoresby." },
  { icon: CheckCircle, title: "3. Compare & Choose", description: "Review quotes, compare prices, and select the best fencer for your project." }
];

const ScoresbyHowItWorks = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works in Scoresby</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Getting fencing quotes in Scoresby is simple. Follow these three easy steps to find the perfect contractor for your project.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScoresbyHowItWorks;
