import React, {Component} from 'react'

import renderChildren from '../utils/renderChildren.js'

// for importating the cart object. will only instantiate once, which was done at root level already
import cart from '../utils/Cart.js'

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        config: {...props.config},
        productList: props.productList
      }
      this.handleClick = this.handleClick.bind(this)
    }
    
    /**
     * 
     * @param {String} name - input name
     * @param {String} cartId - id of the element in the cart
     * @param {String} type - for determining type of button click 
     */
    handleClick(name, cartId, type = '') {
      const handler = name === 'decrement' ? cart.decrementProductQuantity : cart.incrementProductQuantity
      this.setState( handler(cartId) )
    }
    
    render() {
      const {config: {title, children}, productList} = this.state
      const handlers = {
        handleClick: this.handleClick
      }
      return (
        <div className="app">
          <h1>{title}</h1>
          {renderChildren(children, handlers, productList)}
        </div>
      )
    }
}

export default App