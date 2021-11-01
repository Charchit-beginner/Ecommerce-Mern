import React from 'react'

function CartCard() {
    return (
        <div>
         <div className="my-10 shadow hover:shadow-md transition duration-500">
            <img className="w-full" src="https://images.unsplash.com/photo-1484527273420-c598cb0601f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDU1MTN8MHwxfHNlYXJjaHw1MXx8bWVuLWZhc2hpb258ZW58MHx8fHwxNjM1MTAzMDIy&ixlib=rb-1.2.1&q=80&w=200" alt="" />
            <div className="p-4 space-y-8 text-center">
                <div className="flex justify-between">
                <p className="text-lg font-semibold">PInk Purse</p>
                <p>$ 100</p>
                </div>
            <div className="flex justify-between">
                <div className="flex">
                    <button className="border text-purple-500 bg-transparent px-4 py-2 hover:text-white hover:bg-purple-500 transition active:bg-purple-700">-</button>
                    <input className="border text-center w-10 " maxLength={4} value={1} />
                    <button className="border text-purple-500 bg-transparent px-4 py-2 hover:text-white hover:bg-purple-500 transition active:bg-purple-700" >+</button>
                </div>
                <button className="w-1/3 py-2 bg-white border text-red-700 hover:text-white hover:bg-red-700 transition active:bg-red-500">Remove</button>
                
            </div>
            </div>
            </div>
        </div>
    )
}

export default CartCard
