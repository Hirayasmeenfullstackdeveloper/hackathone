import React from 'react'
import { Button } from '@/components/ui/button'

const followUs = () => {
  return (
    <div className='w-full '>
        <section className="bg-[url('/images/Rectangle-17.png')] bg-cover bg-center
        w-full md:[80%] h-[300px] md:h-[450px] overflow-hidden justify-center item-center
         min-h-[300px] flex items-center">
             <div className="text-center justify-center
              text-black ">
    <h2 className="text-4xl md:text-6xl font-bold">Our Instagram</h2>
    <p>Follow our store on Instagram.</p>
  
  <Button className='text-xl border border-black text-black rounded-none mt-6'>Follow Us</Button></div>
        </section>
     </div>
  )
}

export default followUs

