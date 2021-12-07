// TODO: import { getProductsByMerchant } from "../../Services/ShopService.js";
import {useState,useEffect} from "react";
import { useParams } from "react-router";
import ProtectedRoute from "../../Common/ProtectedRoute.js";
import Parse from "parse";
import {
    getAllProducts
} from "../../Services/ShopService.js";

// stateful parent component for rendering merchant products
const ProductList = () => {
    // TODO: use params for specific merchant products
    //const {admin} = useParams();

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

    const currentUser = Parse.User.current();
    if (!currentUser){
        return (
            <ProtectedRoute exact path="/shop" flag={currentUser} component={ProductList}/>
        )
    }

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

export default ProductList;