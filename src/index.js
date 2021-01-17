import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxPromise from "redux-promise";
import App from "./components/App";
import reducers from "./reducers/index";
import registerServiceWorker from "./registerServiceWorker";

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxPromise))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
