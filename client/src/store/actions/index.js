import axios from "axios";

export const FETCH_PHOTOS_START = "FETCH_PHOTOS_START";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

const baseUrl = "https://backend-art.herokuapp.com/";

export const getPhotos = () => dispatch => {
  dispatch({ type: FETCH_PHOTOS_START });
  axios
    .get("http://localhost:3333/photos/")
    .then(response =>
      dispatch({ type: FETCH_PHOTOS_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: FETCH_PHOTOS_FAILURE, payload: error }));
};

export const registerUser = userRegistration => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  axios
    .post(`${baseUrl}api/register${userRegistration}`)
    .then(response =>
      dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: REGISTER_USER_FAILURE, payload: error }));
};

export const loginUser = userCredentials => dispatch => {
  dispatch({ type: USER_LOGIN_START });
  axios
    .post(`${baseUrl}api/login${userCredentials}`)
    .then(response =>
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: USER_LOGIN_FAILURE, payload: error }));
};
