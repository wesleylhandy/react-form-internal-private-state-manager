import React, {Component} from 'react'

import cart from '../utils/Cart'
import CartModal from './CartModal'

class ViewCart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: [],
            totalPrice: 0,
            open: false
        }
        this.handleCartOpen = this.handleCartOpen.bind(this)
        this.handleCartClose = this.handleCartClose.bind(this)
    }

    componentDidMount() {
        this.setState(cart.getCart)
    }

    handleCartOpen(e) {
        e.preventDefault();
        const { orders, totalPrice} = cart.getCart();
        this.setState({orders, totalPrice, open: true})
    }

    handleCartClose(e) {
        e.preventDefault();
        this.setState({open: false})
    }

    render() {
        const {open, totalPrice, orders} = this.state
        return (
            <React.Fragment>      
                <div className="cart">
                    <button className="open-cart" onClick={this.handleCartOpen}>
                        <i className="material-icons">
                            shopping_cart
                        </i>
                    </button>
                </div>
                <CartModal open={open} totalPrice={totalPrice} orders={orders} handleClick={this.handleCartClose}/>
            </React.Fragment> 
        )
    }
}

export default ViewCart;