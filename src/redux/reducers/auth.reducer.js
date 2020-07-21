import storage from "../../utils/storage.service";
import { DO_LOGIN_SUCCESS } from "../actions";
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from "../../utils/appKeys/auth.keys";

const currentAccessToken = storage.get(ACCESS_TOKEN_LOCAL_STORAGE_KEY) || "";

const INITIAL_STATE = {
 accessToken: currentAccessToken,
};

export default function AuthReducer(state = INITIAL_STATE, action) {
 switch (action.type) {
  case DO_LOGIN_SUCCESS:
   const { accessToken } = action.payload;
   return {
    ...state,
    accessToken,
   };
  default:
   return state;
 }
}
