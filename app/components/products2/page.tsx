import React from 'react'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Asgaard = () => {
  return (
    <div className="w-full h-full flex items-center justify-center py-8 px-6 bg-[#FFF9E5]">
      {/* Asgaard sofa */}
      <section className="flex flex-col md:flex-row justify-center items-center w-full md:w-[80%] h-auto md:h-[80vh]">
        {/* Image Section */}
        <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
          <Image 
            src='/images/Asgaard-sofa-1.png'
            alt='Asgaard sofa'
            width={550}
            height={499}
            className='mt-0'
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-center md:items-start md:w-1/3 md:ml-12 text-center md:text-left">
          <h5 className="text-[12px] font-semibold text-gray-600">New Arrival</h5>
          <h1 className='font-semibold text-3xl text-gray-800 mt-2'>Asgaard Sofa</h1>
          <Button className="mt-4 px-6 py-2 text-black border-2 border-black rounded-none hover:bg-gray-100 transition-all duration-300">
            Order Now
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Asgaard