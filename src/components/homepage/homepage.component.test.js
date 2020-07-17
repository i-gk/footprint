import React from "react";
import { render, cleanup } from "@testing-library/react";

import Homepage from "./homepage.component";

afterEach(cleanup);

describe("Homepage Component", () => {
 it("Should render without crashing", () => {
  const { container } = render(<Homepage />);
  expect(container.querySelector("#footprint-homepage")).not.toBeNull();
 });

 it("should include AppHeader component", () => {
  const { container, debug } = render(<Homepage />);
  expect(container.querySelector("#footprint-appheader")).not.toBeNull();
 });
});
