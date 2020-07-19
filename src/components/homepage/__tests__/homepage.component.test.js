import React from "react";
import { render, cleanup } from "@testing-library/react";
import configureMockStore from "redux-mock-store";

import Homepage from "../homepage.component";
import { Provider } from "react-redux";

afterEach(cleanup);

const ReduxProvider = ({ children, store }) => (
 <Provider store={store}>{children}</Provider>
);
const store = configureMockStore();

describe("Homepage Component", () => {
 it("Should render without crashing", () => {
  const mockStore = store({ memories: { previews: [] } });
  const { container } = render(
   <ReduxProvider store={mockStore}>
    <Homepage />
   </ReduxProvider>
  );
  expect(container.querySelector("#footprint-homepage")).not.toBeNull();
 });

 it("should include AppHeader component", () => {
  const mockStore = store({ memories: { previews: [] } });
  const { container } = render(
   <ReduxProvider store={mockStore}>
    <Homepage />
   </ReduxProvider>
  );
  expect(container.querySelector("#footprint-appheader")).not.toBeNull();
 });
});
