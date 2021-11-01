import React from 'react'

function CardItem() {
    return (
        <div>
            <div className=" my-10 rounded-xl shadow-md ">
            <img className="w-full" src="https://images.unsplash.com/photo-1484527273420-c598cb0601f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDU1MTN8MHwxfHNlYXJjaHw1MXx8bWVuLWZhc2hpb258ZW58MHx8fHwxNjM1MTAzMDIy&ixlib=rb-1.2.1&q=80&w=200" alt="" />
            <div className="p-4 space-y-2 text-center">
                <p>Pink Purse with red color on it</p>
                <p>Price : $ 10</p>
                <p >🌟🌟🌟🌟</p>
                <div className="flex space-x-2">
                <button className="w-1/2 py-2  rounded-full bg-purple-600 text-white hover:bg-purple-700" >Buy now</button>
                <button className="w-1/2 py-2  rounded-full bg-purple-50 text-purple-600 hover:text-purple-700" >Add To Cart</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CardItem
