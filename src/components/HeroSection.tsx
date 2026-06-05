"use client";

import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const countries = [
  {
    name: "India",
    href: "/countries/india",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80",
    statement:
      "India legal matters plus recruitment, IT, marketing, mortgage, real estate, finance, bookkeeping, and tax support.",
  },
  {
    name: "Canada",
    href: "/countries/canada",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80",
    statement:
      "Paralegal service plus recruitment, IT, marketing, mortgage, real estate, finance, bookkeeping, and tax support.",
  },
  {
    name: "UK",
    href: "/countries/uk",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
    statement:
      "Professional support for recruitment, IT, marketing, mortgage, real estate, finance, bookkeeping, and tax services.",
  },
  {
    name: "Hong Kong",
    href: "/countries/hong-kong",
    image:
      "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=900&q=80",
    statement:
      "Professional support for recruitment, IT, marketing, mortgage, real estate, finance, bookkeeping, and tax services.",
  },
  {
    name: "Belize",
    href: "/countries/belize",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    statement:
      "Professional support for recruitment, IT, marketing, mortgage, real estate, finance, bookkeeping, and tax services.",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  const visibleCountries = useMemo(() => {
    return [0, 1, 2].map(
      (offset) => countries[(active + offset) % countries.length],
    );
  }, [active]);

  const previous = () => {
    setActive((current) =>
      current === 0 ? countries.length - 1 : current - 1,
    );
  };

  const next = () => {
    setActive((current) => (current + 1) % countries.length);
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 ">
        <div className="grid lg:grid-cols-[0.85fr_auto_1.55fr] gap-6 lg:gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold leading-tight text-[#26374A]">
              Choose Your Country
              <br />
              to Get Started
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Select the country or region where you need professional
              consulting services so we can connect you with the right experts
              and guidance.
            </p>

            <div className="mt-8 flex gap-4 rounded-md border border-gray-200 bg-gray-50 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-red-500 border border-gray-300">
                <ShieldCheck size={28} />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Structured professional support for immigration, legal, finance,
                recruitment, IT, and related services.
              </p>
            </div>
          </div>

          <button
            onClick={previous}
            className="hidden lg:flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-[#26374A] shadow-sm hover:bg-[#26374A] hover:text-white transition"
            aria-label="Previous countries"
          >
            <ChevronLeft size={24} />
          </button>

          <div>
            <div className="grid md:grid-cols-3 gap-5">
              {visibleCountries.map((country) => (
                <Link
                  key={country.name}
                  href={country.href}
                  className="group flex flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={country.image}
                      alt={`${country.name} landmark`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-4 h-1 w-14 bg-[#b90a0a]" />

                    <h2 className="text-2xl font-extrabold text-[#26374A]">
                      {country.name}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-gray-700">
                      {country.statement}
                    </p>

                    <span className="mt-auto inline-flex rounded-md bg-[#26374A] px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-[#444444]">
                      Explore Services
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-center gap-4">
              <button
                onClick={previous}
                className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-[#26374A]"
                aria-label="Previous countries"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="flex items-center gap-2">
                {countries.map((country, index) => (
                  <button
                    key={country.name}
                    onClick={() => setActive(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      active === index
                        ? "w-8 bg-[#26374A]"
                        : "w-2.5 bg-gray-300"
                    }`}
                    aria-label={`Show ${country.name}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-[#26374A] shadow-sm hover:bg-[#26374A] hover:text-white transition"
                aria-label="Next countries"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
