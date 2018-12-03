import React from 'react'

import ProductList from '../Components/ProductList'
import Container from '../Components/Container'
import Product from '../Components/Product'

import cart from './Cart'

/**
 * HOC for recursively rendering a JSON tree with React Components
 * @param {Object} children 
 * @param {Object} handlers 
 * @param {Array} productList
 */
const renderChildren = (children, handlers = {}, productList = []) => {

    return children ? children.map(({ children = [], containerType, title, description, quantity, cost, cartId, businessData }, ind) => {
        let key = `${containerType}-${ind}`;
        switch (containerType) {
            case "ProductList":
                return <ProductList
                        key = { key }
                        title = { title }
                        children = { children }
                        handlers = { handlers }
                        productList = { productList }
                        />
            case "Column":
                    return <Container
                                key = { key }
                                title = { title }
                                children = { children }
                                className = "column"
                                handlers = { handlers }
                                productList = { productList }
                            />
            case "Row":
                    return <Container
                                key = { key }
                                title = { title }
                                children = { children }
                                className = "row"
                                handlers = { handlers }
                                productList = { productList }
                            />
            case "Product":
                    // will either insert Product to cart on initial render or update quantity if necessary, could use optimzation
                    const newQuantity = cart.addProduct(cartId, description, quantity, cost, businessData) ? quantity : cart.getProductQuantity(cartId)
                    return <Product
                                key = { key }
                                title = { title }
                                description = { description }
                                quantity = { newQuantity }
                                cost = { cost }
                                cartId = { cartId }
                                handleClick = { handlers.handleClick }
                                children = { children }
                                productList = { productList }
                            />    
        }
    }) : null
}

export default renderChildren