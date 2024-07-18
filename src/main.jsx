import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./configs/redux/store.js";
import App from "./App.jsx";
import "./index.css";
import Alert from "./component/base/Alert/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Alert />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
