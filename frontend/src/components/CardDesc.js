import React,{useState,useContext,useEffect} from 'react'
import ItemContext from '../context/item/ItemContext'
import {useParams} from "react-router-dom"
function CardDesc() {
    const context = useContext(ItemContext)
    const {id} = useParams()
    const {fetchItemDetail,addToCart} = context
    const [item, setItem] = useState({})
    useEffect(() => {
        (async () => {
            setItem(await fetchItemDetail(id))
            })();
        
    }, [])
    return (
        <div className="p-10 flex flex-col md:flex-row justify-center mt-20 md:space-x-9 space-y-3">
            {console.log(item)}
            <img className="" src="https://images.unsplash.com/photo-1484527273420-c598cb0601f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDU1MTN8MHwxfHNlYXJjaHw1MXx8bWVuLWZhc2hpb258ZW58MHx8fHwxNjM1MTAzMDIy&ixlib=rb-1.2.1&q=80&w=400" alt="" />
            <div className="p-0 text-center md:text-left md:p-7 space-y-3 ">
                <p className="text-lg font-semibold">{item.title}</p>
                <p >{item.description}</p>
                <p>Price: $ {item.price}</p>
                
                <p >like : {item.like}</p>
                <div className="flex space-x-2">
                {/* <button className="w-1/2 py-2  rounded-full bg-purple-600 text-white hover:bg-purple-700" >Buy now</button> */}
                <button className="px-8 py-2  rounded-full bg-purple-50 text-purple-600 hover:text-purple-700" onClick={async ()=>{(await addToCart(id))}} >Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default CardDesc
