import Parse from "parse";
/* service for Parse operations related to the shop products */

// READ all reviews
export const getAllReviews = (id) => {
    const review = Parse.Object.extend("review"); 
    const query = new Parse.Query(review);
    return query.equalTo("productId", id).find().then((review) => {
        //return query.find().then((review) => {
        // returns array of review objects from server
            return review;
    });
    
}