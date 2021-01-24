import UserReleasesReducer from "./reducer_user_releases";
import CoverSizeReducer from "./reducer_cover_size";
import ReleaseReducer from "./reducer_release";
import SynthesizerReducer from "./reducer_synthesizer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  collection: UserReleasesReducer,
  coversize: CoverSizeReducer,
  release: ReleaseReducer,
  synthesizer: SynthesizerReducer,
});

export default rootReducer;
