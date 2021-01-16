import UserReleasesReducer from "./reducer_user_releases";
import CoverSizeReducer from "./reducer_cover_size";
import ReleaseReducer from "./reducer_release";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  collection: UserReleasesReducer,
  coversize: CoverSizeReducer,
  release: ReleaseReducer
});

export default rootReducer;
