"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const services = [
  { name: "Paralegal service in Canada", path: "/services/paralegal" },
  { name: "Legal services for Indians – India matters", path: "/services/legal" },
  { name: "Recruitment", path: "/services/recruitment" },
  { name: "IT Services", path: "/services/it-services" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Mortgage", path: "/services/mortgage" },
  { name: "Buy, Sell & Rent Homes", path: "/services/real-estate" },
  { name: "Finance", path: "/services/finance" },
  { name: "Bookkeeping and tax services", path: "/services/bookkeeping-tax" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2f4356] text-white pt-14">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
       

{/* LOGO + ABOUT */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
>
 <Link href="/" className="flex items-center mb-4">
  <div className="h-52 w-52 rounded-full overflow-hidden bg-white flex items-center justify-center">
   <img
  src="/logo.png"
  alt="Walshkon Consultants"
  className="h-52 w-52 object-cover"
  style={{ clipPath: "circle(50%)" }}
/>
  </div>
</Link>

  <p className="text-sm text-gray-300 leading-relaxed mb-6">
    Dedicated to providing quality education and fostering holistic
    growth. We strive to create a supportive environment where every
    student learns and grows.
  </p>

  {/* SOCIAL ICONS */}
  <div className="flex gap-4">

    <a
      href="https://web.facebook.com/walshkonconsultants/?_rdc=1&_rdr#"
      target="_blank"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition"
    >
      <FaFacebookF className="text-white" size={16} />
    </a>

    <a
      href="https://www.instagram.com/walshkon_consultant/"
      target="_blank"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition"
    >
      <FaInstagram className="text-white" size={16} />
    </a>

    <a
      href="https://x.com/walshkon_C"
      target="_blank"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-600 transition"
    >
      <FaTwitter className="text-white" size={16} />
    </a>

  </div>
</motion.div>

        {/* SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-semibold text-lg mb-4">Services</h3>

          <ul className="space-y-2 text-sm">
            {services.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  className="text-gray-300 transition duration-200 hover:text-blue-400 hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-semibold text-lg mb-4">Contact us</h3>

          <div className="text-gray-300 text-sm space-y-4">
            <div>
              <p className="font-medium text-white">Phone:</p>
              <p className="hover:text-blue-400 transition">
                +1 226-782-0177
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Email:</p>
              <p className="hover:text-blue-400 transition">
                info@walshkonconsultant.com
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Address:</p>
              <p>
               Unit 307-B , 3016 5 Ave NE,   <br />
                Calgary, AB T2A 5L7
              </p>
            </div>
          </div>
        </motion.div>

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>

          <p className="text-gray-300 text-sm mb-4">
            Sign up to get updates & exclusive offers directly to your inbox.
          </p>

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 rounded bg-[#1e2d3b] text-white outline-none mb-3 focus:ring-2 focus:ring-blue-400 transition"
          />

          <button className="w-full bg-blue-500 hover:bg-blue-600 transition px-4 py-3 rounded font-medium">
            Subscribe Now
          </button>
        </motion.div>
      </div>

      
      {/* BOTTOM */}
<div className="mt-12 bg-white border-t border-gray-500/30 py-6 text-sm text-gray-800">
  <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
    
    <p className="text-center sm:text-right text-lg">
      Copyright © 2026 Walshkon Consultants | Powered by Walshkon Consultants
    </p>

<div className="max-w-lg">
   <img
        src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg"
        alt="Canada Flag"
        className="w-full"
       
      />
</div>
     
   
  </div>
</div>
    </footer>
  );
}