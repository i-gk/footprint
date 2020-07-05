import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children, ...rest }) {
  
  const isLoggedIn = useSelector(({auth}) => {
      return (auth.accessToken.length > 0)
  });

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
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
