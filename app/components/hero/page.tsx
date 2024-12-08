import React from 'react'
import Image from 'next/image';


const Hero = () => {
  return (
    <div>
    <div className="bg-[#FBEBB5] w-full h-[40vh] md:h-[60vh] flex md:flex-row 
    items-center justify-center px-8 md:px-16 mt-0 md:mt-0">
       {/* heading */}
      <div className="item-center md:items-center space-y-3  w-1/2 md:w-1/2 ">
        <h1 className="p-2 md:p-4 ml-12 md:ml-20 text-[40px] md:text-[64px] font-bold text-black leading-tight">
          Rocket single <br />
          seater
        </h1>
        <p className=" p-2 md:p-4 ml-12 md:ml-20 text-lg text-black underline">
          Shop Now
        </p>
        
      </div>

      {/* Images */}
      <div className=" w-1/2 md:w-1/2 flex justify-center items-center mr-6 md:mr-8">
        <Image
          src="/images/Rocket-single-seater.png"
          alt="image"
          width={853}
          height={1000}
          className="w-3/4 h-auto"
        />
      </div>
      </div>
        

        <div className='bg-[#FAF4F4;] w-full h-[40vh] md:h-[60vh] flex md:flex-row '>
        <div className='md:w-1/2 flex justify-center items-center mt-6 md:mt-10'>
        <Image
        src="/images/sidetable.png"
        alt="image"
        width={853}
        height={1000}
        className="w-3/4 h-auto"
        />
       </div>
       <div className='md:w-1/2 flex justify-center items-center mt-4 md:mt-8'>
        <Image
        src="/images/sidetables.png"
        alt="image"
        width={853}
        height={1000}
        className="w-3/4 h-auto "
        />
        
        </div>
       </div>
       </div>
       
  );
}; 

    

export default Hero
