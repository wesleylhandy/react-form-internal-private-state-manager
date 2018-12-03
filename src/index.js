import React from 'react'
import * as ReactDOM from 'react-dom'

import "babel-polyfill";
import 'whatwg-fetch';
import Promise from 'promise-polyfill';
import 'raf/polyfill';

import App from './Components/App.js'
import cart from './utils/Cart.js'
import config from './config/config.js'

if (!window.Promise) {
    window.Promise = Promise;
}

const entryPoint = document.getElementById("root")

ReactDOM.render(<App config={config} productList={cart.getProductList()}/>, entryPoint)