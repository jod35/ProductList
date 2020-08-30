import React from 'react'
import Product from './Product'
import products from '../data'


class ProductList extends React.Component{
    constructor(){
        super()
        this.state={
            product_data:products
        }
    }
    render(){
        let product_items=this.state.product_data.map((product)=>(
            <Product
                 key={'product -' + product.id} 
                 name={product.name}
                 price={product.price}
                 quantity={product.quantity}

            />
        ))
        return(
            <div className='products'>  
                
                {product_items}
            </div>
        )
    }
}

export default ProductList