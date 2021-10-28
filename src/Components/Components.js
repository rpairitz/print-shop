import { SearchBar } from "./Main/SearchBar.js";
import { ContactUs } from "./Main/ContactUs.js";
import { SignUp } from "./SignUp/SignUp.js";
import { Products } from "./Main/Products.js";
import { NavigationBar } from "./NavigationBar/NavigationBar.js";
import { 
    BrowserRouter as Router, 
    Route,
    Switch
    } from "react-router-dom";

const Components = () => {

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     return getProducts.then((products) => {
    //         setProducts(products);
    //     });
    // }, []);

    return (
        <>
        <Router>
            <Switch>
                <Route path="/Sign-Up" component={SignUp} />
            </Switch>
            <SearchBar />
            <Products />
            <ContactUs />
        </Router>
        </>
    );
};

export default Components;