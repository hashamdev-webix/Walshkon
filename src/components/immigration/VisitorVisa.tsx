import React from "react";

const services = [
  {
    title: "Step 1: Consultation",
    desc: "We assess your purpose of visit and suggest the best visa option.",
  },
  {
    title: "Step 2: Documentation",
    desc: "Our experts help you prepare financial proofs, invitation letters, and other required documents.",
  },
  {
    title: "Step 3: Visa Approval",
    desc: "We submit your application and guide you until your visa is approved.",
  },
];

const benefits = [
  {
    title: "Tourism",
    desc: "Explore new cultures, traditions, and breathtaking destinations.",
  },
  {
    title: "Family Visits",
    desc: "Reconnect with your loved ones across borders.",
  },
  {
    title: "Business Trips",
    desc: "Attend meetings, conferences, and expand global networks.",
  },
  {
    title: "Short-Term Study",
    desc: "Participate in short training or certificate programs.",
  },
  {
    title: "Events & Exhibitions",
    desc: "Attend global events, fairs, or cultural festivals.",
  },
  {
    title: "Multiple Entry Options",
    desc: "Choose single-entry or multiple-entry visas as per your needs.",
  },
];

const VisitorVisa = () => {
  return (
    <div className=" overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* HERO TITLE */}
          <div className="text-center mb-24">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#26374A] mb-6">
              Visitor Visa Services
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-8">
              Travel across the globe with ease. We simplify your visitor visa process, ensuring a smooth and stress-free journey.
            </p>
          </div>

          {/* HERO CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#26374A] mb-10 leading-tight">
                What is a Visitor Visa?
              </h2>

              <p className="text-lg text-muted-foreground leading-9 mb-6">
                A Visitor Visa allows you to enter another country temporarily for tourism, visiting family/friends, attending events, or short-term business trips. Each country has specific requirements and conditions for granting visitor visas.
              </p>

              <p className="text-lg text-muted-foreground leading-9">
                Our expert consultants help you prepare the right documentation, meet eligibility requirements, and secure approvals quickly so you can travel stress-free.
              </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div>
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=900&q=80"
                  alt="Visitor Visa World Map"
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
              Visitor Visa{" "}
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
              Benefits of a {" "}
              <span className="text-[#26374A]">
                Visitor Visa
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

export default VisitorVisa;