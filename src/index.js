import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

import reducer from "./reducer";
import mySaga from "./sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/*eslint-enable */

// mount it on the Store
const store = createStore(
  reducer,
  composeSetup(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
