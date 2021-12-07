import { Link } from "react-router-dom";

export function NavigationBar() {
    return (
        <footer>
            <nav>
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/shop">My Shop</Link>
                    </div>
                </div>  
            </nav>
        </footer>
    );
};