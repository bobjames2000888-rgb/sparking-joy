import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much does fencing cost in Clyde?", a: "Fencing costs in Clyde typically range from $75-$150 per metre for Colorbond and $80-$120 for timber, depending on style and terrain." },
  { q: "Do I need a permit for fencing in Clyde?", a: "Fences under 2 metres generally don't require a permit in Casey Council. Our contractors can advise on your specific requirements." },
  { q: "How long does fence installation take in Clyde?", a: "Most residential fencing projects in Clyde are completed within 1-3 days, weather permitting." },
  { q: "What's the best fence type for Clyde properties?", a: "Colorbond is extremely popular in Clyde's new estates for its modern aesthetic and compliance with estate guidelines." },
  { q: "Do you remove old fencing in Clyde?", a: "Yes, most of our Clyde contractors include old fence removal and disposal in their quotes." },
  { q: "Can I get a pool fence installed in Clyde?", a: "Absolutely. Our contractors install compliant glass and aluminium pool fencing meeting Victorian safety standards." },
  { q: "What colours are available for Colorbond in Clyde?", a: "All 15 standard Colorbond colours are available, with Monument, Basalt, and Woodland Grey being popular in Clyde estates." },
  { q: "How do I prepare for fence installation?", a: "Clear the fence line of plants and debris. Your contractor will handle the rest including utility location." },
  { q: "Do Clyde fencing contractors offer warranties?", a: "Yes, our verified contractors typically offer workmanship warranties ranging from 5-10 years." },
  { q: "What about estate covenants in Clyde?", a: "Our contractors are familiar with Clyde North and Clyde estate requirements and can advise on compliant fencing options." },
  { q: "Can you fence new builds in Clyde?", a: "Yes, our contractors work with new home builders throughout Clyde and Clyde North estates." },
  { q: "How quickly can I get quotes in Clyde?", a: "You'll typically receive up to 3 quotes within 24-48 hours of submitting your request." },
  { q: "Are your Clyde contractors licensed?", a: "All our contractors are verified, licensed, and insured to work in Victoria." },
  { q: "Can I finance my Clyde fence?", a: "Some of our contractors offer payment plans. Ask about financing options when you receive your quotes." },
];

const ClydeFAQSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Clyde Fencing FAQs</h2>
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

export default ClydeFAQSection;
