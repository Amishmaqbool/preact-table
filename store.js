import { createStore } from "redux";
import rootReducer from "./reducers";

let preloadedState;

preloadedState = {
  todos: [],
};

const store = createStore(rootReducer, preloadedState);

export default store;