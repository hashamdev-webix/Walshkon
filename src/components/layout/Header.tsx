"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

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

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* TOP HEADER */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Walshkon Consultants"
            className="h-14 md:h-20 w-auto object-contain"
          />

          <h1 className="hidden md:flex text-xl md:text-4xl font-bold text-primary">
            Walshkon <span className="ml-3">Consultants</span>
          </h1>
        </Link>

        <Link
          href="/contact"
          className="bg-[#26374A] text-white px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-md font-medium hover:bg-[#444444] transition"
        >
          Contact Us
        </Link>
      </div>

      {/* MENU BAR */}
      <div className="border-t-4 border-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-[#26374A] text-white px-5 py-3 font-semibold -mt-[2px]"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
            MENU
            <ChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* DESKTOP DROPDOWN */}
          {open && (
            <div className="absolute left-4 md:left-6 top-full mt-0 w-[260px] bg-[#26374A] text-white shadow-lg z-50 hidden md:block">
              <Link
                onClick={closeMenu}
                href="/"
                className="block px-6 py-4 hover:bg-white hover:text-gray-800"
              >
                Home
              </Link>

              <Link
                onClick={closeMenu}
                href="/about"
                className="block px-6 py-4 hover:bg-white hover:text-gray-800"
              >
                About
              </Link>

              <div className="relative group">
                <button className="w-full flex justify-between items-center px-6 py-4 hover:bg-white hover:text-gray-800 text-left">
                  Services
                  <ChevronDown size={16} />
                </button>

                <div className="absolute top-0 left-full w-[420px] bg-white text-gray-800 shadow-lg border-l p-6 hidden group-hover:block">
                  <div className="grid gap-4">
                    {services.map((item, index) => (
                      <Link
                        onClick={closeMenu}
                        key={index}
                        href={item.path}
                        className="underline underline-offset-4 hover:text-blue-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                onClick={closeMenu}
                href="/blog"
                className="block px-6 py-4 hover:bg-white hover:text-gray-800"
              >
                Blogs
              </Link>

              <Link
                onClick={closeMenu}
                href="/contact"
                className="block px-6 py-4 hover:bg-white hover:text-gray-800"
              >
                Contact
              </Link>
            </div>
          )}

          {/* MOBILE MENU */}
          {open && (
            <div className="md:hidden absolute left-0 top-full w-full bg-[#26374A] text-white shadow-lg z-50">
              <Link
                onClick={closeMenu}
                href="/"
                className="block px-5 py-4 border-b border-white/10"
              >
                Home
              </Link>

              <Link
                onClick={closeMenu}
                href="/about"
                className="block px-5 py-4 border-b border-white/10"
              >
                About
              </Link>

              {/* MOBILE SERVICES ACCORDION */}
              <div className="border-b border-white/10">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="bg-[#1f2d3d]">
                    {services.map((item, index) => (
                      <Link
                        key={index}
                        href={item.path}
                        onClick={closeMenu}
                        className="block px-8 py-3 text-sm border-t border-white/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                onClick={closeMenu}
                href="/blog"
                className="block px-5 py-4 border-b border-white/10"
              >
                Blogs
              </Link>

              <Link
                onClick={closeMenu}
                href="/contact"
                className="block px-5 py-4"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}