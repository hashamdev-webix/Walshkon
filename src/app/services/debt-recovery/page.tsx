"use client";

import Footer from "@/components/layout/Footer";
import ServiceBreadcrumb from "@/components/ServiceBreadcrumb";
import Link from "next/link";

const solutions = [
  ["Invoice Follow-Up & Payment Reminders", "Encourage timely payments with structured reminders and consistent follow-up on overdue accounts."],
  ["Debtor Communication & Negotiation", "Maintain professional communication with debtors and negotiate practical repayment solutions."],
  ["Demand Letters & Documentation Support", "Prepare formal recovery communications and organize supporting documents for outstanding claims."],
  ["Payment Plan Management", "Set up and monitor flexible payment plans to improve recovery outcomes and maintain accountability."],
  ["Dispute Resolution Support", "Address payment disputes efficiently and work toward practical resolutions that support recovery."],
  ["Reporting & Recovery Tracking", "Monitor collection activity, account status, and recovery progress with clear reporting and updates."],
];

const process = [
  ["Assessment & Case Review", "We review invoices, account history, agreements, and debtor details to create the right recovery approach."],
  ["Outreach & Negotiation", "Our team begins structured communication through reminders, follow-ups, and professional negotiation."],
  ["Resolution & Collection", "We work to secure payment, confirm repayment plans, and support the recovery of overdue balances."],
  ["Monitoring & Reporting", "Track progress with regular updates, recovery reporting, and clear visibility into collection activity."],
];

export default function DebtRecoveryPage() {
  return (
    <div className="bg-white">
      <section className="bg-gray-100 py-20 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <ServiceBreadcrumb current="Debt Recovery & Collections" />
          <h1 className="mb-5 text-4xl font-extrabold text-[#26374A] md:text-6xl">
            Debt Recovery & Collections Services
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            Recover overdue payments with professional debt recovery and
            collections services. We help businesses improve cash flow, reduce
            outstanding receivables, and manage debtor communication with a
            structured, compliant approach.
          </p>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-7 text-3xl font-extrabold text-[#26374A] md:text-5xl">
            About Our Debt Recovery & Collections Services
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-gray-600">
            <p>
              Our services help businesses recover outstanding invoices
              efficiently while protecting client relationships and supporting
              healthy cash flow.
            </p>
            <p>
              From payment reminders and debtor follow-ups to negotiation
              support, demand letters, payment plans, and recovery tracking, our
              team provides practical solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-14 text-center text-3xl font-extrabold text-[#26374A] md:text-5xl">
            Our Debt Recovery & Collections Solutions
          </h2>
          <div className="grid gap-x-12 gap-y-14 text-center md:grid-cols-2 lg:grid-cols-3">
            {solutions.map(([title, description]) => (
              <div key={title}>
                <h3 className="mb-4 text-lg font-bold text-[#26374A] underline underline-offset-4">
                  {title}
                </h3>
                <p className="leading-7 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-[#26374A] md:text-5xl">
            Our Debt Recovery Process
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([title, description], index) => (
              <div
                key={title}
                className="rounded-md bg-gray-100 p-7 text-center shadow-sm"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#26374A] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 font-bold text-[#26374A]">{title}</h3>
                <p className="text-sm leading-6 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-md bg-white p-10 text-center shadow-lg">
          <h2 className="mb-4 text-3xl font-extrabold text-[#26374A] md:text-5xl">
            Recover Outstanding Payments Faster
          </h2>
          <p className="mx-auto mb-7 max-w-2xl text-gray-600">
            Partner with our debt recovery experts to reduce overdue accounts,
            strengthen cash flow, and improve your collections process.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-md bg-[#26374A] px-7 py-3 font-semibold text-white hover:bg-[#444444]"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
