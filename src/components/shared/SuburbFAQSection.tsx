import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Quote } from "lucide-react";

const QUOTE_URL = "https://app.quotemyfence.com.au/#/step/1";

interface SuburbFAQSectionProps {
  suburbName: string;
  onQuoteClick?: () => void;
}

const SuburbFAQSection = ({ suburbName, onQuoteClick }: SuburbFAQSectionProps) => {
  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      window.location.href = QUOTE_URL;
    }
  };

  const faqs = [
    {
      question: `How much does fencing installation cost in ${suburbName}?`,
      answer: `${suburbName} fencing installation costs depend on the fencing material, height, total length, and site conditions. As a guide from our ${suburbName} verified fencing contractors, timber fencing starts from $65 per metre, Colorbond fencing starts from $75 per metre, and pool-safe fencing options can start from $60 per metre.`
    },
    {
      question: `How long does it take to install a fence in ${suburbName}?`,
      answer: `A standard residential fence (20–30m) in ${suburbName} usually takes around 1–2 days to install. Larger fencing jobs, sloping blocks, retaining requirements, or custom designs may take 3–7 days.`
    },
    {
      question: `Do I need council approval for my fence in ${suburbName}?`,
      answer: `In ${suburbName} most residential fences under 2 metres don't require council approval, but rules can vary depending on your estate area. Our verified ${suburbName} local fencing contractors understand council regulations and will guide you through the approval process if needed.`
    },
    {
      question: `What's the best fencing material for my property in ${suburbName}?`,
      answer: `It depends on your goals and the style of your home in ${suburbName}. Colorbond fencing is durable and low-maintenance. Timber offers a natural look. Aluminium provides modern appearance. Glass fencing is premium for pools and outdoor areas.`
    },
    {
      question: `Are the fencing contractors in ${suburbName} verified and insured?`,
      answer: `Yes. Every fencing contractor on our platform in ${suburbName} is fully licensed, insured, and professionally vetted before they're allowed to quote.`
    },
    {
      question: "How many quotes will I receive?",
      answer: `You'll typically receive up to 3 competitive quotes from reputable ${suburbName} local fencing experts within hours.`
    },
    {
      question: `Can you repair or replace an existing fence in ${suburbName}?`,
      answer: `Absolutely. Whether you need simple fence repairs or a complete fence replacement, our ${suburbName} local fencing contractors can help.`
    },
    {
      question: "What happens after I submit my quote request?",
      answer: `Within minutes, we'll match you with up to 3 qualified local fencing professionals in ${suburbName}. They'll contact you to discuss your job and provide detailed written fencing quotes.`
    },
    {
      question: `How long will my fence last in ${suburbName}?`,
      answer: `Fence lifespan depends on the material and ${suburbName} area climate. A well-installed Colorbond or aluminium fence can last 20–30 years, while timber fencing generally lasts 10–20 years with proper care.`
    },
    {
      question: "What factors can increase the total cost of a fence?",
      answer: "Factors include site preparation, sloped or rocky ground, old fence removal, retaining requirements, custom designs, extra gates, and property accessibility issues."
    },
    {
      question: `Do I need my neighbour's approval for a new boundary fence in ${suburbName}?`,
      answer: "Yes — communication with your neighbour is essential. Boundary fences require both parties to agree on the fence height, materials, and cost sharing."
    },
    {
      question: `How close to the boundary can I build my fence in ${suburbName}?`,
      answer: "Most boundary fences are installed directly on the shared property line and are usually a shared cost between neighbours."
    },
    {
      question: `How do I choose the right fence for my home in ${suburbName}?`,
      answer: "Choosing the right fence depends on your home's style, privacy requirements and budget. During your consultation, a local fencing contractor will assess your property and recommend the best materials."
    },
    {
      question: "Can a new fence add value to my property?",
      answer: "Absolutely. A modern, high-quality fence can significantly improve your property's street appeal, privacy, and security — all of which add real value."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <HelpCircle className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.15] font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions about fencing in {suburbName}? We've got answers. Here's everything you need to know about
            getting your perfect fence installed in {suburbName}.
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-strong p-6 md:p-8 border border-border/50">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6 py-2 bg-card-gradient transition-all duration-300 hover:shadow-soft hover:border-accent/20">
                <AccordionTrigger className="text-left hover:no-underline group">
                  <div className="flex items-start gap-4 pr-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-1 group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-12 pr-4 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-accent/20">
          <h3 className="text-2xl font-bold mb-3 text-foreground">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our local fencing experts in {suburbName} are here to help. Get your free quotes and ask them anything!
          </p>
          <Button variant="hero" size="lg" onClick={handleQuoteClick} className="mb-6">
            <Quote className="w-5 h-5" />
            Get Your 3 Free Quotes Now
          </Button>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className="text-accent font-bold text-lg">⭐ 4.78</span>
              <span>rating</span>
            </div>
            <span className="text-border">•</span>
            <span>10,000+ Fences Quoted</span>
            <span className="text-border">•</span>
            <span>100% verified contractors</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuburbFAQSection;
