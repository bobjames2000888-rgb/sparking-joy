import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AshwoodFAQSection = () => {
  const faqs = [
    { question: "How much does fencing cost in Ashwood?", answer: "Fencing costs in Ashwood vary depending on the material and length. Colorbond fencing typically costs $75-$120 per metre, timber fencing $65-$140 per metre, and aluminium pool fencing $150-$300 per metre. Get free quotes from local Ashwood fencers for accurate pricing." },
    { question: "Do I need a permit for fencing in Ashwood?", answer: "In Ashwood and the Monash Council area, fences under 2 metres generally don't require a permit. However, if you're on a corner block, heritage overlay, or building a front fence, you may need council approval. Our Ashwood contractors can advise on local requirements." },
    { question: "What's the best type of fence for Ashwood properties?", answer: "Colorbond and timber fencing are both popular in Ashwood. The established suburban character suits timber fencing, while Colorbond offers excellent privacy and low maintenance for busy families." },
    { question: "How long does fence installation take in Ashwood?", answer: "Most residential fence installations in Ashwood take 1-3 days depending on the length and material. Pool fencing may take 2-4 days due to compliance requirements. Your Ashwood contractor will provide a specific timeline with your quote." },
    { question: "Are your Ashwood fencing contractors licensed?", answer: "Yes, all fencing contractors in our Ashwood network are fully licensed, insured, and have been verified for quality workmanship. We only partner with established local fencers who meet our strict standards." },
    { question: "Can I get pool fencing installed in Ashwood?", answer: "Absolutely! Our Ashwood contractors specialise in compliant pool fencing including frameless glass, semi-frameless glass, and aluminium options. All installations meet Australian Standard AS1926.1 for pool safety." },
    { question: "What warranty do Ashwood fencing contractors offer?", answer: "Warranties vary by material and contractor. Colorbond fencing typically comes with a 10-year warranty, timber fencing 5-10 years, and workmanship warranties of 2-5 years. Specific warranty details will be included in your quote." },
    { question: "Do you offer free quotes in Ashwood?", answer: "Yes! Getting quotes through QuoteMyFence is completely free with no obligation. Simply fill out our quick form and receive up to 3 competitive quotes from verified Ashwood fencing contractors." },
    { question: "Can you replace an existing fence in Ashwood?", answer: "Yes, our Ashwood contractors regularly handle fence replacements. This includes removing and disposing of old fencing, preparing the ground, and installing your new fence. Old fence removal is usually quoted separately." },
    { question: "What areas around Ashwood do you service?", answer: "Our fencing network covers Ashwood and all surrounding suburbs including Burwood, Chadstone, Mount Waverley, Glen Waverley, and throughout the Monash council area." },
    { question: "How do I prepare for fence installation in Ashwood?", answer: "Before your Ashwood fence installation, mark your property boundaries, clear vegetation along the fence line, ensure access for materials, and notify neighbours if working near shared boundaries." },
    { question: "What colours are available for Colorbond fencing in Ashwood?", answer: "Colorbond fencing in Ashwood is available in 22 standard colours including popular choices like Woodland Grey, Monument, Surfmist, and Paperbark." },
    { question: "Do Ashwood fencers work on weekends?", answer: "Some Ashwood fencing contractors offer weekend installations, though this varies by contractor. Weekend availability will be confirmed when you receive your quotes." },
    { question: "Can I get a fence on a sloped block in Ashwood?", answer: "Yes! Our experienced contractors are skilled in stepped and raked fencing solutions that follow the natural contour of your land while maintaining structural integrity." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ashwood Fencing FAQs</h2>
            <p className="text-lg text-slate-600">Common questions about fencing services in Ashwood, answered by local experts.</p>
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

export default AshwoodFAQSection;
