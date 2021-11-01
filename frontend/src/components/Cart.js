import React from 'react'
import CartCard from './CartCard'
function Cart() {
    return (
        <div className="flex flex-col px-4 py-8 justify-center mt-9">
            <h1 className="text-4xl text-center">Your Shopping Cart</h1>
        <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">

            <CartCard/>
            <CartCard/>
            <CartCard/>
            
            
            </div>
            <div className="flex justify-between px-9">
                <span>
                    <p className="text-xl font-semibold">Total Items: 23</p>
                    <p className="text-xl font-semibold">SubTotal: $ 100</p>
                    </span>
                    <div className="flex space-x-5">
                    <button className="px-4 py-2 bg-white border text-red-700 hover:text-white hover:bg-red-700 transition active:bg-red-500">Empty Cart</button>
                    <button className="px-4 py-2 bg-white border text-indigo-700 hover:text-white hover:bg-indigo-700 transition active:bg-indigo-500">Checkout</button>
                    </div>
            </div>
        </div>
    )
}

export default Cart