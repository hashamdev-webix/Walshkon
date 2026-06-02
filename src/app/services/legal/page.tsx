"use client";

import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Link } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative py-24 text-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          className="max-w-5xl w-full mx-auto px-6"
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="text-5xl font-extrabold tracking-tight mb-6 text-[#26374A] ">
            Legal Services for Indians – India Matters
          </motion.h1>

          <motion.p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto my-2">
            *Our legal services are provided exclusively within the jurisdiction
            of India.
          </motion.p>

          <motion.p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Expert legal assistance for Indians dealing with India-related
            matters, including property, family, and business legalities.
            Simplifying complex Indian legal processes for individuals and
            organizations.
          </motion.p>
        </motion.div>
      </section>
      {/* ================= CORE SERVICES ================= */}
      {/* CORE SERVICES */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl text-[#26374A] font-extrabold text-center mb-20"
          >
            Our Core <span>Services</span>
          </motion.h2>

          {/* Services (No Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            {[
              {
                title: "Property & Real Estate",
                desc: "Legal support for property transactions, inheritance, and land disputes in India.",
              },
              {
                title: "Family Law",
                desc: "Guidance on marriage, divorce, custody, and domestic agreements.",
              },
              {
                title: "Business & Corporate",
                desc: "Support with business registrations, compliance, contracts, and legal advisory.",
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
                <h3 className="text-[22px] font-semibold text-[#26374A] underline mb-4">
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

      {/* ================= ABOUT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl text-[#26374A] md:text-5xl font-extrabold mb-6 "
          >
            About Our <span className="text-[#26374A]">Legal Services</span>
          </motion.h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            We specialize in providing legal services exclusively for Indian
            clients on matters relating to India. Our experienced lawyers and
            legal consultants handle property disputes, family cases, business
            agreements, and more. We ensure transparency, accuracy, and timely
            advice tailored to your specific situation.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      {/* WHY CHOOSE LEGAL SERVICES */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl text-[#26374A] font-extrabold text-center mb-14"
          >
            Why Choose Our <span className="">Legal Services</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Lawyers",
                desc: "Professional lawyers with deep knowledge of Indian laws and regulations.",
              },
              {
                title: "Client-Focused",
                desc: "Solutions designed according to your individual needs and priorities.",
              },
              {
                title: "Affordable & Transparent",
                desc: "Clear fees with no hidden charges. Value-driven legal services.",
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
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-14 text-[#26374A]"
          >
            Our <span className="">Process</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Initial Consultation",
                desc: "Understanding your legal issues and requirements.",
              },
              {
                title: "Documentation",
                desc: "Preparing and reviewing necessary legal documents.",
              },
              {
                title: "Legal Filing",
                desc: "Submitting paperwork to courts or authorities in India.",
              },
              {
                title: "Follow-Up & Resolution",
                desc: "Tracking progress and guiding you until matter is resolved.",
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
      {/* BENEFITS - LEGAL SERVICES */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-14 text-[#26374A]"
          >
            Benefits of <span className="">Our Legal Services</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Knowledge",
                desc: "Legal matters handled by professionals familiar with Indian law.",
              },
              {
                title: "Time Efficient",
                desc: "Quick processing and guidance to save your time.",
              },
              {
                title: "Trusted Support",
                desc: "Reliable advice and representation for Indian matters.",
              },
              {
                title: "Peace of Mind",
                desc: "We manage legal complexities so you can focus on your priorities.",
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
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-5xl text-[#26374A] font-extrabold mb-4">
          Get Expert Legal Support for India Matters
        </h2>
        <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
          Contact our legal professionals today and get accurate, timely, and
          reliable support for all India-related legal matters.
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="bg-[#26374A] text-white px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-md font-medium hover:bg-[#444444] transition cursor-pointer"
        >
          Contact Us
        </button>
      </section>
      <Footer />
    </div>
  );
}
