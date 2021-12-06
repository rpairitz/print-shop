import {
    getAllProducts
} from "../../Services/ShopService.js";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";

// stateful parent component for rendering Product data down to child
export function ProductList () {
    // variable in state to hold array of Products; initial state: empty
    const [products, setProducts] = useState([]);

    // when page loads, run useEffect to get asynchronous data to render
    useEffect(()=> {
        getAllProducts().then((products) => {
            console.log(products);
            setProducts(products);
        });
    }, []);

    return (
        <div>
            <div>
                {products.length > 0 && (
                    <ul>
                        <div class="row">
                            {products.map((product) => ( 
                                    <div class="col-md-4">
                                            {/* display product name; display image with styling later */}
                                            <h4 key={product.id}><Link to="/Product">{product.get("name")}</Link></h4>

                                            <img src={product.get("image")._url} alt="" style={{width: "250px"}}/>
                                            <br/>
                                            <button>Add to Cart</button>
                                    </div>    
                            ))}
                        </div>
                    </ul>
                )}
            </div>
        </div>
    );
};