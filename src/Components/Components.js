import { SearchBar } from "./Search/SearchBar.js";
import { ContactUs } from "./Contact/ContactUs.js";
import { SignUp } from "./SignUp/SignUp.js";
import { ProductList } from "./Main/ProductList.js";

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
        <ProductList />
        <ContactUs />
        <SignUp />
        </>
    );
};

export default Components;