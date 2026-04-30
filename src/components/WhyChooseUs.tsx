"use client";

import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
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

export default function WhyChooseUs() {
  const features = [
    {
      title: "Certified Professionals",
      desc: "Licensed and recognized experts you can trust.",
    },
    {
      title: "Transparent Fees",
      desc: "No hidden costs, clear and honest pricing.",
    },
    {
      title: "Personalized Guidance",
      desc: "Solutions tailored to your unique needs.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >

        {/* HEADING */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-foreground mb-12 underline underline-offset-8 decoration-red-600"
        >
          Why <span className="text-red-600">Choose Us</span>
        </motion.h2>

        {/* LIST */}
        <motion.ul
          className="space-y-8 text-left inline-block"
          variants={stagger}
        >
          {features.map((item, index) => (
            <motion.li
              key={index}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 group transition"
            >
              {/* ICON */}
              <div className="mt-1">
                <CheckCircle
                  className="text-red-600 transition-transform duration-300 group-hover:scale-110"
                  size={22}
                />
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

      </motion.div>
    </section>
  );
}