/** 
 * The following object is but one out many possible configurations that could be received.
 * The config object will be structured graphically, but will also include proprietary business logic. 
 * In production, another application with user authentication will allow WYSIWYG configuration of the form 
 * and will store this along side the relevant business data inside a internal DB 
 */
const config = {
    containerType: "App",
    title: "Product Catalog",
    children: [{
        containerType: "ProductList",
        title: null,
        children: [{
            containerType: "Row",
            title: null,
            children: [{
                containerType: "Column",
                title: null,
                children: [{ 
                    containerType: "Product", 
                    title: "Cool Product", 
                    description: "Only found in the depths of the Amazonian rainforest, this...", 
                    quantity: 0, 
                    cost: 20, 
                    cartId: 1, 
                    businessData: {private: "private"} 
                }]
            }, {
                containerType: "Column",
                title: null,
                children: [{ 
                    containerType: "Product", 
                    title: "Awesome Product", 
                    description: "Manufactured from pure gold, this...", 
                    quantity: 0, 
                    cost: 40, 
                    cartId: 2, 
                    businessData: {private: "private"} 
                }]
            }]
        }, {
            containerType: "Row",
            title: null,
            children: [{
                containerType: "Column",
                title: null,
                children: [{ 
                    containerType: "Product", 
                    title: "Not So Cool Product", 
                    description: "Made of balsa-wood and glue, this...", 
                    quantity: 0, 
                    cost: 10, 
                    cartId: 3, 
                    businessData: {private: "private"} 
                }]
            }, {
                containerType: "Column",
                title: null,
                children: [{
                    containerType: "Product",
                    title: "Very Bad Product",
                    description: "Don't buy, seriously; this...",
                    quantity: 0,
                    cost: 1,
                    cartId: 4,
                    businessData: {private: "private"}
                }]
            }]
        }]
    }]
}
export default config;