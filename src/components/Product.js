import React from 'react'

class Product extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
            <div className='product'>
                <h3 className="product-name">
                    {this.state.name}
                </h3>
                <p>price: {this.state.price}</p>
                <div className="details">
                <p>quantity: {this.state.quantity}</p>
                </div>
            </div>
        )
    }
}

export default Product