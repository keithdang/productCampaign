import { combineReducers } from "redux";
import dataReducer from "./dataReducers";
import chosenReducer from "./chosenReducers";
const rootReducer = combineReducers({
  data: dataReducer,
  chosen: chosenReducer
});

export default rootReducer;
