import initialState from "./initialState";
import * as types from "../config/actionTypes";

// Handles user related actions
export default function(state = initialState.user, action) {
  switch (action.type) {
    case types.USER_CHANGE_FORM:
      return { ...state, formState: action.newFormState };
    case types.USER_SET_AUTH:
      return { ...state, loggedIn: action.newAuthState };
    case types.USER_SENDING_REQUEST:
      return { ...state, currentlySending: action.sending };
    case types.USER_REQUEST_ERROR:
      return { ...state, error: action.error };
    case types.USER_CLEAR_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
}
