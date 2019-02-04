import axios from "axios";

export const FETCH_PHOTOS_START = "FETCH_PHOTOS_START";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE";

export const getPhotos = () => dispatch => {
  dispatch({ type: FETCH_PHOTOS_START });
  axios
    .get("http://localhost:3333/photos/")
    .then(response =>
      dispatch({ type: FETCH_PHOTOS_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: FETCH_PHOTOS_FAILURE, payload: error }));
};
