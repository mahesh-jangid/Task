import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";

import { PostsFetchReducer } from "./Reducers";
import { AddPostsReducer } from "./Reducers";
import { EditPostReducer } from "./Reducers";

const reducer = combineReducers({
  Posts: PostsFetchReducer,
  AddPosts: AddPostsReducer,
  EditPosts: EditPostReducer,
});

const composeEnhancer = compose;
const store = legacy_createStore(
  reducer,

  composeEnhancer(applyMiddleware(thunk))
);
export default store;
