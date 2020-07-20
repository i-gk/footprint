import { FETCH_MEMORIES_SUCCESS } from "./";
import { fetchMemories } from "../../services/memories.service";

export const getMemories = () => {
 return async (dispatch) => {
  const previews = await fetchMemories();
  dispatch(fetchMemoriesSuccess(previews));
 };
};

function fetchMemoriesSuccess(payload) {
 return {
  type: FETCH_MEMORIES_SUCCESS,
  payload,
 };
}
