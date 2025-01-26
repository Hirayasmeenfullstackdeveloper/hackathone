import Image from "next/image";
import React from 'react'
// import { Button} from "@/components/ui/button";
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
            </section>
            /</div>
  )
};
export default Contact