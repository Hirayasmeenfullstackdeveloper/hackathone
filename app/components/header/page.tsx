import React from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#FBEBB5]">
      {/* Header */}
      <div className="w-full h-[60px] bg-white">
        <div className="flex justify-between items-center h-full px-4 md:px-16">
          {/* Navbar */}
          <nav className="w-full md:w-auto">
            <ul className="flex md:flex-row gap-4 md:gap-6 text-black">
              <li><Link href="/" className="cursor-pointer text-left md:text-center">Home</Link></li>
              <li><Link href="/shop" className="cursor-pointer text-left md:text-center">Shop</Link></li>
              <li><Link href="/about" className="cursor-pointer text-left md:text-center">About</Link></li>
              <li><Link href="/contact" className="cursor-pointer text-left md:text-center">Contact</Link></li>
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 justify-center md:justify-end w-full md:w-auto">
            <RiContactsLine
              size={26}
              className="cursor-pointer text-black hover:text-gray-700"
            />
            <CiSearch
              size={26}
              className="cursor-pointer text-black hover:text-gray-700"
            />
            <CiHeart
              size={28}
              className="cursor-pointer text-black hover:text-gray-700"
            />
            <CiShoppingCart
              size={32}
              className="cursor-pointer text-black hover:text-gray-700"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

