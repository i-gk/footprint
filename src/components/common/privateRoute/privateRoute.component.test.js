import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { Route, MemoryRouter, Switch } from "react-router-dom";
import configureMockStore from "redux-mock-store";

import PrivateRoute from "./privateRoute.component";

const mockStore = configureMockStore();
const ReduxProvider = ({ children, reduxStore }) => (
 <Provider store={reduxStore}>{children}</Provider>
);

const PrivateRouteWrapper = ({ store }) => (
 <ReduxProvider reduxStore={store}>
  <MemoryRouter initialEntries={["/"]}>
   <Switch>
    <PrivateRoute
     path="/"
     exact={true}
     children={
      <Route>
       <div data-testid="homepage">Home Page</div>
      </Route>
     }
    ></PrivateRoute>
    <Route path="/login">
     <div data-testid="login">Login</div>
    </Route>
   </Switch>
  </MemoryRouter>
 </ReduxProvider>
);

afterEach(cleanup);

describe("Private Route Component", () => {
 it("should redirect user to login page if not signed in", () => {
  const store = mockStore({
   auth: {
    accessToken: "",
   },
  });
  const { getByTestId } = render(<PrivateRouteWrapper store={store} />);

  expect(getByTestId("login")).toBeVisible();
 });

 it("should redirect user to homepage if user is already signed in", () => {
  const store = mockStore({
   auth: {
    accessToken: "123",
   },
  });
  const { getByTestId } = render(<PrivateRouteWrapper store={store} />);

  expect(getByTestId("homepage")).toBeVisible();
 });
});
