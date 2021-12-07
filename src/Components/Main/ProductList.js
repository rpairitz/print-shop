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
        <div key="divfirst">
            {products.length > 0 && (
                <ul key="ul">
                    <div key="div" className="row">
                        {products.map((product) => ( 
                                <div key={product.name} className="col-md-4">
                                        <h4 key={product.id}><Link key="link" to={{pathname: `/Product/${product.id}`, state: {product: product}}}> {product.get("name")} </Link></h4>
                                        <img key="img" src={product.get("image")._url} alt="" style={{width: "250px"}}/>
                                        <br key="br"/>
                                        <button key="button">Add to Cart</button>
                                </div>    
                        ))}
                    </div>
                </ul>
            )}
        </div>
    );
};