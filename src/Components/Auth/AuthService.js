import Parse from "parse";

export const createUser = (newUser) => {
    const user = new Parse.User();

    user.set("username", newUser.email);
    user.set("firstName", newUser.firstName);
    user.set("lastName", newUser.lastName);
    user.set("password", newUser.password);
    user.set("email", newUser.email);
  
    return user
      .signUp()
      .then((newUserSaved) => {
        return newUserSaved;
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

export const authenticateUser = (user) => {
  // TODO: get user password by email (if exists),
  // then compare to pwd given
  return Parse.User.logIn(user.username, user.password)
    .then((userLoggedIn) => {
      return userLoggedIn;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};