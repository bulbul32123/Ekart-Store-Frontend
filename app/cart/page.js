'use client'
import CartCard from '@/components/CartCard'
import Image from 'next/image';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js';
import { makePaymentRequest } from '@/utils/api';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);
  const subTotal = cart.length > 0 ? cart.reduce((accum, curitem) => {
    const { price } = curitem?.attributes;
    return accum + (price * curitem?.quantity);
  }, 0) : 0;

  const handlePayment = async () => {
    try {
      setLoading(true)
      const stripe = await stripePromise
      const res = await makePaymentRequest('/api/orders', {
        products: cart
      })
      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id
      })
    }
    catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        {cart.length > 0 ? (
          <div className="mx-auto max-w-screen-lg px-4 md:px-8">
            <div className="mb-6 sm:mb-10 lg:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Your Cart</h2>
            </div>

            <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
              {/* <!-- product - start --> */}
              {cart.map((data,inde) => (
                <CartCard item={data} key={inde} />
              ))
              }
              {/* <!-- product - end --> */}
            </div>

            {/* Check Out */}
            <div className="flex flex-col items-end gap-4">
              <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
                <div className="space-y-1">
                  <div className="flex justify-between gap-4 text-gray-500">
                    <span>Subtotal</span>
                    <span>${subTotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between gap-4 text-gray-500">
                    <span>Shipping</span>
                    <span>$4.99</span>
                  </div>
                </div>

                <div className="mt-4 border-t pt-4">
                  <div className="flex items-start justify-between gap-4 text-gray-800">
                    <span className="text-lg font-bold">Total</span>

                    <span className="flex flex-col items-end">
                      <span className="text-lg font-bold">${(subTotal + 4.99).toFixed(2)} USD</span>
                      <span className="text-sm text-gray-500">including VAT</span>
                    </span>
                  </div>
                </div>
              </div>

              <button disabled={loading} onClick={handlePayment} className={` ${loading && 'cursor-not-allowed'} rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base flex gap-3`} >Check out
                {loading && <img src='/spinner.svg' />} </button>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-screen-lg px-4 md:px-8">
            <div className="mb-6 sm:mb-10 lg:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 lg:text-3xl">Your Cart is Empty</h2>
              <p className='text-gray-700 text-sm text-center mb-4'>Please try to add some products</p>
            </div>
            <div className="flex h-full w-full justify-center items-center mt-4">
              <Image src='/empty-cart.jpg' height={100} width={100} className='w-60 h-60 imgSelectNone' />
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}
