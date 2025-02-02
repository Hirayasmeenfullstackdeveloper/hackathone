"use client";
import React, { useEffect, useState } from 'react';
import { Product } from '@/types/product';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
// import dynamic from 'next/dynamic';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const [cartItem, setCartItem] = useState<Product[]>([]);

  useEffect(() => {
    setCartItem(getCartItems());
  }, []);

  const handleRemove = (id: string, quantity: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d62",
      cancelButtonColor: "d33",
      confirmButtonText: "Yes! remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id,quantity);
        setCartItem(getCartItems());
        Swal.fire("Removed", "It has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id,quantity);
    setCartItem(getCartItems());
  };

  const handleIncreament = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.stockLevel + 1);
  };

  const handleDecreament = (id: string) => {
    const product = cartItem.find((item) => item._id === id);
    if (product && product.stockLevel > 1)
      handleQuantityChange(id, product.stockLevel - 1);
  };

  const calculatedTotal = () => {
    return cartItem.reduce(
      (total, item) => total + item.price * item.stockLevel,
      0
    );
  };
 const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "Please review your cart before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "d33",
      confirmButtonText: "Yes! proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success");
        router.push("/checkout");
        setCartItem([]); // Clear cart after successful checkout
      }
    });
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-6'>Shopping Cart</h1>
      {cartItem.length === 0 ? (
        <p className='text-center text-gray-500'>Your cart is empty</p>
      ) : (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2'>
            {cartItem.map((item) => (
              <div
                key={item._id}
                className='flex items-center bg-white shadow-md rounded-lg p-4 mb-4'
              >
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className='w-16 h-16 object-cover rounded-lg'
                    alt='Product image'
                    width={500}
                    height={500}
                  />
                )}
                <div className='flex-1 ml-4'>
                  <h2 className='text-lg font-semibold'>{item.name}</h2>
                  <p className='text-gray-500'>
                    price ${item.price.toFixed(2)}
                  </p>
                  <div className='flex items-center space-x-2 mt-2'>
                    <Button
                      onClick={() => handleDecreament(item._id)}
                      className='px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded '
                    >
                      -
                    </Button>
                    <span>{item.stockLevel}</span>
                    <Button
                      onClick={() => handleIncreament(item._id)}
                      className='px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded'
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => handleRemove(item._id, item.stockLevel)}
                  className='px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded'
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>

          <div className='lg:col-span-1'>
            <Button
              onClick={handleProceed}
              className='w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
            >
              Proceed to Checkout
            </Button>
            <div className='mt-4 text-xl font-bold'>
              Total: ${calculatedTotal().toFixed(2)} USD
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
