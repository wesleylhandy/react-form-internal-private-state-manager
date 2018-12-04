class Cart {
    constructor() {
        this.productList = []
        this.fundList = []
        this.subscriptionList = []
        this.monthlyGiftAmount = 0
        this.singleGiftAmount = 0
        this.incrementProductQuantity = this.incrementProductQuantity.bind(this)
        this.decrementProductQuantity = this.decrementProductQuantity.bind(this)
        this.getProductList = this.getProductList.bind(this)
        this.getIndex = this.getIndex.bind(this)
        this.getCart = this.getCart.bind(this)
        this.filterCart = this.filterCart.bind(this)
    }

    /**
     * 
     * @param {String} cartId 
     * @param {String} description 
     * @param {Number} quantity 
     * @param {Number} cost 
     * @param {Object} businessData 
     * @returns {Boolean} - true if new object created, false if already existing
     */
    addProduct(cartId, description, title, quantity = 0, cost, businessData = {}) {
        if (this.getIndex(this.productList, "cartId", cartId.toString()) > -1) {
            return false
        } else {
            this.productList = [...this.productList, {
                    cartId: cartId.toString(), 
                    description, 
                    title,
                    quantity: +quantity, 
                    cost: +cost, 
                    businessData 
                }
            ]
            return true
        }
    }

    getProductQuantity(cartId) {
        const ind = this.getIndex(this.productList, "cartId", cartId.toString())
        const quantity = this.productList[ind].quantity
        return quantity
    }

    getIndex(list, prop, val) {
        return list.findIndex(el=>el[prop] == val)
    }

    incrementProductQuantity(cartId) {
        const ind = this.getIndex(this.productList, "cartId", cartId.toString())
        const quantity = this.productList[ind].quantity
        return (state, props) => {
            this.productList[ind].quantity = quantity + 1
            return { productList: this.getProductList() }
        }
    }

    decrementProductQuantity(cartId) {
        const ind = this.getIndex(this.productList, "cartId", cartId.toString())
        const quantity = this.productList[ind].quantity
        return (state, props) => {
            this.productList[ind].quantity = quantity > 0 ?quantity - 1 : 0;
            return { productList: this.getProductList() }
        }
    }

    getProductList() {
        const productList = [...this.productList];
        const list = productList.reduce((acc, prod) => {
            delete prod.businessData;
            acc.push(prod)
            return acc
        }, []) || [];
        return list
    }

    calculateTotal() {
        const totalPrice = this.filterCart().reduce((total, prod)=>{
            total+=prod.subTotal
            return total
        }, 0)
        return totalPrice
    }

    filterCart() {
        const filtered = this.productList.filter(prod=>prod.quantity > 0)
        const orders = filtered.map(prod=>{
            const {cartId, quantity, cost, title, ...rest} = prod
            return { cartId, quantity, cost, title, subTotal: quantity * cost }
        })
        return orders
    }

    getCart() {
        const orders = this.filterCart();
        const totalPrice = this.calculateTotal()
        return { orders, totalPrice }
    }

}

const cart = new Cart();

export default cart;