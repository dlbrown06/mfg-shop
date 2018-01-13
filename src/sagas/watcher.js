import { takeLatest } from "redux-saga/effects";
import { authorize } from "./userSaga";
import * as types from "../config/actionTypes";

// Watches for USER_LOGIN action type asynchronously
export default function* watchUserLogin() {
  yield takeLatest(types.USER_LOGIN_REQUEST, authorize);

}
