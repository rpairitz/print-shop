import { 
    getProductsByMerchant, removeProduct, createProduct 
} from "../../Services/ShopService.js";
import {useState,useEffect} from "react";
import ProtectedRoute from "../../Common/ProtectedRoute.js";
import ProductForm from "./ProductForm.js";
import Parse from "parse";
import { Link } from "react-router-dom";

// stateful parent component for rendering merchant products
const ProductList = () => {
    const currentUser = Parse.User.current();

    // variable in state to hold array of Products; initial state: empty
    const [products, setProducts] = useState([]);
    // flag in the state to watch for delete update
    const [removeId, setRemoveId] = useState('');
    // variable in state to hold new product info
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: 0.00,
        stockQty: 0
    });
    // state variable for holding the image to upload with the newProduct
    const [selectedFile, setSelectedFile] = useState();
    // flag to trigger add product
    const [addProduct, setAddProduct] = useState(false);

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
    }, [currentUser, removeId]);

    // useEffect for updating state when the addProduct flag is set
    useEffect(() => {
        if (newProduct && selectedFile && addProduct){
            console.log(newProduct);
            console.log(selectedFile);
            createProduct(currentUser.id, newProduct, selectedFile).then((productSaved) => {
                setAddProduct(false);
                if (productSaved){
                    setNewProduct({
                        name: "",
                        price: 0.00,
                        stockQty: 0
                    });
                    getProductsByMerchant(currentUser.id).then((products) => {
                        setProducts(products);
                    });
                }
            });
          }
    }, [currentUser, newProduct, selectedFile, addProduct]);

    const removeHandler = (id) => {
        console.log('removeHandler');
        setRemoveId(id);
    };

    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        if (e.target.name == "price"){ 
            // const name = e.target.name;
            // const value = parseFloat(e.target.value);
            // setNewProduct({
            //     ...newProduct,
            //     [name]: value
            // });
            // the above lines do the same as the below ones
            // convert from string to float
            setNewProduct({
                ...newProduct,
                [name]: parseFloat(newValue)
            });
        } 
        else if (e.target.name == "stockQty"){
            // convert from string to int
            setNewProduct({
                ...newProduct,
                [name]: parseInt(newValue)
            });
        }
        else{
            setNewProduct({
                ...newProduct,
                [name]: newValue
            });
        }
        console.log(newProduct);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setAddProduct(true);
    };

    const onFileChangeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    if (!currentUser){
        return (
            <ProtectedRoute exact path="/shop" flag={currentUser} component={ProductList}/>
        )
    }

    return (
        <div>
            <h2>My Shop</h2>
            <ProductForm newProduct={newProduct} onChange={onChangeHandler} onSubmit={onSubmitHandler}
            onFileChange={onFileChangeHandler}/>
            <h3>Items</h3>
            <div key="divfirst">
            {products.length > 0 && (
                <ul key="ul">
                    <div key="div" className="row">
                        {products.map((product) => ( 
                                <div key={product.name} className="col-md-4">
                                        <h4 key={product.id}><Link key="link" to={{pathname: `/Product/${product.id}`, state: {product: product}}}> {product.get("name")} </Link></h4>
                                        <img key="img" src={product.get("image")._url} alt="" style={{width: "250px"}}/>
                                        <br key="br"/>
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