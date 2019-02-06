import axios from "axios";
import {
  GET_PROFILE_WITH_POSTS_START,
  GET_PROFILE_WITH_POSTS_SUCCESS,
  GET_PROFILE_WITH_POSTS_FAILURE,
  GET_USER_POSTS_START,
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_FAILURE,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILURE,
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  EDIT_POST_START,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE
} from "./types";
const baseUrl = "https://backend-art.herokuapp.com/";

export const getProfileWithPosts = id => dispatch => {
  dispatch({ type: GET_PROFILE_WITH_POSTS_START });
  axios
    .get(`${baseUrl}api/users/posts/${id}`)
    .then(response =>
      dispatch({
        type: GET_PROFILE_WITH_POSTS_SUCCESS,
        payload: response.data
      })
    )
    .catch(error =>
      dispatch({ type: GET_PROFILE_WITH_POSTS_FAILURE, payload: error })
    );
};

export const getUserPosts = id => dispatch => {
  dispatch({ type: GET_USER_POSTS_START });
  axios
    .get(`${baseUrl}api/posts/users/${id}`)
    .then(response =>
      dispatch({
        type: GET_USER_POSTS_SUCCESS,
        payload: response.data
      })
    )
    .catch(error => dispatch({ type: GET_USER_POSTS_FAILURE, payload: error }));
};

//NEED TO HANDLE AUTHORIZATION TOKEN HERE!!
export const createPost = post => dispatch => {
  dispatch({ type: CREATE_POST_START });
  axios
    .post(`${baseUrl}api/posts`, post)
    .then(response =>
      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: response.data
      })
    )
    .catch(error => dispatch({ type: CREATE_POST_FAILURE, payload: error }));
};

export const getAllPosts = () => dispatch => {
  dispatch({ type: GET_ALL_POSTS_START });
  axios
    .get(`${baseUrl}api/posts`)
    .then(response =>
      dispatch({
        type: GET_ALL_POSTS_SUCCESS,
        payload: response.data
      })
    )
    .catch(error => dispatch({ type: GET_ALL_POSTS_FAILURE, payload: error }));
};

export const getPost = id => dispatch => {
  dispatch({ type: GET_POST_START });
  axios
    .get(`${baseUrl}api/posts/${id}`)
    .then(response =>
      dispatch({
        type: GET_POST_SUCCESS,
        payload: response.data
      })
    )
    .catch(error => dispatch({ type: GET_POST_FAILURE, payload: error }));
};

//NEEDS AUTHORIZATION TOKEN
export const editPost = (id, changes) => dispatch => {
  dispatch({ type: EDIT_POST_START, payload: id });
  axios
    .put(`${baseUrl}api/posts/${id}`, changes)
    .then(response =>
      dispatch({ type: EDIT_POST_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: EDIT_POST_FAILURE, payload: error }));
};

//NEED TO HANDLE AUTHORIZATION TOKEN HERE!!
export const deletePost = id => dispatch => {
  dispatch({ type: DELETE_POST_START, payload: id });
  axios
    .delete(`${baseUrl}api/posts/${id}`)
    .then(response =>
      dispatch({ type: DELETE_POST_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: DELETE_POST_FAILURE, payload: error }));
};
