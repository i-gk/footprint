import { DO_LOGIN_SUCCESS } from "./";
import { showLoader, hideLoader } from "./uicontrols.actions";
import { performLogin } from "../../services/user.service";

export function login({ email, password }) {
 return doLogin(email, password);
}

function doLogin(email, password) {
 return async (dispatch) => {
  dispatch(showLoader());
  const authData = await performLogin({ email, password });
  dispatch(hideLoader());
  dispatch({
   type: DO_LOGIN_SUCCESS,
   payload: authData,
  });
 };
}
