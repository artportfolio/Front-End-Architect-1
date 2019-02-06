import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from "../../store/actions/types";

const initialState = {
  loggedIn: true,
  logInMessage: ""
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_START:
      return {
        ...state,
        logInMessage: "Logging In..."
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        logInMessage: "Login Success!"
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        logInMessage: "Login Failed!"
      };
    default:
      return state;
  }
}
