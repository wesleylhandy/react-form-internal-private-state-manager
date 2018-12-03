# Proof of Concept - Managing Sensitive State via JS Object external to React UI

## To get it running: :running:

This example depends on [`Parcel.js`](https://parceljs.org/)

- Install `parcel-bundler` globally if you have not already done so:

```shell
    npm install -g parcel-bundler
```

- Download this repo, install, and run

```shell
    npm install
    npm run start
```

 - Go to http://localhost:1234/index.html

 ### How does it work :question:

 At the root of the application, in `src/index.js`, the `Cart` object is initialized and `JSON` configuration is passed as props to the Application. Within the application, various elements utilize `methods` on the `Cart Object`. These methods use the [functional `setState` paradigm](https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b).

 For example, within `src/App.js`, the button click hander is defined, which calls a method within the cart object. The method returns an object corresponding to an update the application state.

 Since the `Cart module` is evaluated already at root level, later imports do not cause the page to be reevaluated, but by importing the `instance`, other modules now have access to `cart methods`. See [the ECMA spec](http://www.ecma-international.org/ecma-262/6.0/#sec-abstract-module-records) and [this Stack Overflow discussion](https://stackoverflow.com/questions/37325667/does-es6-module-importing-execute-the-code-inside-the-imported-file)

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