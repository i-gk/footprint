import { DO_LOGIN_SUCCESS } from "./";
import { showLoader, hideLoader } from "./uicontrols.actions";
import { makePOST } from "../../services/httpcore.service";

export function login({ email, password }) {
 return doLogin(email, password);
}

function doLogin(email, password) {
 return (dispatch) => {
  dispatch(showLoader());

  return makePOST(
   "/user/auth/login",
   {
    email,
    password,
   },
   true
  ).then(({ data }) => {
   dispatch(hideLoader());
   dispatch({
    type: DO_LOGIN_SUCCESS,
    payload: data,
   });
  });
 };
}
