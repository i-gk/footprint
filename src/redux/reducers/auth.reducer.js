import { DO_LOGIN } from "../actions";

const INITIAL_STATE = {
 // TODO: Just for dev purposes. Should be fetched from local storage
 accessToken: "123",
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
