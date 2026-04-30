"use client";

import CountUp from "react-countup";
import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import CircleProgress from "./CircleProgress";
import { useEffect, useRef, useState } from "react";

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

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

export default function AboutSection() {

  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 } // trigger when 40% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section className="bg-gray-50 py-20">
      <h1 className="text-6xl font-extrabold  mb-6 text-[#26374A] text-center">
      About <span className="">Company</span>
    </h1>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mt-8">

        {/* LEFT IMAGE */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeLeft}
        >
          <img
            src="https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/studentVisa-D9mV2VIa-scaled.jpg?resize=768%2C512&ssl=1"
            className="rounded-2xl w-full h-[400px] object-cover shadow-md mb-28"
          />

          {/* SMALL FLOAT IMAGE */}
          <motion.img
            src="https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/VisaImg-CwwY4Qzk.jpg?resize=300%2C169&ssl=1"
            className="absolute bottom-24 -left-10 w-64 h-36 object-cover rounded-xl shadow-lg border-4 border-blue-400 "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>
 
        {/* RIGHT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >

       
          <h1 className="text-6xl md:text-6xl font-bold text-[#26374A]leading-tight underline">
  Welcome To <br />
  <span className="">Experience</span>
</h1>

          <motion.p
            variants={fadeUp}
            className="text-lg mt-6 text-gray-800 leading-relaxed text-start"
          >
         Walshkon is a multi-disciplinary professional services firm dedicated to providing reliable, transparent, and result-oriented solutions.
We combine expertise across immigration, legal services, finance, technology, recruitment, and real estate to deliver complete support under one platform.
          
          </motion.p>
<p className="text-lg text-gray-800 leading-relaxed mt-3 text-start">Our approach is client-first — understanding your goals, minimizing risks, and delivering solutions that work in the real world.

</p>
          {/* STATS */}
          <div ref={ref} className="flex gap-10 mt-8">
      <div className="flex flex-col items-center">
        <CircleProgress value={95} start={visible} />
        <p className="text-lg font-bold text-gray-800 mt-3 text-center">
          Successful <br /> Client Cases
        </p>
      </div>

      <div className="flex flex-col items-center">
        <CircleProgress value={100} start={visible} />
        <p className="text-lg font-bold text-gray-800 mt-3 text-center">
          Process <br /> Transparency
        </p>
      </div>
    </div>

          {/* FEATURES */}
          <motion.ul
            className="mt-8 space-y-4"
            variants={stagger}
          >
            {[
              "One-stop solution for multiple professional services",
              "Experienced consultants and industry specialists",
              "Transparent processes with no hidden surprises",
              "Personalized guidance for every client",
              "Strong focus on compliance and accuracy",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <CheckCircle className="text-[#26374A] mt-1" size={20} />
                <span className="text-gray-800 font-extrabold text-lg">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

      </div>
    </section>
  );
}