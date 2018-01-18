import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import login from "./containers/Login/reducer";

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  form,
  login
});

export default rootReducer;
