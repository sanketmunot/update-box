import { createStore } from "redux";
import updatesReducers from "./reducers/updatesReducer";

const updatesStore = createStore(
  updatesReducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default updatesStore;