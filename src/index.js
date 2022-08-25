import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./component/App";
import reducers from "./reducers";

createRoot(document.querySelector("#root")).render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
