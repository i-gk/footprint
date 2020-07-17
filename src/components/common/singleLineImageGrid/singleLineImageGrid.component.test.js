import React from "react";
import { render, cleanup, getByText } from "@testing-library/react";

import SingleLineImageGrid from "./singleLineImageGrid.component";

afterEach(cleanup);

describe("Single Line Image Grid Component", () => {
 it("should display without crashing", () => {
  const { queryByTestId } = render(<SingleLineImageGrid />);

  const gridElement = queryByTestId("single-line-image-grid");
  expect(gridElement).not.toBeNull();
 });
});
