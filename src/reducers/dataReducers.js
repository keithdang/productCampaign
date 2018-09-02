import { FETCH_DATA } from "../actions/types";
//import { stat } from 'fs/promises';
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      return [action.payload];
    //   return [action.payload, ...state];
    default:
      return state;
  }
}
