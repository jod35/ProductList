import React from 'react'

class Product extends React.Component{
    constructor(){
        super()
        this.state={
            "answer":"Yes"
        }
    }
    render(){
        return(
            <div className='product'>
                <h3 className="product-name">
                    {this.props.name}
                </h3>
                <p>price: {this.props.price}</p>
                <div className="details">
                <p>quantity: {this.props.quantity}</p>
                <p>{this.state.answer}</p>
                </div>
            </div>
        )
    }
}

export default Product