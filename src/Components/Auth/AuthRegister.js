import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { createUser } from "./AuthService.js";
import AuthRegisterForm from "./AuthRegisterForm.js";

const AuthRegister = () => {
    const [newUser, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    //flags to trigger an add
    const [add, setAdd] = useState(false);

    useEffect(() => {
        if (newUser && add){
            createUser(newUser).then((userCreated) => {
                if (userCreated){
                    alert(
                        `${userCreated.get("firstName")}, you have successfully registered!`
                    );
                }
                setAdd(false);
            });
        }
    }, [newUser, add]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        setUser({
            ...newUser,
            [name]: newValue
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };

    return (
        <div>
            <AuthRegisterForm
                user={newUser}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
                />

            <h3>Already have an account?</h3>
            <Link to="/log-in">
                <button>Log In</button>
            </Link>
        </div>
    );
};

export default AuthRegister;