import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";

import "./index.css";
import { authenticatedRoutes, publicRoutes } from "./routes";
import store from "./redux/store";
import { PrivateRoute } from "./components/common";
import App from "./components/app/app.component";

ReactDOM.render(
 <React.StrictMode>
  <App>
   <Provider store={store}>
    <Router>
     <Switch>
      {publicRoutes.map((route) => (
       <Route
        key={route.key}
        path={route.path}
        exact={route.exact}
        children={<route.main />}
       />
      ))}

      {authenticatedRoutes.map((route) => (
       <PrivateRoute
        key={route.key}
        path={route.path}
        exact={route.exact}
        children={<route.main />}
       />
      ))}
     </Switch>
    </Router>
   </Provider>
  </App>
 </React.StrictMode>,
 document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
