import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import BackdropWithLoader from "./backdropWithLoader.component";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const ReduxProvider = ({ children, reduxStore }) => (
 <Provider store={reduxStore}>{children}</Provider>
);
afterEach(cleanup);

describe("Backdrop Loader Component", () => {
 it("should not be visible when loaderVisibility is false", () => {
  const store = mockStore({
   uicontrols: {
    loaderVisibility: false,
   },
  });
  const { container } = render(
   <ReduxProvider reduxStore={store}>
    <BackdropWithLoader />
   </ReduxProvider>
  );

  const loaderElement = container.querySelector(".MuiBackdrop-root");
  expect(loaderElement.getAttribute("style")).toContain(
   "opacity: 0; visibility: hidden"
  );
 });

 it("should be visible when loaderVisibility is true", () => {
  const store = mockStore({
   uicontrols: {
    loaderVisibility: true,
   },
  });
  const { container } = render(
   <ReduxProvider reduxStore={store}>
    <BackdropWithLoader />
   </ReduxProvider>
  );

  const loaderElement = container.querySelector(".MuiBackdrop-root");
  expect(loaderElement.getAttribute("style")).not.toContain(
   "opacity: 0; visibility: hidden"
  );
 });

 it("should execute handleClose callback if available", () => {
  const store = mockStore({
   uicontrols: {
    loaderVisibility: true,
   },
  });
  const onhandleCloseMock = jest.fn();

  const { debug, container } = render(
   <ReduxProvider reduxStore={store}>
    <BackdropWithLoader handleClose={onhandleCloseMock} />
   </ReduxProvider>
  );

  const loaderElement = container.querySelector(".MuiBackdrop-root");
  fireEvent.click(loaderElement);

  expect(onhandleCloseMock).toBeCalled();
 });
});
