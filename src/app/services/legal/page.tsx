import { redirect } from "next/navigation";

export default function LegacyIndiaServicePage() {
  redirect("/services/paralegal-india?country=india");
}
