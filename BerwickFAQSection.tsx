import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much does fencing cost in Beaconsfield?", a: "Fencing costs in Beaconsfield typically range from $75-$150 per metre for Colorbond and $80-$120 for timber, depending on style and terrain." },
  { q: "Do I need a permit for fencing in Beaconsfield?", a: "Fences under 2 metres generally don't require a permit in Cardinia Shire. Our contractors can advise on your specific requirements." },
  { q: "How long does fence installation take in Beaconsfield?", a: "Most residential fencing projects in Beaconsfield are completed within 1-3 days, weather permitting." },
  { q: "What's the best fence type for Beaconsfield properties?", a: "Colorbond and timber are both popular in Beaconsfield, with rural properties often opting for post and rail or timber options." },
  { q: "Do you remove old fencing in Beaconsfield?", a: "Yes, most of our Beaconsfield contractors include old fence removal and disposal in their quotes." },
  { q: "Can I get a pool fence installed in Beaconsfield?", a: "Absolutely. Our contractors install compliant glass and aluminium pool fencing meeting Victorian safety standards." },
  { q: "What colours are available for Colorbond in Beaconsfield?", a: "All 15 standard Colorbond colours are available, with Woodland Grey, Monument, and Jasper being popular choices." },
  { q: "How do I prepare for fence installation?", a: "Clear the fence line of plants and debris. Your contractor will handle the rest including utility location." },
  { q: "Do Beaconsfield fencing contractors offer warranties?", a: "Yes, our verified contractors typically offer workmanship warranties ranging from 5-10 years." },
  { q: "Can you fence rural properties in Beaconsfield?", a: "Yes, our contractors work with both residential and rural properties in Beaconsfield and surrounds." },
  { q: "What if my Beaconsfield property is sloped?", a: "Our contractors are experienced with varied terrain and can install stepped or raked fencing solutions." },
  { q: "How quickly can I get quotes in Beaconsfield?", a: "You'll typically receive up to 3 quotes within 24-48 hours of submitting your request." },
  { q: "Are your Beaconsfield contractors licensed?", a: "All our contractors are verified, licensed, and insured to work in Victoria." },
  { q: "Can I finance my Beaconsfield fence?", a: "Some of our contractors offer payment plans. Ask about financing options when you receive your quotes." },
];

const BeaconsfieldFAQSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Beaconsfield Fencing FAQs</h2>
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

export default BeaconsfieldFAQSection;
