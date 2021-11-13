import { SearchBar } from "./Main/SearchBar.js";
import { ContactUs } from "./Contact/ContactUs.js";
import { ProductList } from "./Main/ProductList.js";
import { NavigationBar } from "./NavigationBar/NavigationBar.js";
import AuthRegister from "./Auth/AuthRegister.js";

import { 
    BrowserRouter as Router, 
    Route,
    Switch,
    Redirect
    } from "react-router-dom";

const Components = () => {
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={ProductList}>
                    {/* include components as children instead
                    so they will actually appear */}
                    <SearchBar />
                    <ProductList />
                    <Redirect to="/" />
                </Route>
                <Route path="/contact" component={ContactUs}/>
                <Route path="/register" component={AuthRegister}/>
            </Switch>
        </Router>
    );
};

export default Components;