import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function CartPage() {
    return (
      <div className="container mx-auto p-4">
        {/* Header */}
        <header className="text-center py-6">
          <h1 className="text-4xl font-bold">Cart</h1>
          <p className="text-gray-600">Home &gt; Cart</p>
        </header>
  
        {/* Cart Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 flex items-center space-x-4">
                  {/* Product Image */}
                  <Image
                    src="/images/Asgaard-sofa-1.png"
                    alt="Dining Chair"
                    width={180}
                    height={180}
                    className="rounded shadow"
                  />
                  <span>Asgaard Sofa</span>
                </td>
                <td className="px-4 py-2">Rs. 25,000.00</td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    defaultValue="1"
                    className="w-12 border rounded text-center"
                  />
                </td>
                <td className="px-4 py-2">Rs. 25,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/* Cart Totals */}
        <div className="mt-6 flex justify-between">
          <div></div>
          <div className="bg-gray-100 p-4 rounded shadow-md w-1/3">
            <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Total:</span>
              <span className="font-bold">Rs. 250,000.00</span>
            </div>
            <Button variant="default" className="w-full">
              Check Out
            </Button>
          </div>
        </div>
  
        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mt-10 text-center">
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
  
        
      </div>
    );
  }
  
  
  