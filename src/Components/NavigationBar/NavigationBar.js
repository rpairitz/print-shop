import { Link } from "react-router-dom";

export function NavigationBar() {
    return (
        <footer>
            <link href="Navstyles.css" type="text/css" rel="stylesheet" />
            <nav>
                <div class="row">
                    <div class="col-md-4">
                        <Link to="/">Home</Link>
                    </div>
                    <div class="col-md-4">
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <div class="col-md-4">
                        <Link to="/shop">My Shop</Link>
                    </div>
                </div>  
            </nav>
        </footer>
    );
};