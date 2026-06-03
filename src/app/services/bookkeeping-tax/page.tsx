"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import ServiceBreadcrumb from "@/components/ServiceBreadcrumb";

const LifeInsurancePage = () => {
  return (
    <div className="bg-white">
      {/* ================= HERO / HEADER ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ServiceBreadcrumb current="Life Insurance" />

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-extrabold mb-6 text-[#26374A]"
          >
            Life <span className="">Insurance</span>
          </motion.h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            Protect your loved ones' future with comprehensive life insurance
            plans. We offer expert guidance to help you choose the right
            coverage for financial security and peace of mind.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-extrabold text-[#26374A] mb-6"
          >
            About Our <span className="">Insurance Services</span>
          </motion.h2>
          <div className="text-gray-600 leading-relaxed text-lg space-y-6">
            <p>
              Life insurance is a vital part of financial planning, ensuring
              that your family is financially supported in your absence. Our
              experts help you navigate through various policies to find one
              that fits your needs and budget.
            </p>
            <p>
              Whether you are looking for term life, whole life, or specialized
              coverage, we provide transparent advice and reliable support
              throughout the application process.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR PLANS ================= */}

      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-20 text-[#26374A]"
          >
            Our Insurance <span>Plans</span>
          </motion.h2>

          {/* Plans (No Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 text-center">
            {[
              {
                title: "Term Life Insurance",
                desc: "Affordable coverage for a specific period, providing a high death benefit for your family.",
              },
              {
                title: "Whole Life Insurance",
                desc: "Permanent coverage with a cash value component that grows over time.",
              },
              {
                title: "Critical Illness Cover",
                desc: "Financial support in case of diagnosis of serious life-threatening illnesses.",
              },
              {
                title: "Mortgage Life Insurance",
                desc: "Designed specifically to pay off your mortgage debt in the event of death.",
              },
              {
                title: "Disability Insurance",
                desc: "Replaces a portion of your income if you become unable to work due to injury or illness.",
              },
              {
                title: "Family Protection Plans",
                desc: "Customized bundles to ensure the complete financial safety of your spouse and children.",
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
      {/* INSURANCE PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-14 text-[#26374A]"
          >
            Our <span className="">Simple Process</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Needs Assessment",
                desc: "We analyze your family's financial needs and future goals.",
              },
              {
                title: "Plan Comparison",
                desc: "Compare multiple quotes and benefits from top insurance providers.",
              },
              {
                title: "Application & Medical",
                desc: "We guide you through the paperwork and any required medical screenings.",
              },
              {
                title: "Policy Issuance",
                desc: "Secure your policy and ensure your beneficiaries are protected.",
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

      {/* ================= WHY US ================= */}
      {/* INSURANCE BENEFITS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-[#26374A] text-center mb-14"
          >
            Why Choose <span className="">Our Insurance Services</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Advisors",
                desc: "Certified professionals who put your family's needs first.",
                icon: "👨‍⚕️",
              },
              {
                title: "Top-Tier Providers",
                desc: "We work with leading insurance companies to get you the best rates.",
                icon: "🏆",
              },
              {
                title: "Claims Assistance",
                desc: "Dedicated support to help your beneficiaries through the claim process.",
                icon: "📑",
              },
              {
                title: "Flexible Coverage",
                desc: "Plans that can be adjusted as your life and family grow.",
                icon: "🔄",
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
            Protect Your Family's Future
          </h2>
          <p className="text-[#26374A]  mb-8 text-lg">
            Talk to our insurance experts today and find a plan that secures
            your legacy.
          </p>
          <Link
            href="/contact"
            className="bg-[#26374A] text-white font-bold py-3 px-8 rounded-full text-lg  transition-colors"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default LifeInsurancePage;
