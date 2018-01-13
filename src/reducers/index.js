import { combineReducers } from "redux";
import user from "./userReducer";

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  user
});

export default rootReducer;
