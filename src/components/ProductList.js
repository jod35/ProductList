import React from 'react'
import Product from './Product'
import products from '../data'


class ProductList extends React.Component{
   
    render(){
        let product_items=products.map((product)=>{
            <Product/>
        })
        return(
            <div className='products'>
                <h2>Products</h2>
            </div>
        )
    }
}

export default ProductList