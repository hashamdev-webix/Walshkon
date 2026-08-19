// "use client";

// import Footer from "@/components/layout/Footer";
// import ServiceBreadcrumb from "@/components/ServiceBreadcrumb";
// import { CheckCircle } from "lucide-react";
// import { motion, Variants } from "motion/react";

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut", // now TS accepts this
//     },
//   },
// };

// const stagger: Variants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// export default function Page() {
//   return (
//     <div className="bg-background text-foreground">
//       {/* HERO */}
//       <section className="relative py-24 text-center bg-gradient-to-b from-gray-50 to-white">
//         <motion.div
//           className="max-w-4xl mx-auto px-6"
//           variants={stagger}
//           initial="hidden"
//           animate="show"
//         >
//           <ServiceBreadcrumb current="Paralegal Services in Canada" />

//           <motion.h1
//             variants={fadeUp}
//             className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#26374A] "
//           >
//             Paralegal Services in Canada
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
//           >
//             Expert Paralegal support for immigration, legal paperwork, and
//             advisory services. Simplifying complex Canadian legal processes for
//             individuals and businesses.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* SERVICES */}
//       <section className="py-24">
//         <motion.div
//           className="w-full mx-auto px-6"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={stagger}
//         >
//           <motion.h2
//             variants={fadeUp}
//             className="text-5xl font-extrabold text-center mb-16"
//           >
//             Our <span className="text-[#26374A]">Expert Services</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-3 gap-12 text-center">
//             {[
//               {
//                 title: "Immigration Assistance",
//                 desc: "Complete help with visa applications, sponsorships, and legal documentation.",
//               },
//               {
//                 title: "Legal Documentation",
//                 desc: "Drafting, reviewing, and filing legal forms according to Canadian law.",
//               },
//               {
//                 title: "Timely Support",
//                 desc: "Fast and accurate processing to avoid delays and rejections.",
//               },
//             ].map((item, i) => (
//               <motion.div key={i} variants={fadeUp}>
//                 <h5 className="text-xl font-semibold mb-3 underline text-[#26374A]">
//                   {item.title}
//                 </h5>
//                 <p className="text-muted-foreground text-lg">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* ABOUT */}
//       <section className="py-24 bg-gray-50">
//         <motion.div
//           className="max-w-4xl mx-auto px-6 text-center"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={stagger}
//         >
//           <motion.h2
//             variants={fadeUp}
//             className="text-5xl font-extrabold mb-8 text-[#26374A]"
//           >
//             About <span className="">Paralegal Services</span>
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             className="text-lg text-muted-foreground leading-relaxed"
//           >
//             Paralegals in Canada are trained professionals authorized to provide
//             legal services under the Law Society of Ontario. Our paralegals
//             assist clients with immigration filings, small claims, tribunal
//             representation, and legal advice within their authorized scope. We
//             bridge the gap between complex legal requirements and accessible
//             support.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="py-24 bg-white">
//         <motion.div
//           className="max-w-6xl mx-auto px-6"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={stagger}
//         >
//           {/* Heading */}
//           <motion.h2
//             variants={fadeUp}
//             className="text-4xl sm:text-5xl font-extrabold text-center text-[#26374A] mb-16"
//           >
//             Why <span className="">Choose Us</span>
//           </motion.h2>

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Certified Professionals",
//                 desc: "All our paralegals are licensed and recognized by Canadian authorities.",
//               },
//               {
//                 title: "Transparent Fees",
//                 desc: "No hidden costs. Clear pricing and upfront consultations.",
//               },
//               {
//                 title: "Personalized Guidance",
//                 desc: "Tailored solutions based on your individual legal needs.",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 className="bg-gray-100 rounded-[24px] p-8 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2"
//               >
//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-[#26374A] mb-3">
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 text-[16px] leading-7">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* PROCESS */}
//       <section className="py-24 bg-gray-50">
//         <motion.div
//           className="max-w-6xl mx-auto px-6"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={stagger}
//         >
//           {/* Heading */}
//           <motion.h2
//             variants={fadeUp}
//             className="text-4xl sm:text-5xl font-extrabold text-center text-[#26374A] mb-16"
//           >
//             Our <span className="">Process</span>
//           </motion.h2>

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: "Consultation",
//                 desc: "Understanding your legal needs and eligibility.",
//               },
//               {
//                 title: "Documentation",
//                 desc: "Preparing and reviewing all required legal forms accurately.",
//               },
//               {
//                 title: "Submission",
//                 desc: "Filing applications with precision to relevant authorities.",
//               },
//               {
//                 title: "Follow-Up",
//                 desc: "Regular updates and status tracking until completion.",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeUp}
//                 className="bg-white rounded-[24px] p-8 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2 flex flex-col"
//               >
//                 {/* Step Number */}
//                 <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#26374A] text-white font-bold text-lg">
//                   {String(i + 1).padStart(2, "0")}
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-[#26374A] mb-3">
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 text-[15px] leading-7">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* BENEFITS SECTION */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           {/* HEADING */}
//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl md:text-5xl text-[#26374A] font-extrabold text-center mb-14"
//           >
//             Benefits of Our <span className="">Paralegal Services</span>
//           </motion.h2>

//           {/* CARDS */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {[
//               {
//                 title: "Cost-Effective",
//                 desc: "Affordable services compared to hiring full-time lawyers.",
//               },
//               {
//                 title: "Time-Saving",
//                 desc: "Expert handling of forms and filings reduces unnecessary delays.",
//               },
//               {
//                 title: "Legal Accuracy",
//                 desc: "Ensures compliance with Canadian regulations and procedures.",
//               },
//               {
//                 title: "Stress-Free Experience",
//                 desc: "We handle paperwork so you can focus on your personal or business priorities.",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2 flex flex-col"
//               >
//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-[#26374A] mb-2">
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 text-[15px] leading-7">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* CTA */}
//       <section className="py-24 text-center bg-gray-100">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-5xl font-extrabold mb-4 text-[#26374A]">
//             Get Expert Paralegal Support Today
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-xl mx-auto">
//             Connect with our licensed Canadian paralegals and simplify your
//             legal journey. Accurate, fast, and reliable service for individuals
//             and businesses.
//           </p>
//         </motion.div>
//       </section>
//       <Footer />
//     </div>
//   );
// }


"use client";

import Footer from "@/components/layout/Footer";
import ServiceBreadcrumb from "@/components/ServiceBreadcrumb";
import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative py-24 text-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <ServiceBreadcrumb current="Paralegal Services in Canada" />

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#26374A]"
          >
            Paralegal Services in Canada
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Expert paralegal support for legal documentation, dispute resolution,
            and regulatory advisory services. Simplifying complex Canadian legal
            procedures for individuals and businesses.
          </motion.p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <motion.div
          className="w-full mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl font-extrabold text-center mb-16 text-[#26374A]"
          >
            Our <span className="">Expert Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              {
                title: "Small Claims & Tribunals",
                desc: "Assistance with small claims court matters, administrative tribunal representation, and procedural hearings.",
              },
              {
                title: "Legal Documentation & Affidavits",
                desc: "Drafting, commissioning, reviewing, and filing legal forms in accordance with Canadian regulations.",
              },
              {
                title: "Compliance & Advisory",
                desc: "Professional procedural guidance to help individuals and businesses navigate regulatory frameworks.",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <h3 className="text-xl font-semibold mb-3 underline text-[#26374A]">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-gray-50">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl font-extrabold mb-8 text-[#26374A]"
          >
            About <span className="">Paralegal Services</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Paralegals in Canada are trained legal professionals authorized to
            provide specialized legal services. Our paralegal team assists
            clients with small claims, tribunal proceedings, statutory
            declarations, affidavits, and procedural legal advice within their
            authorized scope of practice.
          </motion.p>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold text-center text-[#26374A] mb-16"
          >
            Why <span className="">Choose Us</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Authorized Professionals",
                desc: "Qualified legal practitioners operating strictly within their licensed scope in Canada.",
              },
              {
                title: "Transparent Fees",
                desc: "No hidden costs. Clear pricing, upfront quotes, and predictable billing.",
              },
              {
                title: "Personalized Guidance",
                desc: "Tailored solutions based on your individual legal and procedural needs.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-gray-100 rounded-[24px] p-8 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-[#26374A] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[16px] leading-7">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold text-center text-[#26374A] mb-16"
          >
            Our <span className="">Process</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Consultation",
                desc: "Understanding your matter, documentation, and specific legal objectives.",
              },
              {
                title: "Documentation",
                desc: "Drafting, commissioning, and reviewing all required paperwork accurately.",
              },
              {
                title: "Submission",
                desc: "Filing records and applications with precision to relevant bodies or courts.",
              },
              {
                title: "Follow-Up",
                desc: "Regular updates and active tracking until your case is concluded.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-[24px] p-8 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Step Number */}
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#26374A] text-white font-bold text-lg">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#26374A] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[15px] leading-7">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl text-[#26374A] font-extrabold text-center mb-14"
          >
            Benefits of Our <span className="">Paralegal Services</span>
          </motion.h2>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Cost-Effective",
                desc: "Affordable and accessible legal assistance for your routine matters.",
              },
              {
                title: "Time-Saving",
                desc: "Expert handling of forms and filings reduces unnecessary delays.",
              },
              {
                title: "Legal Accuracy",
                desc: "Ensures compliance with Canadian statutory standards and court rules.",
              },
              {
                title: "Stress-Free Experience",
                desc: "We manage paperwork and filings so you can focus on your priorities.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-[#26374A] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[15px] leading-7">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold mb-4 text-[#26374A]">
            Get Expert Paralegal Support Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Connect with our Canadian paralegal team for accurate, timely, and
            reliable documentation and procedural support.
          </p>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
