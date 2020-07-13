import { SHOW_LOADER, HIDE_LOADER } from "../actions";

const INITIAL_STATE = {
 loaderVisibility: false,
};

export default function UIControlsReducer(state = INITIAL_STATE, action) {
 switch (action.type) {
  case SHOW_LOADER:
   return {
    ...state,
    loaderVisibility: true,
   };
  case HIDE_LOADER:
   return {
    ...state,
    loaderVisibility: false,
   };

  default:
   return state;
 }
}
