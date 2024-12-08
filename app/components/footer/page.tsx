import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 w-full h-[400px]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6"> 
        <div className="flex flex-col space-y-2">
        <address className="text-sm mt-28 text-[#9F9F9F]">
            400 University Drive Suite 200, <br />
            Coral Gables, FL 33134, USA
          </address>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-4 mt-6">
          <h5 className="font-semibold text-[#9F9F9F] ">Links</h5>
          <ul>
          <li><Link href="#" className="text-black hover:text-gray-400">Home</Link></li>
          <li><Link href="#" className="text-black hover:text-gray-400">Shop</Link></li>
          <li><Link href="#" className="text-black hover:text-gray-400">About</Link></li>
          <li><Link href="#" className="text-black hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>

        
        <div className="flex flex-col space-y-4 mt-6">
          <h5 className="font-semibold text-[#9F9F9F] ">Support</h5>
          <ul>
          <li><Link href="#" className="text-black hover:text-gray-400">Help </Link></li>
           <li><Link href="#" className="text-black hover:text-gray-400">Payment Options</Link></li>
           <li><Link href="#" className="text-black hover:text-gray-400">Returns</Link></li>
           <li><Link href="#" className="text-black hover:text-gray-400">Privacy Policies</Link></li>
          </ul>
        </div>

        
        <div className="flex flex-col space-y-4 mt-6">
          <h5 className="font-semibold text-[#9F9F9F] ">Newsletter</h5>
          <p className="text-sm text-[#9F9F9F] ">Enter your Email Address Subscribe</p>
          
        </div>
      </div>
      <hr className="mt-44"/>

       {/* Copyright  */}
      <div className="text-left md;text-left  ml:2 md:ml-4 text-[16px ] text-black py-4">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;