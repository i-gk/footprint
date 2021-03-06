import React from "react";
import { render, cleanup } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import Homepage from "../homepage.component";
import { Provider } from "react-redux";
import * as MemoriesActions from "../../../redux/actions/memories.actions";

afterEach(cleanup);

const ReduxProvider = ({ children, store }) => (
 <Provider store={store}>{children}</Provider>
);
const middlewares = [thunk];
const store = configureMockStore(middlewares);

beforeEach(() => {
 jest.clearAllMocks();
});

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

 it("should fetch latest memories upon rendering", () => {
  MemoriesActions.getMemories = jest.fn();
  MemoriesActions.getMemories.mockImplementation(() => {
   return { type: "FETCH_MEMORIES_SUCCESS", payload: [] };
  });

  const mockStore = store({
   memories: {
    previews: [],
   },
  });
  const { container, debug } = render(
   <ReduxProvider store={mockStore}>
    <Homepage />
   </ReduxProvider>
  );

  expect(MemoriesActions.getMemories).toHaveBeenCalledTimes(1);
 });
});
