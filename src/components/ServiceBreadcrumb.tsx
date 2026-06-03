import Link from "next/link";

type ServiceBreadcrumbProps = {
  current: string;
};

export default function ServiceBreadcrumb({ current }: ServiceBreadcrumbProps) {
  return (
    <nav
      className="mb-5 flex items-center justify-center gap-2 text-sm font-medium text-gray-600"
      aria-label="Breadcrumb"
    >
      <Link href="/" className="hover:text-[#b90a0a]">
        Home
      </Link>
      <span>&gt;</span>
      <span>Services</span>
      <span>&gt;</span>
      <span className="text-[#26374A]">{current}</span>
    </nav>
  );
}
