import axios from "axios";
import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from "./types";
const baseUrl = "https://backend-art.herokuapp.com/";

export const loginUser = userCredentials => dispatch => {
  dispatch({ type: USER_LOGIN_START });
  axios
    .post(`${baseUrl}api/login${userCredentials}`)
    .then(response =>
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: USER_LOGIN_FAILURE, payload: error }));
};
//REMEMBER TO PUT THIS IN REDUCER!!!!!
//localStorage.setItem("token", response.data.token);
//this.props.history.push('/');
