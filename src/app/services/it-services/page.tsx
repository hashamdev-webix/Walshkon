"use client";

import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ITServicesPage() {
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
            IT <span className="">Services</span>
          </motion.h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            Providing innovative IT solutions and professional technology
            services to streamline business operations, improve efficiency, and
            enhance security.
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
            About Our <span className="">IT Services</span>
          </motion.h2>
          <div className="text-gray-600 leading-relaxed text-lg space-y-6">
            <p>
              Our IT services cover a broad spectrum including software
              development, cloud solutions, IT infrastructure management,
              cybersecurity, and helpdesk support. We focus on delivering
              solutions that are tailored to your business needs.
            </p>
            <p>
              With a team of certified IT professionals, we ensure businesses
              can leverage the latest technology to improve performance, reduce
              costs, and stay ahead of competition.
            </p>
          </div>
        </div>
      </section>

      {/* ================= IT SOLUTIONS ================= */}

      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-20 text-[#26374A]"
          >
            Our IT <span>Solutions</span>
          </motion.h2>

          {/* Services (No Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 text-center">
            {[
              {
                title: "Software Development",
                desc: "Custom software solutions designed to enhance productivity and business growth.",
              },
              {
                title: "Cloud Services",
                desc: "Secure cloud hosting, migration, and management to optimize business operations.",
              },
              {
                title: "Cybersecurity",
                desc: "Protect your business with our comprehensive security assessments and solutions.",
              },
              {
                title: "IT Support",
                desc: "24/7 technical support and troubleshooting for uninterrupted business continuity.",
              },
              {
                title: "Network Management",
                desc: "Installation, monitoring, and management of networks for maximum performance.",
              },
              {
                title: "Data Backup & Recovery",
                desc: "Reliable backup solutions and recovery services to prevent data loss.",
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

      {/* ================= SERVICE PROCESS ================= */}
      {/* IT SERVICE PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-14 text-[#26374A]"
          >
            Our IT <span className="">Service Process</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Assessment",
                desc: "We evaluate your current IT infrastructure and business requirements.",
              },
              {
                title: "Planning",
                desc: "Design a roadmap with solutions that fit your objectives and budget.",
              },
              {
                title: "Implementation",
                desc: "Deploy solutions efficiently with minimal disruption to your operations.",
              },
              {
                title: "Monitoring",
                desc: "Continuous monitoring and support to ensure reliability and security.",
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
          className="bg-white rounded-3xl p-10 md:p-16 max-w-4xl mx-auto text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#26374A]">
            Partner with Our IT Experts Today
          </h2>
          <p className="text-gray-800 mb-8 text-lg">
            Let us help your business leverage technology for growth,
            efficiency, and security.
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
