"use client";

import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Building2,
  Calculator,
  FileText,
  Gavel,
  Globe2,
  Home,
  Laptop,
  Megaphone,
} from "lucide-react";

const services = [
  { name: "Immigration", Icon: Globe2 },
  { name: "Paralegal Service in Canada", Icon: FileText },
  { name: "Legal Services for Indians", Icon: Gavel },
  { name: "Recruitment", Icon: BriefcaseBusiness },
  { name: "IT Services", Icon: Laptop },
  { name: "Mortgage", Icon: Building2 },
  { name: "Digital Marketing", Icon: Megaphone },
  { name: "Finance", Icon: BadgeDollarSign },
  { name: "Bookkeeping and Tax Services", Icon: Calculator },
  { name: "Buy, Sell & Rent Homes", Icon: Home },
];

const repeatedServices = [...services, ...services];

export default function ServicesSlider() {
  return (
    <section className="bg-white  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-4xl font-extrabold text-[#26374A]">
          Most Requested
        </h2>

        <div className="mt-8 overflow-hidden">
          <div className="most-requested-track flex w-max gap-5">
            {repeatedServices.map(({ name, Icon }, index) => (
              <div
                key={`${name}-${index}`}
                className="flex h-40 w-56 shrink-0 flex-col items-center justify-center rounded-md border border-gray-200 bg-white p-5 text-center shadow-sm"
                aria-hidden={index >= services.length}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#26374A] text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-extrabold leading-snug text-[#26374A]">
                  {name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
