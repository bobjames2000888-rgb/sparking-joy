import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much does fencing cost in Heathmont?", a: "Fencing costs in Heathmont typically range from $75-$150 per metre for Colorbond and $80-$120 for timber, depending on style and terrain." },
  { q: "Do I need a permit for fencing in Heathmont?", a: "Fences under 2 metres generally don't require a permit in Maroondah Council. Our contractors can advise on your specific requirements." },
  { q: "How long does fence installation take in Heathmont?", a: "Most residential fencing projects in Heathmont are completed within 1-3 days, weather permitting." },
  { q: "What's the best fence type for Heathmont properties?", a: "Colorbond is popular in Heathmont for its durability and low maintenance, while timber suits the leafy suburban character." },
  { q: "Do you remove old fencing in Heathmont?", a: "Yes, most of our Heathmont contractors include old fence removal and disposal in their quotes." },
  { q: "Can I get a pool fence installed in Heathmont?", a: "Absolutely. Our contractors install compliant glass and aluminium pool fencing meeting Victorian safety standards." },
  { q: "What colours are available for Colorbond in Heathmont?", a: "All 15 standard Colorbond colours are available, with Monument, Woodland Grey, and Surfmist being popular in Heathmont." },
  { q: "How do I prepare for fence installation?", a: "Clear the fence line of plants and debris. Your contractor will handle the rest including utility location." },
  { q: "Do Heathmont fencing contractors offer warranties?", a: "Yes, our verified contractors typically offer workmanship warranties ranging from 5-10 years." },
  { q: "Can you match my neighbour's existing fence?", a: "Our contractors can often match or complement existing fencing styles for a cohesive streetscape." },
  { q: "What if my Heathmont property is sloped?", a: "Our contractors are experienced with Heathmont's varied terrain and can install stepped or raked fencing solutions." },
  { q: "How quickly can I get quotes in Heathmont?", a: "You'll typically receive up to 3 quotes within 24-48 hours of submitting your request." },
  { q: "Are your Heathmont contractors licensed?", a: "All our contractors are verified, licensed, and insured to work in Victoria." },
  { q: "Can I finance my Heathmont fence?", a: "Some of our contractors offer payment plans. Ask about financing options when you receive your quotes." },
];

const HeathmontFAQSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Heathmont Fencing FAQs</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default HeathmontFAQSection;
