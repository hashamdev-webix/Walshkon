"use client";

import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
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

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative h-[300px] flex items-center justify-center bg-gray-100 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
          className="absolute w-full h-full object-cover opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        <motion.h1
          className="text-6xl text-[#26374A] font-extrabold relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
      </section>

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold mb-4 text-[#26374A]"
          >
            Let’s Connect with <span className="">Walshkon Consultants</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-600 mb-8">
            Whether you’re planning to study, work, or settle abroad — our
            expert consultants will guide you at every step.
          </motion.p>

          {/* CONTACT CARDS */}
          <motion.div className="space-y-4" variants={stagger}>
            {[
              { label: "Call", value: "+1 226-782-0177" },
              { label: "Email", value: "info@walshkonconsultant.com" },
              {
                label: "Location",
                value: "Unit 307-B , 3016 5 Ave NE, Calgary, AB T2A 5L7",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.01 }}
                className="border rounded-lg p-4 bg-gray-50 hover:shadow-md transition"
              >
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="font-semibold text-lg">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border rounded-xl p-8 shadow-sm"
        >
          <h3 className="text-2xl font-semibold mb-6">
            Request a Free Consultation
          </h3>

          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name *</label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email *</label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded px-4 py-2 mt-1 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Your message"
                className="w-full border rounded px-4 py-2 mt-1 focus:ring-2 focus:ring-red-500"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#26374A] text-white px-6 py-2 rounded  transition"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FAQ />
        </motion.div>
      </section>

      {/* MAP */}
      <section className="py-16 bg-white">
        <motion.h2
          className="text-center text-2xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Visit Our Office
        </motion.h2>

        <motion.div
          className="max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps?q=3016+5+Ave+NE,+Calgary&output=embed"
            className="w-full h-[350px] rounded-lg border"
            loading="lazy"
          ></iframe>
        </motion.div>
        <Footer />
      </section>
    </div>
  );
}
