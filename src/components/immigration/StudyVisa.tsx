import React from "react";

const benefits = [
  {
    title: "Global Education",
    desc: "Access world-class universities and advanced learning systems.",
  },
  {
    title: "Cultural Exposure",
    desc: "Experience diversity and build global connections.",
  },
  {
    title: "Work Opportunities",
    desc: "Part-time job options while studying to support living expenses.",
  },
  {
    title: "Post-Study Options",
    desc: "Opportunity to extend stay with post-study work visas.",
  },
  {
    title: "PR Pathway",
    desc: "Study visas often create pathways toward permanent residency.",
  },
  {
    title: "Skill Development",
    desc: "Enhance academic, personal, and professional skills abroad.",
  },
];
const processSteps = [
  {
    title: "Step 1: University Admission",
    desc: "Get accepted by a recognized university or college abroad.",
  },
  {
    title: "Step 2: Documentation",
    desc: "Prepare financial proofs, language test scores, and academic records.",
  },
  {
    title: "Step 3: Visa Approval",
    desc: "Submit your application and get your study visa approved.",
  },
];

const destinations = [
  "Canada",
  "USA",
  "UK",
  "Australia",
  "New Zealand",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Sweden",
  "Switzerland",
  "Ireland",
  "Denmark",
  "Norway",
  "Austria",
  "Belgium",
  "Finland",
  "Mexico",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Singapore",
  "Japan",
  "South Korea",
  "China",
  "Malaysia",
];
const StudyVisa = () => {
  return (
    <div className=" overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* HERO TITLE */}
          <div className="text-center mb-24">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#26374A] mb-6">
              Study Visa Assistance
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-8">
              Begin your international education journey with our expert
              study visa services. Unlock global opportunities for learning
              and career growth.
            </p>
          </div>

          {/* HERO CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#26374A] mb-10 leading-tight">
                Why Choose a <span>Study Visa?</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-9 mb-6">
                A Study Visa allows international students to pursue
                education in top universities across the world. It opens
                doors to high-quality education, international exposure,
                and global career opportunities.
              </p>

              <p className="text-lg text-muted-foreground leading-9">
                With the right guidance, you can secure admission to your
                dream university, experience cultural diversity, and set
                the foundation for a successful career abroad.
              </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div>
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80"
                  alt="Study Visa"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* SECTION HEADING */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-20">
              Benefits of a{" "}
              <span className="text-[#26374A]">
                Study Visa
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
    {/* ================= GLOBAL DESTINATIONS SECTION ================= */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-extrabold">
        Global{" "}
        <span className="text-[#26374A]">
          Study Destinations
        </span>
      </h2>
    </div>

    {/* DESTINATIONS */}
    <div className="flex flex-wrap justify-center gap-4">
      {destinations.map((country, i) => (
        <div
          key={i}
          className="px-6 py-3 border rounded-lg text-lg font-medium text-[#26374A] bg-card"
        >
          {country}
        </div>
      ))}
    </div>

  </div>
</section>
{/* ================= APPLICATION PROCESS SECTION ================= */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-20">
      <h2 className="text-4xl sm:text-5xl font-extrabold">
        Study Visa{" "}
        <span className="text-[#26374A]">
          Application Process
        </span>
      </h2>
    </div>

    {/* PROCESS ITEMS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
      {processSteps.map((item, i) => (
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

export default StudyVisa;