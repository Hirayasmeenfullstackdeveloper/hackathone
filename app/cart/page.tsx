import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function CartPage() {
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
     
      <h2 className="font-semibold mt-14 text-black text-[30px]">Cart</h2>
      <p className="text-gray-600">Home &gt; Cart</p>
      </div>
      </div>
      
        
      <div className="flex flex-col md:flex-row justify-between gap-6">
  {/* <!-- Left section: Table + Product Image --> */}
  <div className="flex flex-col md:flex-row justify-between items-start gap-6 p-4 bg-white">
  {/* Left section: Cart Table */}
  <div className="flex-1 bg-white p-4 overflow-x-auto">
    <table className="table-auto w-full text-left border-collapse mb-6">
      <thead>
        <tr className="bg-[#FFF9E5] text-gray-700">
          <th className="px-4 py-2">Product</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Quantity</th>
          <th className="px-4 py-2">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/Asgaard-sofa-1.png"
                alt="Dining Chair"
                width={100}
                height={100}
                className="rounded shadow"
              />
              <span>Asgaard Sofa</span>
            </div>
          </td>
          <td className="px-4 py-2">Rs. 250,000.00</td>
          <td className="px-4 py-2">
            <input
              type="number"
              defaultValue="1"
              className="w-12 border rounded text-center"
            />
          </td>
          <td className="px-4 py-2">Rs. 250,000.00</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Right section: Cart Totals */}
  <div className="bg-[#FFF9E5] p-4 sm: w-[300] h-[300] md:w-[390]  ">
    <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
    <div className="flex justify-between mb-2">
      <span>Subtotal:</span>
      <span>Rs. 250,000.00</span>
    </div>
    <div className="flex justify-between mb-4">
      <span>Total:</span>
      <span className="font-bold">Rs. 250,000.00</span>
    </div>
    <Button className="w-24 border-black border-2 text-black py-0 rounded hover:none">
      Check Out
    </Button>
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

          


/</section>
      </div>
    );
  }
  
  
  