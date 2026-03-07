import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MooroolbarkFAQSection = () => {
  const faqs = [
    { question: "How much does fencing cost in Mooroolbark?", answer: "Fencing costs in Mooroolbark vary. Colorbond typically costs $75-$120 per metre, timber $65-$140 per metre, and aluminium pool fencing $150-$300 per metre." },
    { question: "Do I need a permit for fencing in Mooroolbark?", answer: "In Mooroolbark and the Yarra Ranges Council area, fences under 2 metres generally don't require a permit. Corner blocks or front fences may need approval." },
    { question: "What's the best type of fence for Mooroolbark properties?", answer: "Timber fencing is popular in Mooroolbark due to the area's semi-rural character. Colorbond is also excellent for low maintenance." },
    { question: "How long does fence installation take in Mooroolbark?", answer: "Most residential fence installations take 1-3 days. Pool fencing may take 2-4 days due to compliance requirements." },
    { question: "Are your Mooroolbark fencing contractors licensed?", answer: "Yes, all fencing contractors in our Mooroolbark network are fully licensed, insured, and verified for quality workmanship." },
    { question: "Can I get pool fencing installed in Mooroolbark?", answer: "Absolutely! Our contractors specialise in compliant pool fencing including frameless glass, semi-frameless glass, and aluminium options." },
    { question: "What warranty do Mooroolbark fencing contractors offer?", answer: "Colorbond typically comes with 10-year warranty, timber 5-10 years, and workmanship warranties of 2-5 years." },
    { question: "Do you offer free quotes in Mooroolbark?", answer: "Yes! Getting quotes through QuoteMyFence is completely free with no obligation." },
    { question: "Can you replace an existing fence in Mooroolbark?", answer: "Yes, our contractors handle fence replacements including old fence removal and disposal." },
    { question: "What areas around Mooroolbark do you service?", answer: "Our network covers Mooroolbark and surrounding suburbs including Lilydale, Kilsyth, Croydon, Chirnside Park, and throughout Yarra Ranges." },
    { question: "How do I prepare for fence installation in Mooroolbark?", answer: "Mark your property boundaries, clear vegetation along the fence line, and ensure access for materials." },
    { question: "What colours are available for Colorbond fencing?", answer: "22 standard colours including Woodland Grey, Monument, Surfmist, and Paperbark." },
    { question: "Do Mooroolbark fencers work on weekends?", answer: "Some contractors offer weekend installations. Availability will be confirmed when you receive your quotes." },
    { question: "Can I get a fence on a sloped block in Mooroolbark?", answer: "Yes! Our contractors are skilled in stepped and raked fencing solutions for sloped terrain." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mooroolbark Fencing FAQs</h2>
            <p className="text-lg text-slate-600">Common questions about fencing services in Mooroolbark.</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default MooroolbarkFAQSection;
