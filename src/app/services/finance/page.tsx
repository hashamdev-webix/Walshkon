"use client";

import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from 'next/link';

const FinanceServicesPage = () => {
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
            Finance <span className="">Services</span>
          </motion.h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            Professional financial solutions for individuals and businesses. From planning and 
            investment to loans and risk management, we help you secure your financial future.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl text-[#26374A] font-extrabold mb-6"
          >
            About Our <span className="">Finance Services</span>
          </motion.h2>
          <div className="text-gray-600 leading-relaxed text-lg space-y-6">
            <p>
              Our finance experts provide personalized strategies to manage your wealth, optimize investments, 
              and plan for the future. We combine industry knowledge with client-centric solutions for maximum benefit.
            </p>
            <p>
              We assist in budgeting, tax planning, retirement planning, loans, and investment management 
              to ensure financial stability and growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
   
<section className="py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-extrabold text-center mb-20 text-[#26374A]"
    >
      Our <span>Services</span>
    </motion.h2>

    {/* Services (No Cards) */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 text-center">

      {[
        {
          title: "Investment Planning",
          desc: "Expert guidance to grow your wealth through smart and strategic investments.",
        },
        {
          title: "Tax Planning",
          desc: "Reduce tax liabilities legally with careful planning and expert advice.",
        },
        {
          title: "Loan Assistance",
          desc: "Support in selecting the best personal, business, or mortgage loans.",
        },
        {
          title: "Retirement Planning",
          desc: "Secure your future with personalized retirement strategies and savings plans.",
        },
        {
          title: "Risk Management",
          desc: "Minimize financial risks with proper insurance and asset management.",
        },
        {
          title: "Financial Advisory",
          desc: "Get professional advice tailored to your financial goals and situation.",
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
          title: "Consultation",
          desc: "Understand your financial situation and objectives.",
        },
        {
          title: "Planning",
          desc: "Develop a personalized financial strategy to achieve your goals.",
        },
        {
          title: "Implementation",
          desc: "Execute the plan with investments, loans, and insurance solutions.",
        },
        {
          title: "Monitoring",
          desc: "Track progress, adjust strategies, and ensure optimal results.",
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
      {/* BENEFITS - FINANCE SERVICES */}
<section className="py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-bold text-center mb-14 text-[#26374A]"
    >
      Benefits of{" "}
      <span className="">Our Finance Services</span>
    </motion.h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "Expert Guidance",
          desc: "Work with certified financial advisors with years of experience.",
          icon: "🎯",
        },
        {
          title: "Tailored Solutions",
          desc: "Services customized according to your financial needs and goals.",
          icon: "🧩",
        },
        {
          title: "Reliable Support",
          desc: "Ongoing assistance and monitoring to keep your finances on track.",
          icon: "🤝",
        },
        {
          title: "Peace of Mind",
          desc: "Reduce financial stress and secure your financial future.",
          icon: "😌",
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
          className="bg-gray-100 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto text-[#26374A] shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Financial Journey Today
          </h2>
          <p className="text-[#26374A] mb-8 text-lg">
            Contact our finance experts to create a solid plan for investments, savings, and wealth management.
          </p>
          <Link href="/contact" className="bg-[#26374A] text-white font-bold py-3 px-8 rounded-full text-lg  transition-colors">
            Get Consultation
          </Link>
        </motion.div>
      </section>

    </div>
  );
}

export default FinanceServicesPage;