import Image from "next/image";
import React from 'react'
import { Button} from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox"
// import { Input } from "@/components/ui/input";

const Contact = () => {
  return (
    <div>
       <section className="py-0 px-1 bg-[#FFFFFF] text-center md:text-center justify-center md:justify-center overflow-hidden  ">
            <div className="bg-[url(/images/bg-pic.png)] w-full h-[250px] md:h-[316px] bg-cover bg-center flex items-center justify-center relative">
            <div className=" items-center justify-center mb-20 ">
               <Image
               src='/images/House_Logos-05.png'
               alt="image"
               width={77}
               height={77}
               className="absolute ml-10 "
               />
            <h2 className="font-semibold mt-14 text-black text-[30px]">Contact</h2>
            <p className="text-gray-600">Home &gt; Contact</p>
            </div>
            </div>

            <div className="max-w-7xl mx-auto p-6">
      {/* Centered Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
        <p className="text-gray-600 mt-2">
          For more information about our products & services, please feel free to drop us an email. 
          Our staff is always here to help you out. Do not hesitate!
        </p>
      </div>

      {/* Two Columns Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left p-10">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h3 className="font-medium">Address</h3>
            <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
          </div>
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-gray-600">Mobile: (+84) 546-6789</p>
            <p className="text-gray-600">Hotline: (+84) 456-6789</p>
          </div>
          <div>
            <h3 className="font-medium">Working Time</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 - 22:00</p>
            <p className="text-gray-600">Saturday - Sunday: 9:00 - 21:00</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 p-2">
  <form className="space-y-4">
    <div>
      <label className="text-sm font-medium text-gray-700">Your Name</label>
      <input
        type="text"
        className="mt-1 w-full border rounded-md"
      />
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Email Address</label>
      <input
        type="email"
        className="mt-1 w-full border rounded-md"
      />
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Subject</label>
      <input
        type="text"
        className="mt-1 w-full border rounded-md"
      />
    </div>
    <div>
      <label className="text-sm font-medium text-gray-700">Message</label>
      <textarea
        rows={4}
        placeholder="Tell us what you'd like to ask about"
        className="mt-1 w-full border rounded-md"
      />
    </div>
          <Button
              type="submit"
              className="w-32 text-black border-2 border-black p-2 rounded-md shadow  focus:ring-2 "
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
            </section>
            </div>
  )
};
export default Contact