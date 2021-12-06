import { SearchBar } from "../Main/SearchBar.js";
import { useLocation } from "react-router-dom";

export function DetailedView() {
    const location = useLocation();
    const product = location.state.product;
    console.log("Product in detailed view", product)

    return (
        <>
            <SearchBar/>
            <a href="/">
            <button type="submit">Return Home</button>
            </a>
            <p> This is the detailed view</p>
            <img src={product.get("image")._url} alt="" style={{width: "250px"}}/>
            
        </>
    );
};