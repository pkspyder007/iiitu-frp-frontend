import React from "react";
import { Redirect, Route } from "react-router-dom";
import { authContext } from "../context/AuthContext";

export default function ProtectedRoutes({ children, role, ...rest }) {
  const auth = React.useContext(authContext).state;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (auth.loggedIn && auth.role === role) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
