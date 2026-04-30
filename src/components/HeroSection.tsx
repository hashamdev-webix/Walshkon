"use client";

import Link from "next/link";


export default function HeroSection() {



  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500&display=swap');

        .hero-section {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          background: #0a0a0a;
          overflow: hidden;
        }

        /* Subtle red ambient glow top-left */
        .hero-section::before {
          content: '';
          position: absolute;
          top: -120px;
          left: -80px;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(185,10,10,0.18) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* Decorative diagonal rule */
        .hero-section::after {
          content: '';
          position: absolute;
          top: 0;
          right: 38%;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(185,10,10,0.25) 30%, rgba(185,10,10,0.25) 70%, transparent);
          z-index: 1;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          align-items: center;
          min-height: 92vh;
        }

        /* LEFT */
        .hero-left {
          padding: 5rem 4rem 5rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 2rem;
          animation: fadeUp 0.6s ease both;
        }

        .eyebrow-line {
          width: 36px;
          height: 1px;
          background: #b90a0a;
        }

        .eyebrow-text {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b90a0a;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 5vw, 5rem);
          font-weight: 700;
          line-height: 1.05;
          color: #f5f0eb;
          margin: 0 0 1.8rem;
          animation: fadeUp 0.6s 0.1s ease both;
        }

        .hero-title .accent {
          color: #b90a0a;
          font-style: italic;
        }

        .hero-divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(to right, #b90a0a, transparent);
          margin-bottom: 1.8rem;
          animation: fadeUp 0.6s 0.2s ease both;
        }

        .hero-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 20px;
          font-weight: 300;
          color: #a09b94;
          line-height: 1.8;
          margin: 0 0 2.5rem;
          max-width: 420px;
          animation: fadeUp 0.6s 0.3s ease both;
        }

        .hero-desc strong {
          color: #d4cfc9;
          font-weight: 400;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 24px;
          animation: fadeUp 0.6s 0.4s ease both;
        }

        .btn-primary {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #b90a0a;
          color: #fff;
          border: none;
          padding: 14px 32px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary:hover {
          background: #8f0808;
          transform: translateY(-1px);
        }

        .btn-ghost {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #6b6560;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
        }

        .btn-ghost:hover { color: #a09b94; }

        .btn-ghost-arrow {
          width: 28px;
          height: 28px;
          border: 1px solid #3a3530;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: border-color 0.2s;
        }

        .btn-ghost:hover .btn-ghost-arrow { border-color: #6b6560; }

        /* Stats row */
        .hero-stats {
          display: flex;
          gap: 2.5rem;
          margin-top: 3.5rem;
          padding-top: 2rem;
          border-top: 1px solid #1e1a17;
          animation: fadeUp 0.6s 0.5s ease both;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 700;
          color: #f5f0eb;
          line-height: 1;
        }

        .stat-num span {
          color: #b90a0a;
        }

        .stat-label {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #5a5450;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* RIGHT */
        .hero-right {
          position: relative;
          height: 100%;
          min-height: 92vh;
          overflow: hidden;
        }

        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: grayscale(20%) brightness(0.55);
        }

        /* Left fade into dark bg */
        .hero-right::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.5) 40%, transparent 100%);
          z-index: 1;
        }

        /* Bottom fade */
        .hero-right::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(to top, #0a0a0a 0%, transparent 100%);
          z-index: 1;
        }

        /* Floating badge */
        .hero-badge {
          position: absolute;
          bottom: 3rem;
          left: 2rem;
          z-index: 2;
          background: rgba(10,10,10,0.85);
          border: 1px solid #2a2520;
          border-left: 2px solid #b90a0a;
          padding: 16px 20px;
          backdrop-filter: blur(8px);
          animation: fadeUp 0.6s 0.7s ease both;
        }

        .badge-title {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #b90a0a;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .badge-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 600;
          color: #f5f0eb;
          line-height: 1.2;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-section::after { display: none; }
          .hero-inner {
            grid-template-columns: 1fr;
            min-height: auto;
            padding: 0 1.5rem;
          }
          .hero-left {
            padding: 5rem 0 2rem;
          }
          .hero-right {
            min-height: 320px;
            height: 320px;
          }
          .hero-right::before {
            background: linear-gradient(to bottom, #0a0a0a 0%, transparent 40%);
          }
          .hero-stats { gap: 1.5rem; }
        }
      `}</style>

<section className="relative w-full h-[90vh] overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <img
    src="/consultant.jpg"
    alt="Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY (LEFT FADE EFFECT) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/70"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">

    <div className="max-w-xl text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold  py-4 text-white leading-[1.3]">
  WALSHKON
  <br />
  <span>CONSULTANTS</span>
</h1>

      <p className="text-gray-300 my-12 leading-relaxed">
       We provide End-to-end professional services — immigration consulting, legal documentation,
        finance & mortgage support, IT solutions, recruitment, and real estate assistance. <br />Whether you’re planning to move abroad, invest, grow your business, or manage legal paperwork — we’ve got you covered.
      </p>

      <Link href="/contact"  className=" cursor-pointer bg-[#26374A] hover:bg-[#444444] px-6 py-3 rounded-full font-semibold">
        BOOK CONSULTATION
      </Link>

    </div>
    {/* <img
  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3VsdGF0aW9ufGVufDB8fDB8fHww"
  alt="Hero"
  className="absolute -right-24 bottom-64 h-92  w-1/2 border-none rounded-md"
/> */}


  </div>
</section>
    </>
  );
}