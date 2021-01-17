import axios from "axios";

import { ROOT_URL, API_KEY } from "../utils/setAuthToken";
import {
  FETCH_COLLECTION_NEXT_PAGE,
  FETCH_USER_COLLECTION,
  UPDATE_COVER_SIZE
} from "./types";

export function fetchUserCollection(items = 50) {
  const url = `${ROOT_URL}/users/charmingultra/collection/folders/0/releases?token=${API_KEY}&per_page=${items}`;
  const request = axios.get(url);

  return {
    type: FETCH_USER_COLLECTION,
    payload: request
  };
}

export function fetchCollectionNextPage(url) {
  const request = axios.get(url);

  return {
    type: FETCH_COLLECTION_NEXT_PAGE,
    payload: request
  };
}

export function updateCoverSize(size) {
  return {
    type: UPDATE_COVER_SIZE,
    size: size
  };
}
