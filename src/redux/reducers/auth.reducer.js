import { DO_LOGIN } from "../actions";

const initialState = {
  accessToken: "",
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case DO_LOGIN:
      const { accessToken } = action.payload;
      return {
          ...state,
          accessToken
      }
    default:
      return state;
  }
}
