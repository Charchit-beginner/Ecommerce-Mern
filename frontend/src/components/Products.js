import React from 'react'
import AddItems from "./AddItems"
import ProductItem from "./ProductItem"
function Products() {
    return (
        <div className="flex flex-col justify-center mt-20">
            
            <h1 className="text-4xl text-center">Your Products</h1>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3    gap-5">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
            <AddItems/>
        </div> 
    )
}

export default Products
