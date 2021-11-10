import {useEffect, useState} from "react";
import { createUser } from "./AuthService.js";
import AuthForm from "./AuthForm.js";

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
    }, [newUser, setAdd]);

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
            <h1>HEllo from AuthRegister</h1>
            <AuthForm
                user={newUser}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
                />
        </div>
    );
};

export default AuthRegister;