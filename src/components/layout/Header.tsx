"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const landingMenuItems = [
  { name: "About", path: "/about" },
  { name: "Blogs", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const sharedServices = [
  { name: "Recruitment", path: "/services/recruitment" },
  { name: "IT Services", path: "/services/it-services" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Mortgage", path: "/services/mortgage" },
  { name: "Buy, Sell & Rent Homes", path: "/services/real-estate" },
  { name: "Finance", path: "/services/finance" },
  { name: "Bookkeeping and Tax Services", path: "/services/bookkeeping-tax" },
];

const defaultServices = [
  { name: "Paralegal services in Canada", path: "/services/paralegal" },
  { name: "Legal services for Indians only - India matters", path: "/services/legal" },
  ...sharedServices,
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isLandingPage = pathname === "/";
  const countrySlug = pathname.startsWith("/countries/")
    ? pathname.split("/")[2]
    : "";
  const services =
    countrySlug === "india"
      ? [
          {
            name: "Legal services for Indians only - India matters",
            path: "/services/legal",
          },
          ...sharedServices,
        ]
      : countrySlug === "canada"
        ? [
            {
              name: "Paralegal services in Canada",
              path: "/services/paralegal",
            },
            ...sharedServices,
          ]
        : countrySlug
          ? sharedServices
          : defaultServices;

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const toggleMenu = () => {
    setOpen((current) => {
      if (current) {
        setServicesOpen(false);
      }
      return !current;
    });
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto">
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

      <div
        className={
          isLandingPage ? "border-t border-gray-200" : "border-t-4 border-gray-800"
        }
      >
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <button
            onClick={toggleMenu}
            className="flex items-center gap-2 bg-[#26374A] text-white px-5 py-3 font-semibold"
            aria-expanded={open}
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

          {open && (
            <div className="absolute left-4 md:left-6 top-full mt-0 w-[260px] bg-[#26374A] text-white shadow-lg z-50 hidden md:block">
              {isLandingPage ? (
                landingMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    onClick={closeMenu}
                    href={item.path}
                    className="block px-6 py-4 hover:bg-white hover:text-gray-800"
                  >
                    {item.name}
                  </Link>
                ))
              ) : (
                <>
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
                  <div className="relative">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white hover:text-gray-800"
                      aria-expanded={servicesOpen}
                    >
                      Services
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="absolute top-0 left-full w-[360px] bg-white text-gray-800 shadow-lg border-l border-gray-200 p-5">
                        <div className="grid gap-3">
                          {services.map((item) => (
                            <Link
                              onClick={closeMenu}
                              key={item.path}
                              href={item.path}
                              className="underline underline-offset-4 hover:text-[#b90a0a]"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
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
                </>
              )}
            </div>
          )}

          {open && (
            <div className="md:hidden absolute left-0 top-full w-full bg-[#26374A] text-white shadow-lg z-50">
              {isLandingPage ? (
                landingMenuItems.map((item) => (
                  <Link
                    key={item.path}
                    onClick={closeMenu}
                    href={item.path}
                    className="block px-5 py-4 border-b border-white/10 last:border-b-0"
                  >
                    {item.name}
                  </Link>
                ))
              ) : (
                <>
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
                  <div className="border-b border-white/10">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                      aria-expanded={servicesOpen}
                    >
                      Services
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="bg-[#1f2d3d]">
                        {services.map((item) => (
                          <Link
                            key={item.path}
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
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
