import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";

import AppHeaderContainer from "../appHeader.container.component";
import createMockStore from "redux-mock-store";

import debounce from "lodash/debounce";
// jest to mock this import
jest.mock("lodash/debounce");

afterEach(cleanup);

const ReduxProvider = ({ store, children }) => (
 <Provider store={store}>{children}</Provider>
);
const store = createMockStore();

describe("App Header Container", () => {
 it("should render without crashing", () => {
  const mockStore = store({});
  const { getByPlaceholderText } = render(
   <ReduxProvider store={mockStore}>
    <AppHeaderContainer searchStrategy={jest.fn()} />
   </ReduxProvider>
  );

  expect(getByPlaceholderText("Search…")).toBeVisible();
 });

 it("should not render search bar when search strategy is not provided", () => {
  const mockStore = store({});
  const { queryAllByPlaceholderText } = render(
   <ReduxProvider store={mockStore}>
    <AppHeaderContainer />
   </ReduxProvider>
  );

  expect(queryAllByPlaceholderText("Search…").length).toBe(0);
 });

 it("should execute search strategy when user search something", () => {
  const mockSearchStrategy = jest.fn();
  debounce.mockImplementation((fn) => fn);

  const mockStore = store({});
  const { getByPlaceholderText } = render(
   <ReduxProvider store={mockStore}>
    <AppHeaderContainer searchStrategy={mockSearchStrategy} />
   </ReduxProvider>
  );
  const searchBox = getByPlaceholderText("Search…");
  const query = "2020";

  fireEvent.change(searchBox, { target: { value: query } });
  expect(mockSearchStrategy).toHaveBeenCalledTimes(1);
 });
});
