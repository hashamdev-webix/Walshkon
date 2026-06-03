"use client";

import Footer from "@/components/layout/Footer";
import ServiceBreadcrumb from "@/components/ServiceBreadcrumb";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function DigitalMarketingPage() {
  return (
    <div className="bg-white">
      {/* ================= HERO / HEADER ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ServiceBreadcrumb current="Digital Marketing" />

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-extrabold mb-6 text-[#26374A]"
          >
            Digital Marketing <span className="">Services</span>
          </motion.h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            Grow your brand online with targeted strategies, expert campaigns,
            and measurable results. We help businesses reach the right audience
            and drive real engagement.
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
            About Our <span className="">Digital Marketing Services</span>
          </motion.h2>
          <div className="text-gray-600 leading-relaxed text-lg space-y-6">
            <p>
              Our digital marketing services are designed to increase
              visibility, generate leads, and improve conversions. We combine
              creativity with data-driven strategies to help your business grow
              online.
            </p>
            <p>
              With experience across SEO, social media, PPC, email marketing,
              and content marketing, our team ensures every campaign aligns with
              your brand and delivers measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}

      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-20 text-[#26374A]"
          >
            Our Digital Marketing <span>Solutions</span>
          </motion.h2>

          {/* Services (No Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 text-center">
            {[
              {
                title: "Search Engine Optimization (SEO)",
                desc: "Improve your website's visibility on search engines with strategic keyword optimization and content planning.",
              },
              {
                title: "Social Media Marketing",
                desc: "Build brand awareness and engagement through targeted campaigns on platforms like Facebook, Instagram, and LinkedIn.",
              },
              {
                title: "Pay-Per-Click (PPC)",
                desc: "Drive immediate traffic and leads through targeted ad campaigns on Google Ads and social media platforms.",
              },
              {
                title: "Email Marketing",
                desc: "Create personalized campaigns to nurture leads and maintain engagement with your audience.",
              },
              {
                title: "Content Marketing",
                desc: "Develop high-quality content that educates, entertains, and converts your audience.",
              },
              {
                title: "Analytics & Reporting",
                desc: "Track performance metrics and gain actionable insights to improve future campaigns.",
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

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-14 text-[#26374A]"
          >
            Our Digital Marketing <span className="">Process</span>
          </motion.h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Research & Strategy",
                desc: "We analyze your industry, audience, and competitors to create an effective marketing plan.",
              },
              {
                title: "Campaign Setup",
                desc: "Plan and design campaigns across SEO, PPC, social media, and content platforms.",
              },
              {
                title: "Execution",
                desc: "Launch campaigns with precise targeting and continuous optimization.",
              },
              {
                title: "Analysis & Reporting",
                desc: "Monitor KPIs, measure ROI, and provide actionable reports for growth.",
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
          <h2 className="text-3xl md:text-6xl font-extrabold mb-4 text-[#26374A]">
            Boost Your Online Presence Today
          </h2>
          <p className="text-[#26374A] mb-8 text-lg">
            Partner with our digital marketing experts to drive traffic,
            generate leads, and grow your brand online.
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
