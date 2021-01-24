import { CHANGE_DIAL } from "./types";


export const changeDial = dial => {
  return {
    type: CHANGE_DIAL,
    payload: dial
  };
};
