import rootReducer from "./rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancer(applyMiddleware(thunk))
);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
