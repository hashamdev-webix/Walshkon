"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "How long does the immigration or visa process usually take?",
      a: "Processing times vary depending on the country, visa type, and documentation accuracy. Our consultants provide realistic timelines and regular updates throughout the process.",
    },
    {
      q: "Do you assist only with immigration services?",
      a: "No. Walshkon Consultants offers a wide range of services including legal assistance, recruitment, IT solutions, real estate, finance, and digital consulting.",
    },
    {
      q: "Can you help with work, PR, or long-term settlement options?",
      a: "Yes. We assist with study visas, work permits, permanent residency pathways, and post-approval settlement support.",
    },
    {
      q: "Do you provide support after approval or service completion?",
      a: "Absolutely. Our support continues beyond approval, including guidance on next steps, compliance, documentation, and long-term planning.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-text-[#26374A]">
            Frequently Asked <span className="">Questions</span>
          </h2>
         
        </div>

        {/* FAQ */}
        <Accordion type="single" collapsible className="space-y-4">

          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border rounded-xl px-5 shadow-sm hover:shadow-md transition"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-gray-900  transition">
                {item.q}
              </AccordionTrigger>

              <AccordionContent className="text-gray-600 text-lg  leading-relaxed pt-2">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}

        </Accordion>

      </div>
    </section>
  );
}