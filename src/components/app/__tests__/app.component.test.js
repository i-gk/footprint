import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "../../../redux/reducers";
import App from "../app.component";

const ReduxProvider = ({ children, reduxStore }) => (
 <Provider store={reduxStore}>{children}</Provider>
);
const store = createStore(rootReducer);

afterEach(cleanup);

describe("App Component", () => {
 it("should render without errors", () => {
  render(
   <ReduxProvider reduxStore={store}>
    <App />
   </ReduxProvider>
  );
 });

 it("should render child components", () => {
  const text = "Hello React World";
  const { getByText, container } = render(
   <ReduxProvider reduxStore={store}>
    <App>
     <div>{text}</div>
    </App>
   </ReduxProvider>
  );

  expect(getByText(text)).toBeInTheDocument();
 });
});
