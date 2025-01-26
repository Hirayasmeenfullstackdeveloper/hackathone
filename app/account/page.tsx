import Image from "next/image";
import React from 'react'
import { Button} from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input";

const Account = () => {
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
            <h2 className="font-semibold mt-14 text-black text-[30px]">My Account</h2>
            <p className="text-gray-600">Home &gt; My Account</p>
            </div>
            </div>

            <div className="flex justify-center items-center min-h-screen bg-white text-left">
  <div className="w-full max-w-4xl bg-white p-4 grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Login Section (Left side) */}
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Log In</h2>
      <div>
        <label htmlFor="login-username" className="text-sm text-gray-700">Username or email address</label>
        <Input id="login-username" />
      </div>
      <div>
        <label htmlFor="login-password" className="text-sm text-gray-700">Password</label>
        <Input type="password" id="login-password" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <label htmlFor="remember" className="text-sm">Remember me</label>
      </div>
      <Button className="w-24 border-black border-2 text-black py-0 rounded hover:none">Log In</Button>
      <a href="#" className="text-sm text-black p-2">Lost Your Password?</a>
    </div>

    {/* Register Section (Right side) */}
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Register</h2>
      <div>
        <label htmlFor="email" className="text-sm text-gray-700">Email address</label>
        <Input id="email" />
      </div>
      <p className="text-sm text-gray-500">
        A link to set a new password will be sent to your email address.
      </p>
      <p className="text-sm text-gray-500">
        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.{" "}
        <a href="#" className="text-blue-500">privacy policy</a>.
      </p>
      <Button className="w-24 border-black border-2 text-black py-0 rounded hover:none">Register</Button>
    </div>
  </div>
</div>





            {/* <!-- Free Delivery, Return, and Payment Info --> */}
<div className="bg-[#FAF4F4] h-32 p-8 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center justify-between">
  <div>
    <h3 className="font-bold">Free Delivery</h3>
    <p>On all orders above Rs. 10,000.</p>
  </div>
  <div>
    <h3 className="font-bold">90 Days Return</h3>
    <p>Easy returns within 90 days.</p>
  </div>
  <div>
    <h3 className="font-bold">Secure Payment</h3>
    <p>100% secure payment process.</p>
  </div>
</div>
            </section>
    </div>
  )
}

export default Account
