import React from "react";
import { Redirect } from "react-router-dom";

// pass props using the spread operator to throw them on an object if too many to break out
const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
  console.log(rest); // show rest.path in the console
  return (
    <div>
      {flag ? (
        <Redirect to={rest.path} />
      ) : (
        <Redirect to='/log-in' />
      )}
    </div>
  );
};

export default ProtectedRoute;