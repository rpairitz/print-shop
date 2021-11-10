import Link from "react-router-dom";

const AuthModule = () => {
    return (
        <div>
            <Link to="/Register">
                <button>Register</button>
            </Link>
            <br />
            <br />
        </div>
    );
};

export default AuthModule;