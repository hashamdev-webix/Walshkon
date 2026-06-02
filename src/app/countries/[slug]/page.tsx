import Footer from "@/components/layout/Footer";
import {
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  FileText,
  Gavel,
  Home,
  Laptop,
  Megaphone,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const countryPages = {
  india: {
    name: "India",
    intro:
      "Immigration, legal, business, and documentation support for clients with India-related needs.",
  },
  canada: {
    name: "Canada",
    intro: "Select a service category to explore more.",
  },
  uk: {
    name: "UK",
    intro:
      "Professional consulting support for immigration, legal, and business-related services in the UK.",
  },
  "hong-kong": {
    name: "Hong Kong",
    intro:
      "Consulting support for clients needing documentation, business, legal, and professional services related to Hong Kong.",
  },
  belize: {
    name: "Belize",
    intro:
      "Professional support for clients seeking immigration, documentation, business, and service guidance related to Belize.",
  },
};

const canadaServices = [
  {
    name: "Paralegal Services in Canada",
    href: "/services/paralegal",
    description: "Legal documentation and paralegal support.",
    Icon: Gavel,
  },
  {
    name: "Immigration",
    href: "/services/immigration",
    description: "Expert guidance for visas, permits, and applications.",
    Icon: FileText,
  },
  {
    name: "Recruitment",
    href: "/services/recruitment",
    description: "Connecting talent with opportunities.",
    Icon: BriefcaseBusiness,
  },
  {
    name: "IT Services",
    href: "/services/it-services",
    description: "Technology solutions for your business.",
    Icon: Laptop,
  },
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
    description: "Grow your brand online with expert support.",
    Icon: Megaphone,
  },
  {
    name: "Mortgage",
    href: "/services/mortgage",
    description: "Find the right mortgage for your needs.",
    Icon: Building2,
  },
  {
    name: "Buy, Sell & Rent Homes",
    href: "/services/real-estate",
    description: "Find, list, or rent homes with confidence.",
    Icon: Home,
  },
  {
    name: "Finance",
    href: "/services/finance",
    description: "Smart financial solutions for your future.",
    Icon: ChartNoAxesCombined,
  },
];

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CountryServicesPage({ params }: PageProps) {
  const { slug } = await params;
  const country = countryPages[slug as keyof typeof countryPages];

  if (!country) {
    notFound();
  }

  const isCanada = slug === "canada";

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center">
          <nav
            className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#b90a0a]">
              Home
            </Link>
            <span>&gt;</span>
            <span>{country.name}</span>
            <span>&gt;</span>
            <span className="text-[#26374A]">Our Services</span>
          </nav>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight text-[#26374A]">
            Our Services in {country.name}
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#b90a0a]" />
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            {country.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {(isCanada ? canadaServices : canadaServices).map(
            ({ Icon, ...service }) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex min-h-[270px] flex-col rounded-md border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#26374A] text-white">
                  <Icon size={28} />
                </div>
                <h2 className="mt-6 text-xl font-extrabold leading-snug text-[#26374A]">
                  {service.name}
                </h2>
                <div className="mt-4 h-1 w-14 bg-[#b90a0a]" />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-gray-700">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#26374A] group-hover:text-[#b90a0a]">
                  Explore Service <span aria-hidden="true">-&gt;</span>
                </span>
              </Link>
            ),
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export function generateStaticParams() {
  return Object.keys(countryPages).map((slug) => ({ slug }));
}
