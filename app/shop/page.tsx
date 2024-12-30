import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";
import Image from "next/image";
import { BiGridSmall } from "react-icons/bi";
import { TbAdjustmentsFilled } from "react-icons/tb";
import { BsViewList } from "react-icons/bs";

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
    <section className="py-0 px-1 bg-[#FFFFFF] text-center md:text-center justify-center md:justify-center overflow-hidden  ">
      <div className="bg-[url(/images/bg-pic.png)] w-full h-[250px] md:h-[316px] bg-cover bg-center flex items-center justify-center relative">
      <div className=" items-center justify-center mb-20 ">
         <Image
         src='/images/House_Logos-05.png'
         alt="image"
         width={77}
         height={77}
         className="absolute ml-6 "
         
         />
      </div>
      <h2 className="font-semibold text-x1 mt-32 text-black text-[48px]">Shop</h2>
      </div>
      <div className="bg-[#FAF4F4] w-full h-[100px] top-[463px] mt-12 p-2 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center ml-6 gap-1 mb-4 md:mb-0">
        <span className="transform rotate-90 ">
        <TbAdjustmentsFilled size={20}
        /></span>
        <button className="flex flex-col items-center gap-2 px-4 py-2 text-gray-600 font-semibold">
        Filter
        </button>
         <div className="flex ml-0">
          <BiGridSmall size={28}/>
         <BsViewList size={26}/>
         </div>
        
         <div className="text-gray-600 text-left ml-5">Showing 1–16 of 32 results</div>
        </div>
         <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border border-gray-300 rounded p-1">
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
        </div>
        </div> 
        <div className="flex items-center gap-2">
          <span>Short by</span>
          <select className="border border-gray-300 rounded p-1 mr-4">
            <option value="default">Default</option>
            </select> 
            </div>
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
                   width={77}
                   height={77}

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
