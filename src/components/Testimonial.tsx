"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";

const testimonials = [
  {
    title: "Professional Guidance",
    // desc: "Walshkon Consultants handled my immigration process smoothly. Highly reliable professionals.",
    desc: "Walshkon Consultants handled our business consulting requirements smoothly and efficiently. Highly reliable professionals.",
    name: "John Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "Excellent Support",
    desc: "Very responsive and knowledgeable team. Highly recommended for consulting services.",
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

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
      staggerChildren: 0.2,
    },
  },
};

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-muted/30">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >

        {/* HEADING */}
        <motion.div className="text-center mb-14" variants={fadeUp}>
          <h2 className="text-4xl font-bold">
            Why People <span className="text-red-600">Trust Us</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Real feedback from our satisfied clients
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={stagger}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="rounded-2xl border bg-background hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">

                  {/* TOP */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.img
                      src={item.image}
                      className="w-12 h-12 rounded-full object-cover"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                    />

                    <div>
                      <p className="font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Client
                      </p>
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mb-2 text-red-600">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
