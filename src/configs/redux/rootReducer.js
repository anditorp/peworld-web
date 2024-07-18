import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import Cookies from "js-cookie";
import { CookieStorage } from "redux-persist-cookie-storage";

import authReducer from "./reducer/authReducer";
import checkRoleReducer from "./reducer/checkRoleReducer";
import mainReducer from "./reducer/mainReducer";
import recruiterReducer from "./reducer/recruiterReducer";
import workerReducer from "./reducer/workerReducer";
import alertReducer from "./reducer/alertReducer";
import notificationsReducer from "./reducer/notificationsReducer";

const authPersistConfig = {
  key: "auth",
  storage: new CookieStorage(Cookies),
};

const recruiterPersistConfig = {
  key: "recruiter",
  storage: new CookieStorage(Cookies),
};

const rolePersistConfig = {
  key: "role",
  storage: new CookieStorage(Cookies),
};

const rootReducer = combineReducers({
  alert: alertReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  main: mainReducer,
  checkRole: persistReducer(rolePersistConfig, checkRoleReducer),
  worker: workerReducer,
  recruiter: persistReducer(recruiterPersistConfig, recruiterReducer),
  notifications: notificationsReducer,
});

export default rootReducer;
