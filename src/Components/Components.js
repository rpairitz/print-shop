import { SearchBar } from "./Main/SearchBar.js";
import { ContactUs } from "./Contact/ContactUs.js";
import { ProductList } from "./Main/ProductList.js";
import { NavigationBar } from "./NavigationBar/NavigationBar.js";
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
//import { useEffect, useState } from "react";
import Parse from "parse"; // how else should we do all above the return?

const Components = () => {
    /*
    const [flag, setFlag] = useState(false);
    const [user, setUser] = useState();
    //Parse.User.logOut();

    useEffect(() => {
        if (user) {
            console.log("authenticated");
            console.log(user);
            setFlag(true);
        }
        else {
            console.log("not authenticated");
            setFlag(false);
        }
    }, [user]);
    */

    // for some reason, when not authenticated initially, this won't
    // allow to be authenticated after login
    // does this have to do with how current function retrieves user
    // from async storage?
    /*
    useEffect(() => {
        Parse.User.current().then((currUser) => {
            console.log(currUser);
            Parse.User.logOut();
            //setUser(currUser);
        });
    }, []);
    */
    //setFlag(true);
    const currentUser = Parse.User.current();

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
                <Redirect to="/log-in" />
            </Switch>
        </Router>
    );
};

export default Components;