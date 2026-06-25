"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type ServiceBreadcrumbProps = {
  current: string;
};

export default function ServiceBreadcrumb({ current }: ServiceBreadcrumbProps) {
  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const countryNames: Record<string, string> = {
    india: "India",
    canada: "Canada",
    uk: "UK",
    "hong-kong": "Hong Kong",
    belize: "Belize",
  };
  const countryName = country ? countryNames[country] : undefined;

  return (
    <nav
      className="mb-5 flex items-center justify-center gap-2 text-sm font-medium text-gray-600"
      aria-label="Breadcrumb"
    >
      <Link href="/" className="hover:text-[#b90a0a]">
        Home
      </Link>
      <span>&gt;</span>
      {countryName ? (
        <>
          <Link
            href={`/countries/${country}`}
            className="hover:text-[#b90a0a]"
          >
            {countryName}
          </Link>
          <span>&gt;</span>
        </>
      ) : (
        <>
          <span>Services</span>
          <span>&gt;</span>
        </>
      )}
      <span className="text-[#26374A]">{current}</span>
    </nav>
  );
}
