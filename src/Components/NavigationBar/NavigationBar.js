import { Link } from "react-router-dom";

export function NavigationBar() {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Shop</Link>
                    </li>
                    <li>
                        <Link to="/SignUp">Sign Up Here</Link>
                    </li>
                    <li>
                        <Link to="/ContactUs">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/SearchBar">Search Bar</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};