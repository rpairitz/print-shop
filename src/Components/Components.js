import { SearchBar } from "./Search/SearchBar.js";
import { ContactUs } from "./Contact/ContactUs.js";
import { SignUp } from "./SignUp/SignUp.js";
import { ProductList } from "./Main/ProductList.js";
import { NavigationBar } from "./NavigationBar/NavigationBar.js";
import AuthRegister from "./Auth/AuthRegister.js";

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
        <Router>
            <Switch>
                <Route path="/Main" exact components={ProductList} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/SearchBar" component={SearchBar} />
                <Route path="/ContactUs" component={ContactUs}/>
                <Route path="/Register" component={AuthRegister}/>
            </Switch>
            <NavigationBar />
            <ProductList />
        </Router>
    );
};

export default Components;