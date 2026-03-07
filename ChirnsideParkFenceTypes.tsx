import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ChirnsideParkFAQSection = () => {
  const faqs = [
    { question: "How much does fencing cost in Chirnside Park?", answer: "Fencing costs in Chirnside Park vary depending on the material and length. Colorbond fencing typically costs $75-$120 per metre, timber fencing $65-$140 per metre, and aluminium pool fencing $150-$300 per metre." },
    { question: "Do I need a permit for fencing in Chirnside Park?", answer: "In Chirnside Park and the Yarra Ranges Council area, fences under 2 metres generally don't require a permit. However, corner blocks or heritage overlays may need council approval." },
    { question: "What's the best type of fence for Chirnside Park properties?", answer: "Timber fencing is very popular in Chirnside Park due to its natural appearance that complements the semi-rural setting. Colorbond is also excellent for low maintenance." },
    { question: "How long does fence installation take in Chirnside Park?", answer: "Most residential fence installations in Chirnside Park take 1-3 days depending on the length and material." },
    { question: "Are your Chirnside Park fencing contractors licensed?", answer: "Yes, all fencing contractors in our Chirnside Park network are fully licensed, insured, and verified for quality workmanship." },
    { question: "Can I get pool fencing installed in Chirnside Park?", answer: "Absolutely! Our Chirnside Park contractors specialise in compliant pool fencing meeting Australian Standard AS1926.1." },
    { question: "What warranty do Chirnside Park fencing contractors offer?", answer: "Warranties vary by material. Colorbond typically comes with a 10-year warranty, timber 5-10 years, and workmanship warranties of 2-5 years." },
    { question: "Do you offer free quotes in Chirnside Park?", answer: "Yes! Getting quotes through QuoteMyFence is completely free with no obligation." },
    { question: "Can you replace an existing fence in Chirnside Park?", answer: "Yes, our contractors regularly handle fence replacements including removal and disposal of old fencing." },
    { question: "What areas around Chirnside Park do you service?", answer: "Our network covers Chirnside Park and surrounding suburbs including Mooroolbark, Lilydale, Croydon, and throughout the Yarra Ranges." },
    { question: "How do I prepare for fence installation in Chirnside Park?", answer: "Mark property boundaries, clear vegetation along the fence line, ensure access for materials, and notify neighbours." },
    { question: "What colours are available for Colorbond fencing?", answer: "Colorbond fencing is available in 22 standard colours including Woodland Grey, Monument, Surfmist, and Paperbark." },
    { question: "Do Chirnside Park fencers work on weekends?", answer: "Some contractors offer weekend installations. Yarra Ranges Council has specific rules about weekend work hours." },
    { question: "Can I get a fence on a sloped block in Chirnside Park?", answer: "Yes! Many Chirnside Park properties have sloped terrain. Our contractors are skilled in stepped and raked fencing solutions." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Chirnside Park Fencing FAQs</h2>
            <p className="text-lg text-slate-600">Common questions about fencing services in Chirnside Park, answered by local experts.</p>
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

export default ChirnsideParkFAQSection;
