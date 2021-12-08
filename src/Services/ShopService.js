import Parse from "parse";
/* service for Parse operations related to the shop products */

// READ all products
export const getAllProducts = () => {
    const Product = Parse.Object.extend("Product"); // Product class
    const query = new Parse.Query(Product);
    return query.find().then((products) => {
        // returns array of Product objects from server
        return products;
    });
}

// get the product list for the shop administrated by the current user
export const getProductsByMerchant = (adminId) => {
    const adminPointer = {
        __type: 'Pointer',
        className: '_User',
        objectId: adminId
    }
    const Merchant = Parse.Object.extend("Merchant"); // Merchant class
    const query = new Parse.Query(Merchant);
    const Product = Parse.Object.extend("Product");
    const prodQuery = new Parse.Query(Product);
    // find merchant with administrator id that matches adminId, then find all products for that merchant
    return query.equalTo("adminID", adminPointer).find().then((merchant) => {
        // returns array of merchant objects from server
        console.log(merchant[0].id);
        const merchantPointer = {
            __type: 'Pointer',
            className: 'Merchant',
            objectId: merchant[0].id
        }
        // get array of this merchant's products
        return prodQuery.equalTo("merchantID", merchantPointer).find().then((products) => {
            return products;
        })
    });
}

// remove product by id
export const removeProduct = (id) => {
    const Product = Parse.Object.extend("Product"); // Product class
    const query = new Parse.Query(Product);
    return query.get(id).then((product) => {
        // returns array of Product objects from server
        return product.destroy({});
    });
}