import { combineReducers } from "redux";

import posts from "./posts";

//posts: posts => both key and value are the same(keep only the first one)
export default combineReducers({ posts });  