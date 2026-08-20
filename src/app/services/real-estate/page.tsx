"use client";

import Footer from "@/components/layout/Footer";
import ServiceBreadcrumb from "@/components/ServiceBreadcrumb";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function RealEstatePage() {
  return (
    <div className="bg-white">
      {/* ================= HERO / HEADER ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ServiceBreadcrumb current="Buy, Sell, and Rent Homes" />

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-extrabold mb-6 text-[#26374A]"
          >
            Buy, Sell, and <span className="">Rent Homes</span>
          </motion.h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            Your trusted real estate partner for buying, selling, or renting
            homes. Expert guidance, reliable listings, and smooth transactions
            for every client.
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
            About Our <span className="">Real Estate Services</span>
          </motion.h2>
          <div className="text-gray-600 leading-relaxed text-lg space-y-6">
            <p>
              We specialize in helping clients buy, sell, and rent residential
              and commercial properties. Our team ensures a transparent, smooth,
              and professional process at every step.
            </p>
            <p>
              From property valuation to finalizing deals, we provide expert
              assistance to make your real estate experience stress-free and
              rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES (SOLUTIONS) ================= */}

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
                title: "Buying Homes",
                desc: "We help clients find the perfect property based on budget, location, and preferences.",
              },
              {
                title: "Selling Homes",
                desc: "Expert guidance to sell properties quickly at the best market value.",
              },
              {
                title: "Rental Assistance",
                desc: "Helping tenants and landlords connect efficiently for hassle-free rentals.",
              },
              {
                title: "Property Valuation",
                desc: "Professional evaluation of homes to determine accurate market prices.",
              },
              {
                title: "Paralegal Documentation",
                desc: "Support with all paperwork and contracts to ensure compliance.",
              },
              {
                title: "Market Analysis",
                desc: "Insights and advice to make informed buying or selling decisions.",
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
      {/* REAL ESTATE PROCESS */}
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
                desc: "Understand your property needs, budget, and preferences.",
              },
              {
                title: "Listing & Search",
                desc: "We create listings or search for properties matching your requirements.",
              },
              {
                title: "View & Negotiate",
                desc: "Arrange property visits and negotiate the best deal for you.",
              },
              {
                title: "Close & Handover",
                desc: "Complete all paperwork and ensure smooth property transfer.",
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
      {/* BENEFITS - WORKING WITH US */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-14 text-[#26374A]"
          >
            Benefits of <span className="">Working With Us</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Trusted Experts",
                desc: "Professional real estate advisors to guide every step of the process.",
                icon: "👨‍💼",
              },
              {
                title: "Wide Property Network",
                desc: "Access to a broad range of properties for buying, selling, or renting.",
                icon: "🏘️",
              },
              {
                title: "Transparent Deals",
                desc: "No hidden costs. Honest pricing and clear agreements.",
                icon: "📑",
              },
              {
                title: "Stress-Free Process",
                desc: "We handle paperwork and negotiations so you can focus on your goals.",
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
            Find Your Dream Home Today
          </h2>
          <p className="text-[#26374A] mb-8 text-lg">
            Contact our real estate experts to buy, sell, or rent properties
            efficiently and safely.
          </p>
          <Link
            href="/contact"
            className="bg-[#26374A] text-white font-bold py-3 px-8 rounded-full text-lg  transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
