import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";
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
    <section className="py-8 px-6 bg-[#FFFFFF]">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Top Picks For You</h2>
        <p className="text-gray-600">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Wrap everything inside TooltipProvider */}
      <TooltipProvider>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {products.map((item, index) => (
            <div key={index} className="p-6 ">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image src={item.image}
                   alt={item.name} 
                   width={287}
                   height={287}
                   className="w-full h-48 object-cover rounded" />
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
