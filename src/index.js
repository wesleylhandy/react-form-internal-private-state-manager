import React from 'react'
import * as ReactDOM from 'react-dom'

import "babel-polyfill";
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import 'raf/polyfill';

import App from './Components/App.js'

// instantiate Cart object as cart
import cart from './utils/Cart.js'

//will be API call in future
import config from './config/config.js'

if (!window.Promise) {
    window.Promise = Promise;
}

const entryPoint = document.getElementById("root")

ReactDOM.render(<App config={config} productList={cart.getProductList()}/>, entryPoint)