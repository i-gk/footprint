import { FETCH_MEMORIES_SUCCESS } from "../actions";

const INITIAL_STATE = {
 previews: [],
};

export default function MemoriesReducer(state = INITIAL_STATE, action) {
 switch (action.type) {
  case FETCH_MEMORIES_SUCCESS: {
   return {
    ...state,
    previews: [...action.payload],
   };
  }
  default:
   return state;
 }
}
