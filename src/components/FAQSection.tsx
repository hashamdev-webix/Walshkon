// "use client";

// import {
//   Accordion,
//   AccordionItem,
//   AccordionTrigger,
//   AccordionContent,
// } from "@/components/ui/accordion";

// export default function FAQSection() {
//   return (
//     <section className="py-20 bg-gray-50 mt-20">
//       <div className="max-w-4xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-5xl text-[#26374A] font-bold">
//             Frequently Asked <span className="">Questions</span>
//           </h2>
        
//         </div>

//         {/* Accordion */}
//         <Accordion type="single" collapsible className="space-y-4">

//           <AccordionItem className="bg-white border rounded-xl px-5 shadow-sm" value="item-1">
//             <AccordionTrigger className="text-left font-medium  text-lg ">
//               How long does the immigration or visa process usually take?
//             </AccordionTrigger>
//             <AccordionContent className="text-gray-600 text-lg  leading-relaxed pt-2">
//            Processing times vary depending on the country, visa type, and documentation accuracy. Our consultants provide realistic timelines and regular updates throughout the process.
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem className="bg-white border rounded-xl px-5 shadow-sm" value="item-2">
//             <AccordionTrigger className="text-left font-medium  text-lg">
//               Do you assist only with immigration services?
//             </AccordionTrigger>
//             <AccordionContent className="text-gray-600 text-lg  leading-relaxed pt-2">
//               No. Walshkon Consultants offers a wide range of services including legal assistance, recruitment, IT solutions, real estate, finance, and digital consulting.
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem className="bg-white border rounded-xl px-5 shadow-sm" value="item-3">
//             <AccordionTrigger className="text-left font-medium  text-lg">
//              Can you help with work, PR, or long-term settlement options?
//             </AccordionTrigger>
//             <AccordionContent className="text-gray-600 text-lg  leading-relaxed pt-2">
//            Yes. We assist with study visas, work permits, permanent residency pathways, and post-approval settlement support.
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem className="bg-white border rounded-xl px-5 shadow-sm" value="item-4">
//             <AccordionTrigger className="text-left font-medium  text-lg">
//               Do you provide support after approval or service completion?
//             </AccordionTrigger>
//             <AccordionContent className="text-gray-600 text-lg  leading-relaxed pt-2">
//               Absolutely. Our support continues beyond approval, including guidance on next steps, compliance, documentation, and long-term planning.
//             </AccordionContent>
//           </AccordionItem>

//         </Accordion>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50 mt-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl text-[#26374A] font-bold">
            Frequently Asked <span className="">Questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            className="bg-white border rounded-xl px-5 shadow-sm"
            value="item-1"
          >
            <AccordionTrigger className="text-left font-medium text-lg">
              How do we get started with your consulting services?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-lg leading-relaxed pt-2">
              You can get started by filling out our consultation form or reaching
              out directly. Our specialists will review your requirements and provide
              a clear roadmap and realistic timeline tailored to your goals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="bg-white border rounded-xl px-5 shadow-sm"
            value="item-2"
          >
            <AccordionTrigger className="text-left font-medium text-lg">
              What range of services does Walshkon Consultants provide?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-lg leading-relaxed pt-2">
              Walshkon Consultants provides comprehensive multi-disciplinary solutions,
              including paralegal assistance, corporate recruitment, IT services,
              real estate advisory, financial consulting, debt recovery, and digital marketing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="bg-white border rounded-xl px-5 shadow-sm"
            value="item-3"
          >
            <AccordionTrigger className="text-left font-medium text-lg">
              Do you work with international clients and businesses?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-lg leading-relaxed pt-2">
              Yes. We support individual clients, emerging startups, and established
              organizations across multiple jurisdictions with reliable, compliance-oriented
              business and consulting services.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            className="bg-white border rounded-xl px-5 shadow-sm"
            value="item-4"
          >
            <AccordionTrigger className="text-left font-medium text-lg">
              Do you provide ongoing support after project completion?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-lg leading-relaxed pt-2">
              Absolutely. Our team provides continuous support beyond the initial
              engagement, offering guidance on compliance, documentation, and long-term
              strategic planning.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
