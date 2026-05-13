import React from "react";

const services = [
  {
    title: "Step 1: Eligibility Check",
    desc: "We review your profile to confirm eligibility for sponsorship.",
  },
  {
    title: "Step 2: Documentation",
    desc: "Assistance with preparing proof of relationship, identity, and financial support.",
  },
  {
    title: "Step 3: Application & Approval",
    desc: "Submission of your application and support until final approval.",
  },
];

const benefits = [
  {
    title: "Family Reunification",
    desc: "Live with your spouse, children, or parents without long separations.",
  },
  {
    title: "Permanent Residency",
    desc: "Sponsored family members often qualify for permanent residency.",
  },
  {
    title: "Work & Study Rights",
    desc: "Dependents can access work permits and study opportunities.",
  },
  {
    title: "Healthcare & Benefits",
    desc: "Access healthcare, social security, and other resident benefits.",
  },
  {
    title: "Path to Citizenship",
    desc: "Sponsorship often provides a pathway to citizenship in many countries.",
  },
  {
    title: "Stronger Family Bonds",
    desc: "Share important life moments together without immigration barriers.",
  },
];

const Family = () => {
  return (
    <div className=" overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* HERO TITLE */}
          <div className="text-center mb-24">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#26374A] mb-6">
              Family & Spousal Sponsorship
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-8">
              Reunite with your loved ones and build your future together in a new country with our trusted visa support.
            </p>
          </div>

          {/* HERO CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#26374A] mb-10 leading-tight">
                Bringing <span className="text-[#26374A]">Families Together</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-9 mb-6">
                Family and Spousal Sponsorship visas allow citizens or permanent residents to sponsor their spouse, children, parents, or other eligible relatives to live with them abroad. Immigration laws are designed to keep families united, making this one of the most common visa categories.
              </p>

              <p className="text-lg text-muted-foreground leading-9">
                Our team provides end-to-end assistance, from eligibility checks to preparing applications and ensuring a smooth visa approval process for your family.
              </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div>
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=900&q=80"
                  alt="Family and Spousal Support"
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
              Sponsorship <span className="text-[#26374A]">Process</span>
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
              Benefits of <span className="text-[#26374A]">Family Sponsorship</span>
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

export default Family;