import ItemContext from "./ItemContext"
import  { useState } from 'react'




const ItemState  = (props) => {
  

    const makeApiCall = async (url,body,method) => {
      const response = await fetch(`http://localhost:5000/api/${url}`, {
      method: method,
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "auth-token": localStorage.getItem("token")
      },
      body:JSON.stringify(body)
      });
      if (response.status == 200){
        const content = await response.json();
        return  content
      }
      else{
        console.log("error",response.statusText)
        return response.status
      }
      
    }
    const [items, setItems] = useState([])
    const fetchItems = async () => {
        return await makeApiCall("items/fetchItems",{},"POST")

    }
    const fetchItemDetail = async (id) => {
      return await makeApiCall(`items/getDetail/${id}`,{},"POST")
    }
    
    const fetchCartItems = async () => {
      return await makeApiCall("items/fetchcartitems",{},"POST")
    }
    const emptyCart = async () => {
      await makeApiCall("items/emptyCart",{},"POST")
      setItems([])
    }
    const addToCart = async (id) => {
      return await makeApiCall("items/addToCart",{ItemId:id},"POST")
      
    }
    const removeItem = async (id) => {
      let res = await makeApiCall("items/removeItem",{ItemId:id},"POST")
      setItems(res)
      return res
    }
    const cartItemNo = async (id,val) => {
      let res = await makeApiCall("items/cartItemNo",{ItemId:id,val:val},"POST")
      return res
    }

    
    return (
        <ItemContext.Provider value={{items,fetchItems,setItems,removeItem,fetchItemDetail,fetchCartItems,emptyCart,addToCart,cartItemNo}}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemState
