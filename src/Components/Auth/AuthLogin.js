import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { authenticateUser } from "./AuthService.js";
import AuthLoginForm from "./AuthLoginForm.js";

const AuthLogin = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  //flag to trigger login
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (user && login){
      authenticateUser(user).then((userLoggedIn) => {
        if (userLoggedIn){
          alert(
            `${userLoggedIn.get("firstName")}, you have successfully logged in.`
          );
        }
        setLogin(false);
      });
    }
  }, [user, login]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;
    setUser({
        ...user,
        [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  return (
    <div>
      <AuthLoginForm
                user={user}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
                />
      <br />
      <h3>Don't have an account?</h3>
      <Link to="/register">
        <button>Register</button>
      </Link>
      
    </div>
  );
};

export default AuthLogin;