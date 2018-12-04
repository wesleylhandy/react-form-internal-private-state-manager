import React from 'react'

function CartModal({open, totalPrice, orders, handleClick }) {

    return (
        <div className={open ? "cart-modal" : "cart-modal faded"}>
            <div className="modal-body">
                <button className="close-btn" onClick={handleClick}>
                    <i className="material-icons">
                        close
                    </i>
                </button>
                <div className="cart-orders">
                    <h1>Your Cart</h1>
                    <hr/>
                    <div className="order-headers">
                        <span>Product Id</span><span>Title</span><span>Cost</span><span>#</span><span>SubTotal</span>
                    </div>
                    {
                        orders.map((order, ind)=>{
                            return (
                                <div className="order-single" key={`order-${ind}`}>
                                    <span>{order.cartId}</span><span>{order.title}</span><span>{order.cost}</span><span>{order.quantity}</span><span>{order.subTotal}</span>
                                </div>
                            )
                        })
                    }
                    <hr/>
                    <div className="order-total">
                        <span>TOTAL PRICE:</span><span>${totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartModal