import { DO_LOGIN } from "./actionTypes";

export function login({ email, password }) {
  return fakeLogin(email, password);
}

function fakeLogin(email, password) {
  // TODO: do actual login API call

  return (dispatch) => {
    new Promise((res) => {
      setTimeout(() => {
        res(
          dispatch({
            type: DO_LOGIN,
            payload: {
              accessToken: "sjdndkhfgwurgeu28327724235r187jdkghvkd",
            },
          })
        );
      }, 2000);
    });
  };
}
