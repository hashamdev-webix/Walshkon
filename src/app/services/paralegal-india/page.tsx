"use client";

import Footer from "@/components/layout/Footer";
import ServiceBreadcrumb from "@/components/ServiceBreadcrumb";
import Link from "next/link";

const supportAreas = [
  {
    title: "Property & Real Estate Matters",
    description:
      "Document preparation and procedural support for property transactions, inheritance, and land matters in India.",
  },
  {
    title: "Family Matters",
    description:
      "Paralegal support with marriage, separation, custody, affidavits, and related documentation.",
  },
  {
    title: "Business & Corporate Documents",
    description:
      "Support with registrations, compliance records, agreements, contracts, and business documentation.",
  },
];

const process = [
  ["Initial Consultation", "We review your India-related matter and support requirements."],
  ["Document Review", "We organize and review the available records and paperwork."],
  ["Preparation & Filing Support", "We help prepare documents and coordinate required submissions."],
  ["Follow-Up & Completion", "We track progress and support you through completion."],
];

export default function ParalegalIndiaPage() {
  return (
    <div className="bg-white">
      <section className="bg-gray-100 py-20 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <ServiceBreadcrumb current="Paralegal Services in India" />
          <h1 className="mb-5 text-4xl font-extrabold text-[#26374A] md:text-6xl">
            Paralegal Services in India
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-700">
            Paralegal Support for Indian Matters
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
            Practical documentation, filing, and procedural support for
            individuals and businesses handling India-related matters.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-14 text-center text-3xl font-extrabold text-[#26374A] md:text-5xl">
            Our Paralegal Support
          </h2>
          <div className="grid gap-10 text-center md:grid-cols-3">
            {supportAreas.map((area) => (
              <div key={area.title}>
                <h3 className="mb-4 text-xl font-bold text-[#26374A] underline underline-offset-4">
                  {area.title}
                </h3>
                <p className="leading-7 text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-14 text-center text-3xl font-extrabold text-[#26374A] md:text-5xl">
            Our Process
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([title, description], index) => (
              <div
                key={title}
                className="rounded-md bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#26374A] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#26374A]">
                  {title}
                </h3>
                <p className="text-sm leading-6 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-[#26374A] md:text-5xl">
          Get Paralegal Support for Indian Matters
        </h2>
        <p className="mx-auto mb-7 max-w-2xl px-6 text-lg text-gray-600">
          Contact our team for organized, timely, and practical assistance.
        </p>
        <Link
          href="/contact"
          className="inline-flex rounded-md bg-[#26374A] px-6 py-3 font-semibold text-white hover:bg-[#444444]"
        >
          Contact Us
        </Link>
      </section>
      <Footer />
    </div>
  );
}
