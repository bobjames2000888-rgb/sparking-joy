import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much does fencing cost in Clayton?", a: "Fencing costs in Clayton typically range from $75-$150 per metre for Colorbond and $80-$120 for timber, depending on style and terrain." },
  { q: "Do I need a permit for fencing in Clayton?", a: "Fences under 2 metres generally don't require a permit in Monash Council. Our contractors can advise on your specific requirements." },
  { q: "How long does fence installation take in Clayton?", a: "Most residential fencing projects in Clayton are completed within 1-3 days, weather permitting." },
  { q: "What's the best fence type for Clayton properties?", a: "Colorbond is very popular in Clayton for its clean lines and security, ideal for the suburb's diverse housing styles." },
  { q: "Do you remove old fencing in Clayton?", a: "Yes, most of our Clayton contractors include old fence removal and disposal in their quotes." },
  { q: "Can I get a pool fence installed in Clayton?", a: "Absolutely. Our contractors install compliant glass and aluminium pool fencing meeting Victorian safety standards." },
  { q: "What colours are available for Colorbond in Clayton?", a: "All 15 standard Colorbond colours are available, with Monument, Woodland Grey, and Basalt being popular choices." },
  { q: "How do I prepare for fence installation?", a: "Clear the fence line of plants and debris. Your contractor will handle the rest including utility location." },
  { q: "Do Clayton fencing contractors offer warranties?", a: "Yes, our verified contractors typically offer workmanship warranties ranging from 5-10 years." },
  { q: "Can you match my neighbour's existing fence?", a: "Our contractors can often match or complement existing fencing styles for a cohesive streetscape." },
  { q: "What if my Clayton property has difficult access?", a: "Our contractors are experienced with various site conditions and can work with limited access properties." },
  { q: "How quickly can I get quotes in Clayton?", a: "You'll typically receive up to 3 quotes within 24-48 hours of submitting your request." },
  { q: "Are your Clayton contractors licensed?", a: "All our contractors are verified, licensed, and insured to work in Victoria." },
  { q: "Can I finance my Clayton fence?", a: "Some of our contractors offer payment plans. Ask about financing options when you receive your quotes." },
];

const ClaytonFAQSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Clayton Fencing FAQs</h2>
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

export default ClaytonFAQSection;
