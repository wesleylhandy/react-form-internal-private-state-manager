import React from 'react'

import renderChildren from '../utils/renderChildren'

function ProductList({ title, children, handlers, productList}) {
    return (
      <div className="products-list">
        <h2>{title}</h2>
          {
            renderChildren(children, handlers, productList)
          }
       </div>
    )
}

export default ProductList