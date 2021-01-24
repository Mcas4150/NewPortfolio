import { FETCH_RELEASE } from "../actions/types";

export default function ReleaseReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_RELEASE:
      return action.payload.data;

    default:
      return state;
  }
}
