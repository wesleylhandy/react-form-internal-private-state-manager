import React from 'react'

function Product({description, quantity, cost, title, cartId, handleClick }) {
    const total = quantity * cost
    const handleBtnClick = (e) => {
      const {name} = e.target;
      handleClick(name, cartId, "product")
    }
    return (
      <div className="product">
        { title ? <h2>{title}</h2> : null}
        <div className="product-description">
          <h3>Description</h3>
          <div>{description}</div>
        </div>
        <div className="product-price">
          <h4>Price per Item</h4>
          <div>{cost}</div>
        </div>
        <div className="product-quantity">
          <h4>Quantity</h4>
          <div>{quantity}</div>
          <div className="button-group">
            <button name="increment" onClick={handleBtnClick}>Add</button>
            <button name="decrement" onClick={handleBtnClick}>Subtract</button>
          </div>
        </div>
  
        <div className="product-subtotal">
          <h4>Total Cost</h4>
          <p>{total}</p>
        </div>
      </div>
    )
}

export default Product;