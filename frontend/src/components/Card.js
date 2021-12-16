import React, {useEffect,useContext} from 'react'
import CardItem from './CardItem'
import ItemContext from '../context/item/ItemContext'
function Card() {
    const context = useContext(ItemContext)
    const {items,fetchItems,setItems,addToCart} = context
    useEffect(() => {
        (async () => {
            setItems(await fetchItems())
            
            })();
        
    }, [])
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
            {console.log(items)}
            {Array.isArray(items) && items.map((item)=>{    
                return <CardItem item={item} key={item._id}  addToCart={addToCart} />
        
            })}
        </div>
    )
}

export default Card
