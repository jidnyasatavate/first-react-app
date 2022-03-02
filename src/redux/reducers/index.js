import { combineReducers } from "redux";
import courseReducer from "./courseReducer";

const rootReducer = combineReducers({
  courseReducer: courseReducer,
});

export default rootReducer;
