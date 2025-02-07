"use client"
import { BiGridSmall } from "react-icons/bi";
import { TbAdjustmentsFilled } from "react-icons/tb";
import { BsViewList } from "react-icons/bs";
import Image from "next/image";
import { client } from "@/sanity/lib/client"
import { Product } from "@/types/product"
import { useEffect, useState } from "react";
import {  twelve } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../actions/actions";
import { Button } from "@/components/ui/button";
import Swal from 'sweetalert2'


const Shop = () => {
   const [product, setProduct] = useState <Product[]>([]);
   useEffect (() => {
    async function fetchproduct(){
      const fetchedproducts : Product[] = await client.fetch(twelve)
      setProduct(fetchedproducts)
    }
    fetchproduct()

   },[]); 
   const handleAddToCart : (e: React.MouseEvent, product : Product) =>void = (e, product) =>  {
    e.preventDefault()
    addToCart(product)
    Swal.fire({
      position : "top-left",
      icon : "success",
      title : `${product.name} added to cart`,
      showConfirmButton : false,
      timer : 1000
    })
   }
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
         className="absolute ml-1 "
         
         />
     
      <h2 className="font-semibold mt-14 text-black text-[30px]">Shop</h2>
      <p className="text-gray-600">Home &gt; Shop</p>
      </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 p-16">
    {product.map((product) => (
      <div key={product._id}
      className="border rounded-lg shadow-md p-4 ">
        <Link href = {`/product/${product.slug.current}`}>
          <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
        {product.image &&(
          <Image
          src={urlFor(product.image).url()}
          alt="image"
          width={200}
          height={200}
          className="w-full h-48 object-cover rounded-md"
          />
        )}
      
        <p className="text-gray-500 mt-2">
          {product.price ? `$${product.price}` : "price not available"}</p>
          <Button className="bg-red-300 text-white font-semibold py-2 px-4
          rounded hover:scale-110 transition-transform duration-400 ease-in-out " onClick={(e) => handleAddToCart(e,product)}>
          Add To Cart
         
          </Button>
          </Link>
      </div>
    ))};
    </div>
    </section>

    </div>
    
    
  );
};

export default Shop;