import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import AppHeader from "../appHeader.component";

afterEach(cleanup);

describe("App Header Component", () => {
 it("should render without crashing", () => {
  const { container } = render(<AppHeader />);

  expect(container.querySelector("#footprint-appheader")).toBeVisible();
 });

 it("should should hide search-bar if searchEnabled is false", () => {
  const { queryAllByPlaceholderText } = render(
   <AppHeader searchEnabled={false} />
  );

  expect(queryAllByPlaceholderText("Search…").length).toBe(0);
 });

 it("should should show search-bar if searchEnabled is true", () => {
  const { queryAllByPlaceholderText } = render(
   <AppHeader searchEnabled={true} />
  );

  expect(queryAllByPlaceholderText("Search…").length).toBe(1);
 });

 it("should execute onChange event everytime user search for something", () => {
  const onChangeMock = jest.fn();
  const { getByPlaceholderText } = render(
   <AppHeader searchEnabled={true} onSearch={onChangeMock} />
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
