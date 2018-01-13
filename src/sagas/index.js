import { fork } from "redux-saga/effects";
import watchUserLogin from "./watcher";

// function (startForeman) as our root Saga.
export default function* startForman() {
  yield fork(watchUserLogin);
}
