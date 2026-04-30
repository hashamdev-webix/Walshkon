"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function MortgageServicesPage() {
  return (
    <div className="bg-white">

      {/* ================= HERO / HEADER ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-extrabold mb-6 text-[#26374A]"
          >
            Mortgage <span className="">Services</span>
          </motion.h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            Simplifying your mortgage journey with expert guidance, tailored solutions, and reliable support. 
            Helping you secure the best home or property loans in Canada.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-extrabold mb-6 text-[#26374A]"
          >
            About Our <span className="">Mortgage Services</span>
          </motion.h2>
          <div className="text-gray-600 leading-relaxed text-lg space-y-6">
            <p>
              Our mortgage services help individuals and families navigate the complex process of securing 
              property loans. From first-time homebuyers to investors, we provide expert advice and personalized solutions.
            </p>
            <p>
              We guide you through interest rates, loan options, approvals, and documentation, 
              ensuring a smooth, stress-free experience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
     {/* MORTGAGE SOLUTIONS */}
<section className="py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-extrabold text-center mb-20 text-[#26374A]"
    >
      Our Mortgage <span>Solutions</span>
    </motion.h2>

    {/* Services (No Cards) */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 text-center">

      {[
        {
          title: "First-Time Homebuyers",
          desc: "Personalized guidance and financial planning for purchasing your first property.",
        },
        {
          title: "Refinancing Options",
          desc: "Reduce your interest rates or adjust loan terms for better financial flexibility.",
        },
        {
          title: "Investment Properties",
          desc: "Assistance in securing mortgages for rental and investment properties.",
        },
        {
          title: "Mortgage Renewal",
          desc: "We help you renew your mortgage at competitive rates to maximize savings.",
        },
        {
          title: "Debt Consolidation",
          desc: "Combine multiple debts into a single mortgage solution to reduce payments.",
        },
        {
          title: "Pre-Approval Guidance",
          desc: "Get pre-approved for mortgages to confidently search for your ideal property.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex flex-col items-center"
        >
          {/* Title */}
          <h3 className="text-[20px] font-semibold text-[#26374A] underline mb-4">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-[17px] leading-8 max-w-sm">
            {item.desc}
          </p>
        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* ================= PROCESS ================= */}
     {/* MORTGAGE PROCESS */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-extrabold text-center mb-14 text-[#26374A]"
    >
      Our Mortgage <span className="">Process</span>
    </motion.h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "Consultation",
          desc: "Understand your financial situation and mortgage needs.",
        },
        {
          title: "Application",
          desc: "Complete and submit mortgage applications with expert guidance.",
        },
        {
          title: "Approval",
          desc: "We liaise with lenders to secure approval at competitive rates.",
        },
        {
          title: "Closing",
          desc: "Finalize the mortgage, ensuring all documentation and payments are accurate.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-gray-100 rounded-[24px] p-8 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2 flex flex-col"
        >

          {/* Step Number */}
          <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#26374A] text-white font-bold text-lg">
            {String(i + 1).padStart(2, "0")}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#26374A] mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-[14px] leading-6">
            {item.desc}
          </p>

        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* ================= BENEFITS ================= */}
     {/* BENEFITS - CHOOSING US */}
<section className="py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-extrabold text-center mb-14 text-[#26374A]"
    >
      Benefits of{" "}
      <span className="">Choosing Us</span>
    </motion.h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "Expert Guidance",
          desc: "Licensed mortgage advisors to assist you every step of the way.",
          icon: "🎯",
        },
        {
          title: "Competitive Rates",
          desc: "Access to the best rates and mortgage programs available.",
          icon: "💰",
        },
        {
          title: "Fast Approvals",
          desc: "Streamlined process to reduce waiting time and paperwork.",
          icon: "⚡",
        },
        {
          title: "Personalized Solutions",
          desc: "Custom mortgage plans tailored to your unique financial goals.",
          icon: "🧩",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-white rounded-[24px] p-8 text-center shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-2 flex flex-col"
        >

         

          {/* Title */}
          <h3 className="text-lg font-bold text-[#26374A] mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-[14px] leading-6">
            {item.desc}
          </p>

        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-white text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gray-100 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto text-[#26374A]  shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Mortgage Today
          </h2>
          <p className="text-gray-800 mb-8 text-lg">
            Partner with our mortgage experts and get the ideal financing solution for your home or property.
          </p>
          <Link href="/contact" className="bg-[#26374A]  text-white font-bold py-3 px-8 rounded-full text-lg  transition-colors">
            Contact Us
          </Link>
        </motion.div>
      </section>

    </div>
  );
}