import { FETCH_MEMORIES_SUCCESS } from "./";

export const getMemories = () => {
 return async (dispatch) => {
  const data = await mockFetchData();
  dispatch(fetchMemoriesSuccess(data));
 };
};

function fetchMemoriesSuccess(payload) {
 return {
  type: FETCH_MEMORIES_SUCCESS,
  payload,
 };
}

// TODO: this will be from services in future
function mockFetchData() {
 return [];
}
