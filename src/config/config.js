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
                    lazyLoad: "https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?auto=compress&dpr=auto&h=25&w=42&q=10",
                    imgUrl: "https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=125&w=210",
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
                    lazyLoad: "https://images.pexels.com/photos/321452/pexels-photo-321452.jpeg?auto=compress&dpr=auto&h=25&w=42&=10",
                    imgUrl: "https://images.pexels.com/photos/321452/pexels-photo-321452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=125&w=210",
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
                    lazyLoad: "https://images.pexels.com/photos/255514/pexels-photo-255514.jpeg?auto=compress&dpr=auto&h=25&w=42&q=10",
                    imgUrl: "https://images.pexels.com/photos/255514/pexels-photo-255514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=125&w=210",
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
                    lazyLoad: "https://images.pexels.com/photos/196653/pexels-photo-196653.jpeg?auto=compress&dpr=auto&h=25&w=42&q=10",
                    imgUrl: "https://images.pexels.com/photos/196653/pexels-photo-196653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=125&w=210",
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