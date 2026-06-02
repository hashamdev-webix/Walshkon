"use client";
import CircleProgress from "@/components/CircleProgress";
import ContactStrip from "@/components/ContactStripe";
import Footer from "@/components/layout/Footer";

import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }, // trigger when 40% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const data = [
    "Immigration & Visa Consulting",
    "Legal Services (India & Canada-related matters)",
    "Recruitment & Workforce Solutions",
    "IT & Digital Services",
    "Real Estate (Buy, Sell & Rent)",
  ];
  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative h-[650px] flex items-center justify-center bg-gray-50">
        {/* Image */}
        <img
          src="/hero-image.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <h1 className="text-5xl font-extrabold relative z-10 mt-32 text-white underline text-center">
          About Walshkon Consultants
        </h1>
      </section>

      {/* ABOUT COMPANY */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT: IMAGE SIDE */}
            <div className="relative mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* MAIN LARGE IMAGE */}
                <img
                  src="https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/studentVisa-D9mV2VIa-scaled.jpg?resize=768%2C512&ssl=1"
                  className="rounded-2xl w-full h-[400px] object-cover shadow-2xl mb-12 lg:mb-0"
                  alt="Main Company View"
                />

                {/* SMALL FLOAT IMAGE */}
                <motion.img
                  src="https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/VisaImg-CwwY4Qzk.jpg?resize=300%2C169&ssl=1"
                  className="absolute -bottom-28 ml-28 w-84 h-48 object-cover rounded-xl shadow-2xl border-4 border-blue-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  alt="Consultation View"
                />
              </motion.div>
            </div>

            {/* RIGHT CONTENT: TEXT & STATS */}
            <div className="flex flex-col">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-gray-800 text-lg font-bold  uppercase mb-4"
              >
                About Company
              </motion.h4>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-extrabold text-[#26374A] mb-6 leading-tight"
              >
                Welcome to Walshkon Consultants
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-lg leading-relaxed mb-8"
              >
                Walshkon Consultants is a trusted multi-service consulting firm
                delivering professional solutions across immigration, legal
                services, recruitment, IT, real estate, finance, and digital
                growth. We support individuals, professionals, and businesses
                with expert guidance, transparent processes, and results-driven
                strategies.
              </motion.p>

              {/* STATS SECTION */}
              <div ref={ref} className="flex gap-12 mt-4">
                <div className="flex flex-col items-center">
                  <CircleProgress value={76} start={visible} />
                  <p className="text-lg font-bold text-gray-800 mt-4 text-center">
                    Business <br /> Strategy
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <CircleProgress value={69} start={visible} />
                  <p className="text-lg font-bold text-gray-800 mt-4 text-center">
                    Tech <br /> Solutions
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <h1 className="text-4xl font-extrabold ">
                  What We Specialize In
                </h1>

                <ul className="mt-6">
                  {data.map((item, index) => (
                    <div className="flex flex-row gap-2 items-center my-3">
                      <CircleCheck className="text-[#26374A] fill-accent w-5 h-5" />
                      <li className="text-lg font-bold">{item}</li>
                    </div>
                  ))}
                </ul>
                <div className="w-[600px] h-[300px] rounded-lg bg-gray-200 p-4">
                  <h2 className="text-gray-600 font-extrabold text-2xl">
                    Why Choose Us?
                  </h2>
                  <p className="mt-3 text-gray-800 text-lg">
                    Our experienced team delivers customized solutions based on
                    your unique goals. From immigration filings and legal
                    documentation to recruitment, IT solutions, and property
                    advisory — we handle the complexity so you don’t have to. We
                    believe in long-term relationships, not one-time
                    transactions. Every client receives dedicated attention,
                    reliable guidance, and clear communication throughout the
                    process.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      {/* SERVICES */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-gray-800 font-extrabold uppercase tracking-wider text-sm sm:text-base">
              Services We Provide
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-[#26374A]">
              Explore Our <span className="">Professional</span>
              <br />
              Consulting <span className="">Services</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-[28px] p-6 text-center shadow-sm hover:shadow-md transition flex flex-col">
              <h3 className="text-2xl font-extrabold leading-snug text-[#26374A] mb-4">
                Immigration
                <br />
                <span>Services</span>
              </h3>

              <p className="text-gray-800 text-sm leading-8 mb-6">
                End-to-end immigration support for study visas, work permits,
                permanent residency, and family sponsorship. Our experts handle
                eligibility assessment, documentation, application filing, and
                follow-ups to ensure a smooth and successful immigration
                process.
              </p>

              <img
                src="https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/BusinessVisa-BM325Svr-scaled.jpg?w=1200&ssl=1"
                alt="Immigration Services"
                className="w-full h-56 object-cover rounded-[24px] border border-red-300 mt-auto"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-[28px] p-6 text-center shadow-sm hover:shadow-md transition flex flex-col">
              <h3 className="text-2xl font-extrabold leading-snug text-gray-900 mb-4">
                Legal <span className="text-[#26374A]">Services</span>
              </h3>

              {/* ❗ fixed: text-smleading-8 → text-sm leading-8 */}
              <p className="text-gray-700 text-sm leading-8 mb-6">
                Reliable legal assistance for documentation, affidavits, power
                of attorney, attestations, and compliance-related matters. We
                ensure accuracy, confidentiality, and legal validity while
                supporting individuals and businesses with India-related legal
                requirements.
              </p>

              <img
                src="https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/studentVisa-D9mV2VIa-scaled.jpg?w=1200&ssl=1"
                alt="Legal Services"
                className="w-full h-56 object-cover rounded-[24px] border border-red-300 mt-auto"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 rounded-[28px] p-6 text-center shadow-sm hover:shadow-md transition flex flex-col">
              <h3 className="text-2xl font-extrabold leading-snug text-gray-900 mb-4">
                Recruitment <span className="text-[#26374A]">Solution</span>
              </h3>

              <p className="text-gray-700 text-sm leading-8 mb-6">
                Strategic recruitment solutions connecting skilled professionals
                with trusted employers. We manage candidate screening,
                interviews, and placements while helping businesses build strong
                teams and assisting job seekers in finding suitable career
                opportunities.
              </p>

              <img
                src="https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/WorkVisa-Doae4KIL-scaled.jpg?w=1200&ssl=1"
                alt="Recruitment Solution"
                className="w-full h-56 object-cover rounded-[24px] border border-red-300 mt-auto"
              />
            </div>

            {/* Card 4 */}
            <div className="bg-gray-100 rounded-[28px] p-6 text-center shadow-sm hover:shadow-md transition flex flex-col">
              <h3 className="text-2xl font-extrabold leading-snug text-gray-900 mb-4">
                IT <span className="text-[#26374A]">Services</span>
              </h3>

              <p className="text-gray-700 text-sm leading-8 mb-6">
                Comprehensive IT services including website development,
                software solutions, digital marketing integration, and technical
                consulting. We help businesses improve efficiency, enhance
                online presence, and achieve digital transformation through
                modern technologies.
              </p>

              <img
                src="https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/BlogImage4-HsOfMRnz-scaled.jpg?w=1200&ssl=1"
                alt="IT Services"
                className="w-full h-56 object-cover rounded-[24px] border border-red-300 mt-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      {/* Most Trusted */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="max-w-[420px]">
              <h2 className="text-[48px] sm:text-[58px] lg:text-[64px] font-extrabold leading-[1.05] tracking-tight">
                <span className="text-[#26374A] block"> Most Trusted</span>
                <span className="text-[#26374A] block">Walshkon</span>
                <span className="text-[#] block">Consultant</span>
                <span className="text-[#] block">Service</span>
                <span className="text-[#] block">Provider</span>
              </h2>

              <p className="text-gray-800 text-lg mt-6 leading-9 max-w-md">
                With 6+ years of professional experience, Walshkon Consultants
                has successfully assisted thousands of clients across multiple
                sectors. Our commitment to quality, accuracy, and client
                satisfaction has made us a trusted consulting partner worldwide.
              </p>
            </div>

            {/* Right Stats */}
            <div className="flex flex-wrap lg:flex-nowrap justify-start lg:justify-center gap-6">
              {/* Card 1 */}
              <div className="bg-white w-[180px] min-h-[210px] rounded-[28px] px-6 py-7 flex flex-col items-center justify-center text-center shadow-md">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-[30px] mb-5">
                  🌎
                </div>
                <h3 className="text-gray-800 text-[22px] font-extrabold mb-2">
                  35+
                </h3>
                <p className="text-gray-800 text-[15px] leading-7">
                  Countries
                  <br />
                  Represented
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white w-[180px] min-h-[210px] rounded-[28px] px-6 py-7 flex flex-col items-center justify-center text-center shadow-md">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-[30px] mb-5">
                  🎓
                </div>
                <h3 className="text-gray-800 text-[22px] font-extrabold mb-2">
                  25K+
                </h3>
                <p className="text-gray-800 text-[15px] leading-7">
                  Successful Visas
                  <br />
                  Delivered
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white w-[180px] min-h-[210px] rounded-[28px] px-6 py-7 flex flex-col items-center justify-center text-center shadow-md">
                <div className="w-16 h-16 rounded-full bg-gray-200  flex items-center justify-center text-[30px] mb-5">
                  ✅
                </div>
                <h3 className="text-gray-800 text-[22px] font-extrabold mb-2">
                  99%
                </h3>
                <p className="text-gray-800 text-[15px] leading-7">
                  Approval Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TRUST SECTION */}
      {/* Why People Trust Us */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              <span className="text-[#26374A]">Why People</span>{" "}
              <span className="">Trust Us</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-200 rounded-[28px] p-8 shadow-md">
              <div className="text-[#26374A] text-5xl leading-none mb-4">“</div>

              <h3 className="text-[#26374A] text-2xl font-bold mb-3">
                Professional Guidance
              </h3>

              <div className="text-yellow-500 text-lg mb-5">★ ★ ★ ★ ★</div>

              <p className="text-[#26374A] text-[16px] leading-8">
                “Walshkon Consultants handled my immigration and legal
                documentation with precision. Their team explained everything
                clearly and ensured a smooth and stress-free process. Truly
                reliable professionals.”
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-200 rounded-[28px] p-8 shadow-md">
              <div className="text-[#26374A] text-5xl leading-none mb-4">“</div>

              <h3 className="text-[#26374A] text-2xl font-bold mb-3">
                Excellent Support
              </h3>

              <div className="text-yellow-500 text-lg mb-5">★ ★ ★ ★ ☆</div>

              <p className="text-[#26374A] text-[16px] leading-8">
                “I used Walshkon Consultants for recruitment and IT support.
                Their team was responsive, knowledgeable, and solution-oriented.
                I highly recommend them for professional consulting services.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="py-12 border-t">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-center md:text-left">
          <ContactStrip />
        </div>
        <Footer />
      </section>
    </div>
  );
}
