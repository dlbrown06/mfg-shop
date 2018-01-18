import LoginSaga from "./containers/Login/sagas";

// function (startForeman) as our root Saga.
export default function* startForman() {
  // yield fork(watchUserLogin);
  yield [LoginSaga()];
}
