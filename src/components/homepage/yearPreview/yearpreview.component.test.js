import React from "react";
import { render, cleanup } from "@testing-library/react";

import YearPreview from "./yearpreview.component";

afterEach(cleanup);

describe("Year preview component", () => {
 it("Should render without crashing", () => {
  const title = "My Year Preview";
  const { getByText, debug } = render(<YearPreview title={title} />);
  expect(getByText(title)).not.toBeNull();
 });
});
