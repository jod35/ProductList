import React from 'react'
import Product from './Product'
import products from '../data'


class ProductList extends React.Component{
   
    render(){
        let product_items=products.map((product)=>(
            <Product
                 key={'product -' + product.id} 
                 name={product.name}
                 price={product.price}
                 quantity={product.quantity}

            />
        ))
        return(
            <div className='products'>
                <h2>Products</h2>
                {product_items}
            </div>
        )
    }
}

export default ProductList