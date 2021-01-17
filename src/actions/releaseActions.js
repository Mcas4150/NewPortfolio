import axios from "axios";
import { ROOT_URL, API_KEY } from "../utils/setAuthToken";
import { FETCH_RELEASE } from "./types";

export function fetchRelease(release_id) {
  const url = `${ROOT_URL}/releases/${release_id}?token=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_RELEASE,
    payload: request
  };
}
