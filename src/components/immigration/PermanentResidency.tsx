import React from "react";

const services = [
  {
    title: "Step 1: Eligibility Check",
    desc: "We assess your qualifications, work experience, and language skills.",
  },
  {
    title: "Step 2: Documentation",
    desc: "We assist in gathering required documents like proof of funds, ID, and medical tests.",
  },
  {
    title: "Step 3: Application & Approval",
    desc: "Submit your PR application and receive support until approval.",
  },
];

const benefits = [
  {
    title: "Live & Work Freely",
    desc: "Freedom to live, work, or study in the country without restrictions.",
  },
  {
    title: "Healthcare Access",
    desc: "Enjoy public healthcare and social security benefits.",
  },
  {
    title: "Pathway to Citizenship",
    desc: "PR is often the first step towards full citizenship.",
  },
  {
    title: "Family Security",
    desc: "Include your spouse and children in your PR application.",
  },
  {
    title: "Education Opportunities",
    desc: "Access top universities and schools at resident tuition fees.",
  },
  {
    title: "Travel Flexibility",
    desc: "Travel in and out of the country freely with PR status.",
  },
];

const PermanentResidency = () => {
  return (
    <div className=" overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* HERO TITLE */}
          <div className="text-center mb-24">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#26374A] mb-6">
              Permanent Residency (PR) Visa
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-8">
              Secure your future with Permanent Residency. Live, work, and enjoy unlimited opportunities in your dream country.
            </p>
          </div>

          {/* HERO CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#26374A] mb-10 leading-tight">
                Why Apply for Permanent Residency?
              </h2>

              <p className="text-lg text-muted-foreground leading-9 mb-6">
                A Permanent Residency Visa allows you to live, work, and study in a country of your choice without time restrictions. It gives you access to social benefits, healthcare, and the pathway to citizenship.
              </p>

              <p className="text-lg text-muted-foreground leading-9">
                With PR status, you can secure your family's future, access world-class opportunities, and enjoy a better quality of life.
              </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div>
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
                  alt="Permanent Residency Handshake"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATION PROCESS SECTION ================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* SECTION HEADING */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-20">
              Step-by-Step PR{" "}
              <span className="text-[#26374A]">
                Application Process
              </span>
            </h2>
          </div>

          {/* services CARDS (Process Steps) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            {services.map((item, i) => (
              <div key={i}>
                <h5 className="text-xl font-semibold mb-3 underline text-[#26374A]">
                  {item.title}
                </h5>

                <p className="text-muted-foreground text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              Key Benefits of {" "}
              <span className="text-[#26374A]">
                Permanent Residency
              </span>
            </h2>
          </div>

          {/* BENEFIT CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            {benefits.map((item, i) => (
              <div key={i}>
                <h5 className="text-xl font-semibold mb-3 underline text-[#26374A]">
                  {item.title}
                </h5>

                <p className="text-muted-foreground text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default PermanentResidency;