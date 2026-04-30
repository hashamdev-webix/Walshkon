"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactStrip() {
  return (
    <section className="py-14 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">

          {/* CALL */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 rounded-full bg-red-50">
              <Phone className="text-[#26374A]" size={20} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Call Us</p>
              <p className="font-semibold text-gray-900">
                +1 226-782-0177
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 rounded-full bg-red-50">
              <Mail className="text-[#26374A]" size={20} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold text-gray-900">
                info@walshkonconsultant.com
              </p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 rounded-full bg-red-50">
              <MapPin className="text-[#26374A]" size={20} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold text-gray-900 text-sm leading-relaxed">
                Unit 307-B, 3016 5 Ave NE, Calgary, AB T2A 5L7
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}