import React,{useState,useEffect} from 'react'

function CartCard(props) {
    const {item,removeItem,no,cartItemNo, calculateItems} = props
    const [ItemNo, setItemNo] = useState(no)
    useEffect(  () => {
        setItemNo(no)
        
    }, [])
    const ButtonClick = async (val) => {
        let res = await cartItemNo(item._id,val)
        
        setItemNo(ItemNo + val)
        
        calculateItems(res)
        
    }
    return (
        <div>
         <div className="my-10 shadow hover:shadow-md transition duration-500">
            <img className="w-full" src="https://images.unsplash.com/photo-1484527273420-c598cb0601f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDU1MTN8MHwxfHNlYXJjaHw1MXx8bWVuLWZhc2hpb258ZW58MHx8fHwxNjM1MTAzMDIy&ixlib=rb-1.2.1&q=80&w=200" alt="" />
            <div className="p-4 space-y-8 text-center">
                <div className="flex justify-between">
                <p className="text-lg font-semibold">{item.title}</p>
                <p>$ {item.price}</p>
                </div>{console.log(no,ItemNo)}
            <div className="flex justify-between">
                <div className="flex">
                    <button className="border text-purple-500 bg-transparent px-4 py-2 hover:text-white hover:bg-purple-500 transition active:bg-purple-700" onClick={() => {ButtonClick(-1)}}>-</button>
                    <input className="border text-center w-10 " maxLength={4} value={ItemNo} onChange={()=>{}}/>
                    <button className="border text-purple-500 bg-transparent px-4 py-2 hover:text-white hover:bg-purple-500 transition active:bg-purple-700" onClick={()=>{ButtonClick(1)}}>+</button>
                </div>
                <button className="w-1/3 py-2 bg-white border text-red-700 hover:text-white hover:bg-red-700 transition active:bg-red-500" onClick={async ()=>{calculateItems(await removeItem(item._id))}}>Remove</button>
                
            </div>
            </div>
            </div>
        </div>
    )
}

export default CartCard
