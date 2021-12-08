import { SearchBar } from "./Main/SearchBar.js";
import { ContactUs } from "./Contact/ContactUs.js";
import { ProductList } from "./Main/ProductList.js";
import { NavigationBar } from "./NavigationBar/NavigationBar.js";
import { DetailedView } from "./DetailedView/DetailedView.js";
import MerchantProducts from "./Merchant/ProductList.js";
import AuthRegister from "./Auth/AuthRegister.js";
import AuthLogin from "./Auth/AuthLogin.js";
import ProtectedRoute from "../Common/ProtectedRoute.js";
import { 
    BrowserRouter as Router, 
    Route,
    Switch,
    Redirect
    } from "react-router-dom";
//import Parse from "parse";

const Components = () => {
    //const currentUser = Parse.User.current();

    return (
        
        <Router>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={ProductList}>
                    {/* include components as children instead
                    so they will actually appear */}
                    <SearchBar />
                    <ProductList />
                </Route>
                <Route path="/contact" component={ContactUs}/>
                <Route path="/log-in" component={AuthLogin}/>
                <Route path="/register" component={AuthRegister}/>
                <Route path="/shop" component={MerchantProducts} />
                <ProtectedRoute path="/shop" component={MerchantProducts}/>
                <Route path="/Product/:id" component={DetailedView}/>
                <Redirect to="/log-in" />
            </Switch>
        </Router>
    );
};

export default Components;