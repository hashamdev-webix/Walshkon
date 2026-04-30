"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function RecruitmentPage() {
  return (
    <div className="bg-white">

      {/* ================= HERO / HEADER ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl text-[#26374A] font-extrabold mb-6"
          >
            Recruitment <span className="">Services</span>
          </motion.h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            Connecting skilled professionals with trusted employers worldwide. Our recruitment 
            solutions are tailored to meet global workforce demands efficiently and ethically.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl text-[#26374A] font-extrabold mb-6"
          >
            About Our <span className="">Recruitment Services</span>
          </motion.h2>
          <div className="text-gray-600 leading-relaxed text-lg space-y-4">
            <p>
              We specialize in sourcing, screening, and placing qualified candidates across various industries. 
              Whether you are an employer seeking top talent or a professional looking for international 
              opportunities, our recruitment experts ensure a seamless hiring experience.
            </p>
            <p>
              Our global network and compliance-driven approach allow us to deliver recruitment solutions 
              that are fast, transparent, and aligned with international labor standards.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
  
<section className="py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-extrabold text-center mb-20 text-[#26374A]"
    >
      What We <span>Offer</span>
    </motion.h2>

    {/* Services (No Cards) */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 text-center">

      {[
        {
          title: "International Hiring",
          desc: "End-to-end recruitment solutions for companies hiring overseas talent across multiple sectors.",
        },
        {
          title: "Skilled Worker Placement",
          desc: "Matching skilled professionals with employers based on experience, skills, and legal eligibility.",
        },
        {
          title: "Employer Compliance",
          desc: "Ensuring all recruitment processes follow labor laws and immigration regulations.",
        },
        {
          title: "Candidate Screening",
          desc: "In-depth assessments, interviews, and background verification for quality hiring.",
        },
        {
          title: "Industry-Specific Recruitment",
          desc: "Specialized recruitment solutions for healthcare, IT, construction, logistics, and more.",
        },
        {
          title: "End-to-End Support",
          desc: "From job matching to onboarding assistance for both employers and candidates.",
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

      {/* ================= OUR PROCESS ================= */}
     {/* RECRUITMENT PROCESS */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-extrabold text-center mb-14 text-[#26374A]"
    >
      Our <span className="">Recruitment Process</span>
    </motion.h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "Requirement Analysis",
          desc: "Understanding employer needs and candidate expectations.",
        },
        {
          title: "Talent Sourcing",
          desc: "Identifying the best candidates through global networks.",
        },
        {
          title: "Screening & Evaluation",
          desc: "Skill assessment, interviews, and documentation review.",
        },
        {
          title: "Placement & Support",
          desc: "Successful placement with continuous post-hiring support.",
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

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gray-100 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gray-50 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#26374A]">
            Looking to Hire or Get Hired?
          </h2>
          <p className="text-gray-800 mb-8 text-lg">
            Let our recruitment experts help you find the perfect match.
          </p>
          <Link href={"/contact"} className="bg-[#26374A] text-white font-bold py-3 px-8 rounded-full text-lg cursor-pointer transition-colors">
            Get Started Today
          </Link>
        </motion.div>
      </section>

    </div>
  );
}