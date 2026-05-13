import React from "react";

const services = [
  {
    title: "Step 1: Consultation",
    desc: "We assess your eligibility and recommend the best visa options for your business goals.",
  },
  {
    title: "Step 2: Documentation",
    desc: "Assistance with preparing financial records, investment proofs, and legal documents.",
  },
  {
    title: "Step 3: Submission",
    desc: "We file your visa application and provide guidance until you receive approval.",
  },
];

const benefits = [
  {
    title: "Global Expansion",
    desc: "Access international markets and grow your business presence globally.",
  },
  {
    title: "Residency Options",
    desc: "Many countries offer permanent residency and citizenship pathways.",
  },
  {
    title: "Tax Advantages",
    desc: "Benefit from favorable tax regimes and business incentives abroad.",
  },
  {
    title: "Family Inclusion",
    desc: "Bring your spouse and children with dependent visa options.",
  },
  {
    title: "Investment Opportunities",
    desc: "Invest in real estate, startups, or government bonds for visa eligibility.",
  },
  {
    title: "Networking & Trade",
    desc: "Expand professional networks and trade partnerships worldwide.",
  },
];

const BusinessVisa = () => {
  return (
    <div className=" overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* HERO TITLE */}
          <div className="text-center mb-24">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#26374A] mb-6">
              Business & Investor Visa
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-8">
              Unlock global opportunities by investing abroad and expanding your business internationally.
            </p>
          </div>

          {/* HERO CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#26374A] mb-10 leading-tight">
                Why Choose a <span className="text-[#26374A]">Business Investor Visa?</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-9 mb-6">
                A Business or Investor Visa provides individuals and companies the opportunity to invest, establish, or expand their businesses in a foreign country. This visa opens doors to permanent residency, global trade, and new markets.
              </p>

              <p className="text-lg text-muted-foreground leading-9">
                Our expert visa consultants help you navigate the process with ease, ensuring compliance with immigration laws while maximizing your business potential abroad.
              </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div>
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
                  alt="Business and Investment"
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
              Our <span className="text-[#26374A]">Application Process</span>
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
              Key Benefits of <span className="text-[#26374A]">Business & Investor Visas</span>
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

export default BusinessVisa;