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