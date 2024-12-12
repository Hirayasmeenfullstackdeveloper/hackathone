import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const products = [
  {
    name: "Trenton modular sofa",
    price: "Rs. 25,000.00",
    image: "/images/modularsofa.png",
    tooltip: "Muntaha Shah",
  },
  {
    name: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    image: "/images/chairs.png",
    tooltip: "Zohair",
  },
  {
    name: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    image: "/images/chairs2.png",
    tooltip: "Zohair",
  },
  {
    name: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    image: "/images/mirror.png",
    tooltip: "Zohair",
  },
];

const TopPicksSection = () => {
   
  return (
    <div>
    <section className="py-0 px-1 bg-[#FFFFFF]">
      <div className="bg-[url(/images/bg-pic.png)] w-full md:full h-250px] md:h-[316px]">
      <div className="items-center justify-center pt-32 pl-64 ml-28">
         <Image
         src='/images/House_Logos-05.png'
         alt="image"
         width={77}
         height={77}
         className="items-center justify-center "
         />
      </div>
      <h2>Shop</h2>
      </div>
      {/* Wrap everything inside TooltipProvider */}
      <TooltipProvider>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {products.map((item, index) => (
            <div key={index} className="p-6 ">
              <Tooltip>
                <TooltipTrigger asChild>
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded" />
                </TooltipTrigger>
                <TooltipContent className="p-2 bg-gray-800 text-white text-sm rounded-md">
                  {item.tooltip}
                </TooltipContent>
              </Tooltip>
              <h3 className="mt-4 text-lg font-sm">{item.name}</h3>
              <p className="text-black font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </TooltipProvider>

      <div className="text-center mt-6">
      <p className="text-black font-medium underline">
          View More
        </p>
      </div>
    </section>

    </div>
    
  );
};

export default TopPicksSection;
