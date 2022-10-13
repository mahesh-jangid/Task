import Axios from "axios";
import {
  POSTS_FETCH_REQUEST,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAIL,
  POSTS_ADD_REQUEST,
  POSTS_ADD_SUCCESS,
  POSTS_ADD_FAIL,
  POSTS_EDIT_REQUEST,
  POSTS_EDIT_SUCCESS,
  POSTS_EDIT_FAIL,
} from "./Action.types";

export const fetchPosts = (URL) => {
  return (dispatch) => {
    dispatch({ type: POSTS_FETCH_REQUEST });
    Axios.get(URL)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch({ type: POSTS_FETCH_SUCCESS, payload: response.data });
        } else {
          dispatch({ type: POSTS_FETCH_FAIL, payload: response });
        }
      })
      .catch((err) => {
        dispatch({ type: POSTS_FETCH_FAIL, payload: err.message });
      });
  };
};
export const AddPosts = (URL, obj) => {
  return (dispatch) => {
    dispatch({ type: POSTS_ADD_REQUEST });

    Axios.post(URL, obj)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          dispatch({ type: POSTS_ADD_SUCCESS });
        } else {
          dispatch({ type: POSTS_ADD_FAIL, payload: response });
        }
      })
      .catch((err) => {
        dispatch({ type: POSTS_ADD_FAIL, payload: err.message });
      });
  };
};
export const EditPosts = (URL, obj) => {
  return async (dispatch) => {
    dispatch({ type: POSTS_EDIT_REQUEST });
    Axios.put(URL, obj)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch({ type: POSTS_EDIT_SUCCESS });
        } else {
          dispatch({ type: POSTS_EDIT_FAIL, payload: response });
        }
      })
      .catch((err) => {
        dispatch({ type: POSTS_EDIT_FAIL, payload: err.message });
      });
  };
};
