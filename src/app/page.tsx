"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ServicesSlider from "@/components/ServicesSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Locate, LocateIcon, LocationEdit, Mail, Phone } from "lucide-react";



export default function Home() {

  return (
    <div >
     <section className="bg-white py-16">
 <HeroSection/>
</section>
<section className="bg-white py-10 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <h1 className="text-6xl font-extrabold  text-center  text-[#26374A]">
    SERVICES  <span className="text-[#26374A]">OVERVIEW</span>
    </h1>

    <div className="relative overflow-hidden">
        <ServicesSlider />

    </div> 
  </div>
</section>

<section className="bg-white py-16">
  <div className="max-w-full mx-auto px-6 text-center">

    
<AboutSection/>

  </div>
</section>

<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        <h3 className="text-6xl font-extrabold text-[#26374A] mb-4 ml-16">
          Connect with Us
        </h3>

        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#26374A] mt-10">
          Get In Touch <br />
          <span className="text-[#26374A] text-4xl md:text-5xl font-extrabold">
            We’d Love To Hear <br /> From You
          </span>
        </h2>

        <p className="text-gray-800 text-lg mt-6 max-w-lg leading-relaxed">
          Have questions about our visa consulting services? Fill out the form
          and our team will get back to you as soon as possible.
        </p>

        <div className="space-y-4 text-sm mt-6">

          <div className="flex items-center gap-3">
            <span className="text-[#26374A]"> 
              <Mail/>
            </span>
            <p className="text-lg text-gray-800">info@walshkonconsultant.com</p>
          </div>

          <div className="flex items-center gap-3">
             <span className="text-[#26374A]"> 
             <Phone/>
            </span>
            <p className="text-lg text-gray-800"> +1 226-782-0177</p>
           
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#26374A]"> 
             <LocationEdit/>
            </span>
            <p className="text-lg text-gray-800"> Unit 307-B , 3016 5 Ave NE, Calgary, AB T2A 5L7</p>
            
          </div>

        </div>

      </div>

      {/* RIGHT FORM */}
      <div className="w-full max-w-lg">
<ContactSection/>

      </div>

    </div>
  </div>
</section>
    </div>
  );
}
