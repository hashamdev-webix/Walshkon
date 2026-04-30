"use client";

import { useRef } from "react";
import Link from "next/link";

const services = [
  {
  
    name: "Immigration Services",
    path: "/services/paralegal",
    desc: "Professional assistance for study visas, work permits, permanent residency, and immigration documentation.",
    img: "https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/ielts-BEKebsKc-scaled.webp?w=1200&ssl=1",
  },
  {

    name: "Legal Services",
    path: "/services/legal",
    desc: "Expert legal assistance for Indians dealing with India-related matters, including property, family, and business legalities. ",
    img: "https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/citizentest-D2lJC4fA-scaled.jpg?w=1200&ssl=1",
  },
  {
   
    name: "Recruitment Services",
    path: "/services/recruitment",
    desc: "Reliable recruitment solutions connecting employers with skilled and qualified professionals.",
    img: "https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/coaching-CR1bhXYG-scaled.jpg?w=1200&ssl=1",
  },
  {

    name: "IT Services",
    path: "/services/it-services",
    desc: "Modern IT solutions including web development, software services, and digital infrastructure.",
    img: "https://i0.wp.com/walshkonconsultants.com/wp-content/uploads/2026/01/oet-BGL6ZhXN-scaled.jpg?w=1200&ssl=1",
  },
];

// Duplicate for seamless infinite loop
const allServices = [...services, ...services];

export default function ServicesSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const pause = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
  };

  const resume = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = "running";
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');

        .services-slider-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: services-scroll 32s linear infinite;
        }

        @keyframes services-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section className="py-16 bg-white overflow-hidden">
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
         <div
  ref={trackRef}
  className="services-slider-track"
>
  {allServices.map((service, index) => (
    <Link
      key={index}
      href={service.path}
      className="flex-shrink-0 no-underline"
      // 1. Made width and height equal for square shape
      style={{ width: "350px", height: "350px", padding: "10px" }} 
      tabIndex={index < services.length ? 0 : -1}
      aria-hidden={index >= services.length}
    >
      <div
        className="flex flex-col items-center justify-center rounded-xl overflow-hidden bg-gray-100 transition-shadow duration-300 h-full w-full"
        style={{
          border: "0.5px solid #e5e7eb",
          // 2. Ensure container is a perfect square
          aspectRatio: "1 / 1", 
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.08)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow = "none")
        }
      >
        {/* IMAGE TOP */}
        <img
          src={service.img}
          alt={service.name}
          style={{
            width: "120px",      // Increased size slightly for square layout
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            flexShrink: 0,
            marginTop: "20px",   // Spacing from top
          }}
        />

        {/* TEXT CONTENT */}
        <div className="flex flex-col items-center text-center flex-1 px-6 py-4">
          <h3
            className="mb-2 leading-snug underline"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "22px", // Slightly larger for the square card
              fontWeight: 600,
              color: "#26374A",
              margin: "12px 0 8px 0",
            }}
          >
            {service.name}
          </h3>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "#000000",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            {service.desc}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>
        </div>
      </section>
    </>
  );
}