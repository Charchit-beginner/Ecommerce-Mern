import React from 'react'

function ProductItem() {
    return (
        <>
            <div className="flex shadow-md pr-7 ">
                    <img src="https://images.unsplash.com/photo-1484527273420-c598cb0601f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDU1MTN8MHwxfHNlYXJjaHw1MXx8bWVuLWZhc2hpb258ZW58MHx8fHwxNjM1MTAzMDIy&ixlib=rb-1.2.1&q=80&w=200" alt="" />
                    <div className="space-y-3 p-5">
                        <p className="text-lg font-semibold">Pink bag with red </p>
                        <p>$ 1000</p>
                    <button className="px-4 py-2 bg-white border text-purple-700 hover:text-white hover:bg-purple-700 transition active:bg-purple-500">More Info</button>
                    </div>
            </div>
        </>
    )
}

export default ProductItem
