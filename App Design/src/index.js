import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Cache, persistor } from "./Redux/Cache";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={Cache}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
