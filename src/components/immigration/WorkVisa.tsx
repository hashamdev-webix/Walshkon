import React from "react";

const services = [
 {
    title: "Skill Assessment & WES Services",
    desc: "We assist with educational credential assessment (WES, IQAS, etc.) required for visa applications.",
  },
  {
    title: "Language Proficiency Training",
    desc: "IELTS/TOEFL preparation classes to help you achieve the required scores for visa eligibility.",
  },
  {
    title: "Candidate Screening & Profiling",
    desc: "Comprehensive evaluation of your skills, experience, and qualifications for optimal job matching.",
  },

  
  
  {
    title: "Skill Enhancement Training",
    desc: "Specialized training programs to bridge skill gaps and meet international employer requirements.",
  },
  {
    title: "Interview Preparation",
    desc: "Mock interviews and coaching to help you excel in international job interviews.",
  },
  {
    title: "Job Placement Assistance",
    desc: "Access to our network of international employers and recruitment partners.",
  },
];
const benefits = [
 {
    title: "Global Opportunities",
    desc: "Expand your career in top international markets.",
  },
  {
    title: "Higher Income",
    desc: "Earn competitive salaries abroad with better perks.",
  },
  {
    title: "Permanent Residency Path",
    desc: "Many work visas lead to permanent residency options.",
  },

  

  {
    title: "Skill Development",
    desc: "Gain international exposure and professional growth.",
  },
  {
    title: "Family Sponsorship",
    desc: "Bring your spouse and children on dependent visas.",
  },
  {
    title: "Networking",
    desc: "Build professional connections worldwide.",
  },
];



const WorkVisa = () => {
  return (
    <div className=" overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* HERO TITLE */}
          <div className="text-center mb-24">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#26374A] mb-6">
             Work Visa Services
            </h1>

            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-8">
            Unlock global career opportunities with our comprehensive work visa solutions. From skill assessment to job placement, we guide you through every step of your international career journey.
            </p>
          </div>

          {/* HERO CONTENT */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#26374A] mb-10 leading-tight">
                What is a Work Visa?
              </h2>

              <p className="text-lg text-muted-foreground leading-9 mb-6">
             A Work Visa allows individuals to live and work in a foreign country legally. Depending on the visa type, you may be sponsored by an employer, apply independently, or qualify for skilled migration programs.
              </p>

              <p className="text-lg text-muted-foreground leading-9">
           We provide end-to-end support including skill assessment, document preparation, interview training, and job placement assistance to ensure your successful transition to working abroad.
              </p>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div>
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=900&q=80"
                  alt="Study Visa"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* SECTION HEADING */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-20">
             Our Comprehensive  {" "}
              <span className="text-[#26374A]">
                Work Visa Services
              </span>
            </h2>
          </div>

          {/* services CARDS */}
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

{/* ================= APPLICATION PROCESS SECTION ================= */}
<section className="py-8">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-20">
      <h2 className="text-4xl sm:text-5xl font-extrabold">
       Benefits of a {" "}
        <span className="text-[#26374A]">
          Work Visa
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

export default WorkVisa;