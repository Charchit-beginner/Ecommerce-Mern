import React, { useEffect, useContext, useState } from 'react'
import CartCard from './CartCard'
import ItemContext from '../context/item/ItemContext'
import { useHistory } from 'react-router'

function Cart() {
    const context = useContext(ItemContext)
    const history = useHistory()
    const { items, fetchCartItems, emptyCart, setItems  , removeItem , cartItemNo} = context
    const [totalItem, setTotalItem] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const calculateItems =  (items) => {
        let a = 0
        let b = 0 
        items.cart  && items.cart.forEach(element => {
            a+=element.no 
            b += element.no * element.item.price
        });
        setTotalItem(a)
        setSubTotal(b)
    }

    useEffect(() => {
        (async () => {

            if (localStorage.getItem("token")) {
                let res = await fetchCartItems()
                if (res == 401) {
                    console.log(res,"hiwhat")
                    history.push("/login")
                }
                else {
                    setItems(res)
                    calculateItems(res)
                    
                }
            }
            else {
                history.push("/login")
            }
        })();
        
    }, [])

        return (
        <div className="flex flex-col px-4 py-8 justify-center mt-9">
            <h1 className="text-4xl text-center">Your Shopping Cart</h1>
            {items.cart && items.cart.length == 0 ? <div className="text-center  p-10 text-gray-400 text-4xl">No Item</div> : ""}
            <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">
                {console.log(items)}
                {Array.isArray(items.cart) && items.cart.map((item) => {

                    return <CartCard item={item.item} no={item.no} key={item.item._id} removeItem={removeItem} cartItemNo={cartItemNo} calculateItems={calculateItems}/>
                })}



            </div>
            <div className="flex justify-between px-9">
                <span>
                    <p className="text-xl font-semibold">Total Items: {totalItem}</p>
                    <p className="text-xl font-semibold">SubTotal: $ {subTotal}</p>
                </span>
                <div className="flex space-x-5">
                    <button className="px-4 py-2 bg-white border text-red-700 hover:text-white hover:bg-red-700 transition active:bg-red-500" onClick={()=>{emptyCart();setTotalItem(0);setSubTotal(0)}}>Empty Cart</button>
                    <button className="px-4 py-2 bg-white border text-indigo-700 hover:text-white hover:bg-indigo-700 transition active:bg-indigo-500">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart