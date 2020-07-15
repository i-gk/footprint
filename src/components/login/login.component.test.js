import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Route, MemoryRouter } from "react-router-dom";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import rootReducer from "../../redux/reducers";
import Login from "./login.component";

const ReduxProvider = ({ children, reduxStore }) => (
 <Provider store={reduxStore}>{children}</Provider>
);
const store = createStore(rootReducer);

afterEach(cleanup);
describe("Login Component", () => {
 it("should render without errors", () => {
  const { getByText } = render(
   <ReduxProvider reduxStore={store}>
    <Login />
   </ReduxProvider>
  );

  expect(getByText("Email Address")).toBeVisible();
  expect(getByText("Password")).toBeVisible();
  expect(getByText("Sign In")).toBeVisible();
 });

 it("should redirect user to login page if auth token is available", async () => {
  const _store = createStore(rootReducer, {
   ...store.getState(),
   auth: { accessToken: "12345" },
  });

  const { getByText, queryByText, container, debug } = render(
   <ReduxProvider reduxStore={_store}>
    <MemoryRouter initialEntries={["/login"]}>
     <Route path="/login">
      <Login />
     </Route>
     <Route path="/">
      <div>Home Page</div>
     </Route>
    </MemoryRouter>
   </ReduxProvider>
  );
  expect(getByText("Home Page")).toBeVisible();
  expect(queryByText("Sign In")).toBeNull();
 });

 it("should reset the fields after Sign In is clicked", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  const { getByTestId, container } = render(
   <ReduxProvider reduxStore={mockStore({ auth: { accessToken: "" } })}>
    <MemoryRouter initialEntries={["/login"]}>
     <Route path="/login">
      <Login />
     </Route>
    </MemoryRouter>
   </ReduxProvider>
  );

  const emailField = container.querySelector("#email");
  const passwrodField = container.querySelector("#password");
  const signInBtn = getByTestId("signin-button");

  fireEvent.change(emailField, { target: { value: "test@jest.com" } });
  fireEvent.change(passwrodField, { target: { value: "myawesomepassword" } });

  expect(emailField.value).toBe("test@jest.com");
  expect(passwrodField.value).toBe("myawesomepassword");
  fireEvent.click(signInBtn);

  expect(emailField.value).toBe("");
  expect(passwrodField.value).toBe("");
 });
});
