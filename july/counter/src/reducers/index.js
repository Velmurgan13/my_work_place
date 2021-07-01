import { changeNumber, dummy } from "./scale";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumber,
  dummy,
});

export default rootReducer;
