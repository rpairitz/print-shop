import { Link } from "react-router-dom";

export function NavigationBar() {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/log-in">Log In</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};