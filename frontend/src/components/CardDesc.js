import React from 'react'

function CardDesc() {
    return (
        <div className="p-10 flex flex-col md:flex-row justify-center mt-20 md:space-x-9 space-y-3">
            <img className="" src="https://images.unsplash.com/photo-1484527273420-c598cb0601f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDU1MTN8MHwxfHNlYXJjaHw1MXx8bWVuLWZhc2hpb258ZW58MHx8fHwxNjM1MTAzMDIy&ixlib=rb-1.2.1&q=80&w=400" alt="" />
            <div className="p-0 text-center md:text-left md:p-7 space-y-3 ">
                <p className="text-lg font-semibold">Pink Purse with red color on it</p>
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem eveniet facere corporis vel ducimus optio illo temporibus voluptate placeat maiores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero asperiores quasi obcaecati! Doloribus mollitia officiis distinctio ducimus corrupti saepe odio ipsum aliquid molestias quia, omnis, pariatur magni tempore voluptatibus nobis!</p>
                <p>Price: $ 10</p>
                
                <p >🌟🌟🌟🌟</p>
                <div className="flex space-x-2">
                <button className="w-1/2 py-2  rounded-full bg-purple-600 text-white hover:bg-purple-700" >Buy now</button>
                <button className="w-1/2 py-2  rounded-full bg-purple-50 text-purple-600 hover:text-purple-700" >Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default CardDesc
