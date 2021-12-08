import { getProductsByMerchant, removeProduct } from "../../Services/ShopService.js";
import {useState,useEffect} from "react";
import ProtectedRoute from "../../Common/ProtectedRoute.js";
import Parse from "parse";
import { Link } from "react-router-dom";

// stateful parent component for rendering merchant products
const ProductList = () => {
    const currentUser = Parse.User.current();

    // variable in state to hold array of Products; initial state: empty
    const [products, setProducts] = useState([]);
    // flag in the state to watch for delete update
    const [removeId, setRemoveId] = useState('');

    // when page loads, run useEffect to get asynchronous data to render
    useEffect(()=> {
        if (currentUser){
            getProductsByMerchant(currentUser.id).then((products) => {
                setProducts(products);
            });
        }
    }, [currentUser]);

    // separate useEffect for deleting items and updating the product list state
    useEffect(() => {
        if (removeId){
            console.log(removeId);
            removeProduct(removeId).then(() => {
                setRemoveId('');
                getProductsByMerchant(currentUser.id).then((products) => {
                    setProducts(products);
                });
            });
        }
    }, [removeId]);

    const removeHandler = (id) => {
        console.log('removeHandler');
        setRemoveId(id);
    };

    if (!currentUser){
        return (
            <ProtectedRoute exact path="/shop" flag={currentUser} component={ProductList}/>
        )
    }

    return (
        <div>
            <h1>My Shop</h1>
            <h2>Items</h2>
            <div key="divfirst">
            {products.length > 0 && (
                <ul key="ul">
                    <div key="div" className="row">
                        {products.map((product) => ( 
                                <div key={product.name} className="col-md-4">
                                        <h4 key={product.id}><Link key="link" to={{pathname: `/Product/${product.id}`, state: {product: product}}}> {product.get("name")} </Link></h4>
                                        <img key="img" src={product.get("image")._url} alt="" style={{width: "250px"}}/>
                                        <br key="br"/>
                                        <button key="button">Edit Item</button>
                                        <button key="button" onClick={() => removeHandler(product.id)}>Delete Item</button>
                                </div>    
                        ))}
                    </div>
                </ul>
            )}
        </div>
        </div>
    );
};

export default ProductList;