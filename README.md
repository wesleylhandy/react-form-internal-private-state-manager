# Proof of Concept - Managing Sensitive State via JS Object external to React UI

## To get it running: :running:

```shell
    npm install
    npm run start
```

 - Go to http://localhost:1234/index.html

 ### How does it work :question:

 At the root of the application, in `src/index.js`, the `Cart` object is initialized and `JSON` configuration is passed as props to the Application. Within the application, various elements utilize `methods` on the `Cart Object`. These methods use the [functional `setState` paradigm](https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b).

 For example, within `src/App.js`, the button click hander is defined, which calls a method within the cart object. The method returns an object corresponding to an update the application state.

 **For Example:** 

```javascript
    decrementProductQuantity(cartId) {
        const ind = this.getIndex(this.productList, "cartId", cartId.toString())
        const quantity = this.productList[ind].quantity
        return (state, props) => {
            this.productList[ind].quantity = quantity > 0 ?quantity - 1 : 0;
            return { productList: this.getProductList() }
        }
    }
```

:boom: :dizzy: :boom: :sparkles:

Please give feedback. Is this a valid approach according to React standards? Are you aware of better approaches?