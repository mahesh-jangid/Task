import { addNewItem, updateItemDetails } from "../Utils";
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

const InitialState = {
  Loading: false,
  Posts: [],
  IsPostAdded: false,
  IsEdited: false,
  Error: null,
};

export const PostsFetchReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case POSTS_FETCH_REQUEST:
      return {
        ...state,
        Loading: true,
      };

    case POSTS_FETCH_SUCCESS:
      return {
        ...state,
        Loading: false,
        Posts: payload,
      };

    case POSTS_FETCH_FAIL:
      return {
        ...state,
        Loading: false,
        Error: payload,
      };

    default:
      return state;
  }
};

export const AddPostsReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case POSTS_ADD_REQUEST:
      return {
        ...state,
        Loading: true,
      };
    case POSTS_ADD_SUCCESS:
      return {
        ...state,
        Loading: false,
        IsPostAdded: true,
        Posts: addNewItem(state.Posts, payload),
      };

    case POSTS_ADD_FAIL:
      return {
        ...state,
        Loading: false,
        Error: payload,
      };
    default:
      return state;
  }
};
export const EditPostReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case POSTS_EDIT_REQUEST:
      return {
        ...state,
        Loading: true,
      };
    case POSTS_EDIT_SUCCESS:
      return {
        ...state,
        Loading: false,
        IsEdited: true,
        Posts: updateItemDetails(state.Posts, payload),
      };

    case POSTS_EDIT_FAIL:
      return {
        ...state,
        Loading: false,
        Error: payload,
      };
    default:
      return state;
  }
};
