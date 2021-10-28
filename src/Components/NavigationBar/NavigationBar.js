import { Link } from "react-router-dom";

const NavigationBar = () => (
    <NavigationBar>
        <nav>
            <ul>
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/SignUp">Sign Up Here</Link>
                </li>
            </ul>
        </nav>
    </NavigationBar>
);

export default NavigationBar;