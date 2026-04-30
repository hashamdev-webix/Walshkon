"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import FAQSection from "@/components/FAQSection";
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

 const blogs = [
    {
      title: "Strategic Consulting: Unlocking Hidden Opportunities",
      desc: "In an increasingly competitive global environment, informed consulting can uncover growth opportunities across immigration, business expansion, IT, and finance. Discover how professional advisory services help individuals and organizations make smarter, faster decisions.",
      img: "https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/BlogImage-CJtJNAGk-scaled.jpg?w=1200&ssl=1",
      date: "07 JUL",
      category: "Consulting",
    },
    {
      title: "Unlocking Opportunities: Your Immigration Journey Simplified",
      desc: "Immigration can be complex, but the right guidance makes all the difference. Learn how structured planning, accurate documentation, and expert support can turn your study, work, or PR goals into reality.",
      img: "https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/BlogImage1-CSCJCt__-scaled.jpg?w=1200&ssl=1",
      date: "17 JUN",
      category: "Immigration",
    },
    {
      title: "Navigating Cross-Border Matters: A Practical Guide",
      desc: "From legal documentation to business compliance, cross-border processes require precision. This guide explains how professional legal and consulting services reduce risks and ensure smooth international transitions.",
      img: "https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/BlogImage2-BB9Fjdbk-scaled.jpg?w=1200&ssl=1",
      date: "12 MAY",
      category: "Business",
    },
    {
      title: "Residency & Citizenship Pathways Explained",
      desc: "Thinking about permanent residency or citizenship? This article breaks down eligibility, documentation, and application steps, helping you understand how professional guidance improves success rates.",
      img: "https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/BlogImage3-CLLnuKO--scaled.jpg?w=1200&ssl=1",
      date: "09 NOV",
      category: "Green Card",
    },
    {
      title: "Global Mobility Beyond Travel: Work, Live & Invest Abroad",
      desc: "Global mobility today goes beyond travel—it includes working, settling, investing, and doing business internationally. Explore how immigration, recruitment, and real estate services support a seamless global lifestyle.",
      img: "https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/BlogImage4-HsOfMRnz-scaled.jpg?w=1200&ssl=1",
      date: "16 SEP",
      category: "Culture",
    },
    {
      title: "Expanding Horizons: Business, Careers & New Markets",
      desc: "Growth begins outside your comfort zone. Learn how business visas, recruitment solutions, IT services, and financial planning open doors to new markets, careers, and investment opportunities worldwide.",
      img: "https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/BlogImage5-LvFT1xmw-scaled.jpg?w=1200&ssl=1",
      date: "15 SEP",
      category: "Business",
    },
  ];

export default function BlogPage() {
  return (
    <section className="bg-white py-16">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >

        {/* HEADER */}
        <motion.div className="mb-10 text-center" variants={fadeUp}>
          <h1 className="text-6xl font-extrabold text-[#26374A]">
            Our <span className="">Blog</span>
          </h1>
          <p className="text-gray-600 mt-3">
            Stay informed with expert insights on immigration, legal services, recruitment trends, IT solutions, real estate, finance, and global opportunities. Our blog is designed to educate, guide, and empower individuals and businesses making important decisions.
          </p>
        </motion.div>

<div className="bg-gray-50 flex flex-col items-center justify-center">


      <h1 className="text-4xl py-5 font-extrabold text-[#26374A]">Latest Articles</h1>
        {/* BLOG GRID */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={stagger}
        >
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className=" max-w-xs group overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300">
                
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <motion.img
                    src={blog.img}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <CardContent className="p-5">

                  <Badge className="mb-2 bg-gray-100 text-gray-600">
                    {blog.category}
                  </Badge>

                  <h3 className="font-semibold text-lg text-gray-900  transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2">
                    {blog.desc}
                  </p>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
</div>
        {/* FAQ */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FAQSection />
        </motion.div>

      </motion.div>
    </section>
  );
}