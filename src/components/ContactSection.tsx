"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function ContactSection() {

  const [formData,setFormData]=useState({
    name:"",
    email:"",message:""
  })
  const handleChange=(e:any)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e:any)=>{
    e.preventDefault()
    if(!formData.name || !formData.email || !formData.message ){
      alert("Please fill all fields")
    }
    console.log(formData);
    
    alert("Your mesage is sent!")
   
  }
  return (
    <Card className="w-full rounded-2xl border border-gray-200 bg-white shadow-lg">
      <CardContent className="p-8 space-y-6">

        {/* HEADING */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Request a Free Immigration Consultation
          </h2>

          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Have a question about your visa or immigration plan? Fill out this form
            and our experts will reach out to you shortly. Required fields are marked *
          </p>
        </div>

        {/* NAME */}
        <div className="space-y-1">
          <label className="text-sm text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="Full name"
            name="name"
            value={formData.name} 
             required
            onChange={handleChange}
            className="h-11 bg-gray-50 border border-gray-300 focus-visible:ring-2 focus-visible:ring-[#26374A]"
          />
        </div>

        {/* EMAIL */}
        <div className="space-y-1">
          <label className="text-sm text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange} required
            placeholder="Email address"
            className="h-11 bg-gray-50 border border-gray-300 focus-visible:ring-2 focus-visible:ring-[#26374A]"
          />
        </div>

        {/* MESSAGE */}
        <div className="space-y-1">
          <label className="text-sm text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="bg-gray-50 border border-gray-300 focus-visible:ring-2 focus-visible:ring-[#26374A]"
          />
        </div>

        {/* BUTTON */}
        <div>
          <Button onClick={handleSubmit} className="bg-[#26374A] hover:bg-[#444444] text-white px-8 py-3 rounded-md shadow-md cursor-pointer ">
            Submit
          </Button>
        </div>

      </CardContent>
    </Card>
  );
}