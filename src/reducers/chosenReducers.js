import { FETCH_CHOSEN } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CHOSEN:
      return [action.payload];
    default:
      return state;
  }
}
