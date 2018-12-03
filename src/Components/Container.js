import React from 'react'

import renderChildren from '../utils/renderChildren'

function Container({ title, children, className, handlers, productList}) {
    return (
      <div className={className}>
        {title ? <h3>{title}</h3> : null}
        {renderChildren(children, handlers, productList)}
      </div>
    )
}

export default Container;