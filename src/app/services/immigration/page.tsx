"use client";
import BusinessVisa from "@/components/immigration/BusinessVisa";
import Family from "@/components/immigration/Family";
import PermanentResidency from "@/components/immigration/PermanentResidency";
import StudyVisa from "@/components/immigration/StudyVisa";
import VisitorVisa from "@/components/immigration/VisitorVisa";
import WorkVisa from "@/components/immigration/WorkVisa";
import Footer from "@/components/layout/Footer";
import { motion, Variants } from "motion/react";
import { useRouter } from "next/navigation";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // now TS accepts this
    },
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

export default function Page() {
  const router = useRouter();
  return (
    <div className="bg-background text-foreground">
      <section className="relative py-24 text-center bg-gradient-to-b from-gray-50 to-white">
        <StudyVisa />
      </section>

      <section className="py-8">
        <WorkVisa />
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-gray-50">
        <PermanentResidency />
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <VisitorVisa />
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-gray-50">
        <BusinessVisa />
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-white">
        <Family />
      </section>
      {/* CTA */}
      <section className="py-24 text-center bg-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#26374A]">
            Ready to Start Your{" "}
            <span className="text-[#26374A]">Sponsorship Journey?</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Reunite with your loved ones today. Our expert team provides
            end-to-end assistance and ensures a smooth visa approval process for
            your family.
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="bg-[#26374A] text-white px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-md font-medium hover:bg-[#444444] transition cursor-pointer"
          >
            Contact Us
          </button>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
