import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as reducers from "../reducers";

const reducer = combineReducers(reducers);

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: "TRiBL",
      realtime: true,
    }),
  );

  const store = createStore(reducer, enhancer);

  return store;
}
