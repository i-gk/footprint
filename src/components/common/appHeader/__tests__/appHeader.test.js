import React from "react";
import { render, fireEvent, cleanup, getByText } from "@testing-library/react";

import AppHeaderContainer from "../appHeader.container.component";
import AppHeader from "../appHeader.component";
import { Provider } from "react-redux";
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
    <AppHeaderContainer />
   </ReduxProvider>
  );

  expect(getByPlaceholderText("Search…")).toBeVisible();
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

describe("App Header Component", () => {
 it("should render without crashing", () => {
  const { getByPlaceholderText } = render(<AppHeader />);

  expect(getByPlaceholderText("Search…")).toBeVisible();
 });

 it("should execute onChange event everytime user search for something", () => {
  const onChangeMock = jest.fn();
  const { getByPlaceholderText } = render(
   <AppHeader onSearch={onChangeMock} />
  );

  const searchBox = getByPlaceholderText("Search…");
  const query = "2020";
  query.split("").reduce((accumulator, char) => {
   let value = accumulator + char;
   fireEvent.change(searchBox, { target: { value } });
   return value;
  }, "");

  expect(searchBox.value).toBe(query);
  expect(onChangeMock).toBeCalledTimes(query.length);
 });

 it("should respond to profice call", () => {
  const onProfileSelectMock = jest.fn();
  const { getByTestId } = render(
   <AppHeader onProfileSelect={onProfileSelectMock} />
  );
  const profileBtn = getByTestId("profile-icon");

  fireEvent.click(profileBtn);
  expect(onProfileSelectMock).toBeCalledTimes(1);
 });

 it("should respond to logout call", () => {
  const onLogoutSelectMock = jest.fn();
  const { getByTestId } = render(<AppHeader onLogout={onLogoutSelectMock} />);
  const logoutBtn = getByTestId("logout-icon");

  fireEvent.click(logoutBtn);
  expect(onLogoutSelectMock).toBeCalledTimes(1);
 });
});
