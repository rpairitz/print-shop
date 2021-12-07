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
    //const merchant = Parse.User.current().get("objectId");
    //console.log(merchant);
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
        //console.log(merchant.attributes);
        // const Merchant = Parse.Object.extend("Merchant");
        // const merch = new Merchant();
        // //merch = merchant;
        // console.log(merchant);
        // console.log(merch);
        console.log(merchant[0].id); // why is this undefined? figure this out and solve problem
        //return merchant;
        const merchantPointer = {
            __type: 'Pointer',
            className: 'Merchant',
            objectId: merchant[0].id
        }
        console.log(merchantPointer);
        // get array of this merchant's products
        return prodQuery.equalTo("merchantID", merchantPointer).find().then((products) => {
            console.log(products);
            return products;
        })
    });
}

/*
export const getProductsByMerchant = (adminId) => {
    const Merchant = Parse.Object.extend("Merchant"); // Merch class
    const merchQuery = new Parse.Query(Merchant);
    const User = Parse.Object.extend("User");
    const userQuery = new Parse.Query(User);
    return userQuery.equalTo("objectId",adminId).find({
        success: (user) => {
            const userPointer = {
                __type: 'Pointer',
                className: 'User',
                objectId: user.id
            }
            return merchQuery.equalTo('adminID', userPointer).find().then((merchant) => {
                console.log(merchant);
                return merchant;
            });
        }
    });
}
*/