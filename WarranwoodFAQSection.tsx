import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [
  { question: "How much does fencing cost in Wantirna?", answer: "Fencing costs in Wantirna typically range from $75-$150 per metre for Colorbond and $80-$180 per metre for timber." },
  { question: "Do I need a permit for fencing in Wantirna?", answer: "In Wantirna (Knox Council), fences up to 2 metres high generally don't require a permit." },
  { question: "How long does fence installation take?", answer: "Most residential fence installations in Wantirna take 1-3 days." },
  { question: "What's the best fence type for Wantirna?", answer: "Colorbond and timber are popular choices in Wantirna." },
  { question: "Can you remove my old fence?", answer: "Yes, most contractors include old fence removal in their quotes." },
  { question: "Do I need my neighbour's permission?", answer: "Yes, you should give your neighbour a Fencing Notice before work begins." },
  { question: "What warranty do fencers offer?", answer: "Most offer warranties of 5-10 years on workmanship and materials." },
  { question: "How do I choose the best fencer?", answer: "Compare at least 3 quotes, check reviews, and verify insurance." },
  { question: "What if my property has a slope?", answer: "Fencers can install stepped or raked fencing to follow terrain." },
  { question: "Can I get a fence installed in winter?", answer: "Yes, fencing can be installed year-round in Wantirna." },
  { question: "Do you service all of Wantirna?", answer: "Yes, we service all areas of Wantirna and Wantirna South." },
  { question: "How do I get started?", answer: "Click 'Get 3 Free Quotes' and fill out the short form." },
  { question: "Are contractors insured?", answer: "Yes, all contractors carry public liability insurance." },
  { question: "What payment terms are offered?", answer: "Most require a deposit with the balance due on completion." }
];
const WantirnaFAQSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Wantirna Fencing FAQs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Common questions about fencing in Wantirna.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border border-border px-6">
                <AccordionTrigger className="text-left font-medium hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default WantirnaFAQSection;
