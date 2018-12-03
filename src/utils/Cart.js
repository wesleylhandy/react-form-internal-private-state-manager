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
    addProduct(cartId, description, quantity = 0, cost, businessData = {}) {
        if (this.getIndex(this.productList, "cartId", cartId.toString()) > -1) {
            return false
        } else {
            this.productList = [...this.productList, {
                    cartId: cartId.toString(), 
                    description, 
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
}

const cart = new Cart();

export default cart;