import { SearchBar } from "./Main/SearchBar.js";
import { ContactUs } from "./Main/ContactUs.js";
import { SignUp } from "./Main/SignUp.js";
import { Products } from "./Main/Products.js";

const Components = () => {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     return getProducts.then((products) => {
    //         setProducts(products);
    //     });
    // }, []);

    return (
        <>
        <SearchBar />
        <Products />
        <ContactUs />
        <SignUp />
        </>
    );
};

export default Components;