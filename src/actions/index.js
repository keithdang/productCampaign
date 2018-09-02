import { FETCH_DATA, FETCH_CHOSEN } from "./types";
export const fetchData = value => async dispatch => {
  const res = value;
  dispatch({ type: FETCH_DATA, payload: res });
};
export const fetchChosen = value => async dispatch => {
  const res = value;
  dispatch({ type: FETCH_CHOSEN, payload: res });
};
