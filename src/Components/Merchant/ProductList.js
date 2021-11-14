// TODO: import { getProductsByMerchant } from "../../Services/ShopService.js";
import {useState,useEffect} from "react";
import {
    getAllProducts
} from "../../Services/ShopService.js";

// stateful parent component for rendering merchant products
export function ProductList () {
    // variable in state to hold array of Products; initial state: empty
    const [products, setProducts] = useState([]);

    // when page loads, run useEffect to get asynchronous data to render
    useEffect(()=> {
        // TODO: getProductsByMerchant
        getAllProducts().then((products) => {
            console.log(products);
            setProducts(products);
        });
    }, []);

    return (
        <div>
            <p> Within Merchant component</p>
            <div>
                {products.length > 0 && (
                    <ul>
                        {products.map((product) => ( 
                            <div>
                                <span>
                                    {/* display product name; display image with styling later */}
                                    <li key={product.id}>{product.get("name")}</li>{""}
                                    {/* want to add button to add product to cart/checkout later (in a separate service for Checkout) */}
                                    <button>Add to Cart</button>
                                </span>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};