import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How much does fencing cost in Seaford?", a: "Fencing costs in Seaford typically range from $75-$150 per metre for Colorbond and $80-$120 for timber, depending on style and terrain." },
  { q: "Do I need a permit for fencing in Seaford?", a: "Fences under 2 metres generally don't require a permit in Frankston Council. Our contractors can advise on your specific requirements." },
  { q: "How long does fence installation take in Seaford?", a: "Most residential fencing projects in Seaford are completed within 1-3 days, weather permitting." },
  { q: "What's the best fence type for Seaford properties?", a: "Coastal-rated Colorbond and marine-grade aluminium are excellent choices for Seaford's beachside location." },
  { q: "Do you remove old fencing in Seaford?", a: "Yes, most of our Seaford contractors include old fence removal and disposal in their quotes." },
  { q: "Can I get a pool fence installed in Seaford?", a: "Absolutely. Our contractors install compliant glass and aluminium pool fencing meeting Victorian safety standards." },
  { q: "What colours are available for Colorbond in Seaford?", a: "All 15 standard Colorbond colours are available, with Surfmist, Dune, and Shale Grey being popular coastal choices." },
  { q: "How do I prepare for fence installation?", a: "Clear the fence line of plants and debris. Your contractor will handle the rest including utility location." },
  { q: "Do Seaford fencing contractors offer warranties?", a: "Yes, our verified contractors typically offer workmanship warranties ranging from 5-10 years." },
  { q: "Is coastal-grade fencing available in Seaford?", a: "Yes, we offer marine-grade aluminium and coastal-rated Colorbond perfect for Seaford's proximity to Port Phillip Bay." },
  { q: "What if my Seaford property has sandy soil?", a: "Our contractors are experienced with coastal soil conditions and use appropriate footing methods." },
  { q: "How quickly can I get quotes in Seaford?", a: "You'll typically receive up to 3 quotes within 24-48 hours of submitting your request." },
  { q: "Are your Seaford contractors licensed?", a: "All our contractors are verified, licensed, and insured to work in Victoria." },
  { q: "Can I finance my Seaford fence?", a: "Some of our contractors offer payment plans. Ask about financing options when you receive your quotes." },
];

const SeafordFAQSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Seaford Fencing FAQs</h2>
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

export default SeafordFAQSection;
