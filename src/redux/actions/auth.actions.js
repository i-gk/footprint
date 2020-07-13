import { DO_LOGIN } from "./actionTypes";
import { showLoader, hideLoader } from "./uicontrols.actions";

export function login({ email, password }) {
 return fakeLogin(email, password);
}

function fakeLogin(email, password) {
 // TODO: do actual login API call
 return (dispatch) => {
  dispatch(showLoader());
  new Promise((resolve) => {
   setTimeout(
    (data) => {
     // hide loader
     dispatch(hideLoader());
     // resolve received data
     resolve(dispatch(loginDetails(data)));
    },
    2000,
    { accessToken: "sjdndkhfgwurgeu28327724235r187jdkghvkd" }
   );
  });
 };
}

function loginDetails(payload) {
 return {
  type: DO_LOGIN,
  payload,
 };
}
