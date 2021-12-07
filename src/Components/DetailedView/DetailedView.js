import { SearchBar } from "../Main/SearchBar.js";
import { useLocation } from "react-router-dom";
import {useState,useEffect} from "react";
import {
    getAllReviews
} from "../../Services/ReviewService.js";

export function DetailedView() {
    //This is to pull in the product with dynamic routing
    const location = useLocation();
    const product = location.state.product;

    //This is pulling in the reviews that are specific to this product
    const[reviews, setReviews] = useState([]);

    useEffect(()=> {
        getAllReviews(product.id).then((reviews) => {
            setReviews(reviews);    
        });
    }, [product]);

    

    return (
        <>
            <SearchBar/>
            <br />
            <br />
            <div className="row">
                <div className="col-md-6">
                    <img src={product.get("image")._url} alt="" style={{width: "500px"}} align={"right"}/>
                </div>

                <div className="col-md-6">
                    <h3>{product.get("name")}</h3>
                    <p>Price: ${product.get("price")}</p>
                    <p>Number in stock: {product.get("stockQty")}</p>
                    <button>Add to Cart</button> 
                    <br />
                    <h5>Reviews: </h5>
                    {reviews.length > 0 && (
                        <ul>
                            {reviews.map((review) => ( 
                                <li>
                                    <h6 key={review.id}> {review.get("writeUp")} </h6>
                                </li> 
                            ))}
                        </ul>
                    )}
                </div>
            </div> {/*This is the end of the first bootstrap row*/}
            <br />
            <br />

            <div className = "row">
                <div className = "col-md-12" align={"center"}>
                    <textarea id="review" name="review" rows="4" cols="60" placeholder="Add your review here!" align={"center"}>
                    </textarea>
                    <br />
                    <button>Submit</button>
                </div>
            </div>
        </>
    );
};

/* 
            <a href="/">
            <button type="submit">Return Home</button>
            </a>
            */