import { DO_LOGIN } from "../actions";

const INITIAL_STATE = {
 accessToken: "",
};

export default function AuthReducer(state = INITIAL_STATE, action) {
 switch (action.type) {
  case DO_LOGIN:
   const { accessToken } = action.payload;
   return {
    ...state,
    accessToken,
   };
  default:
   return state;
 }
}
