import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;
