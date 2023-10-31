import { combineReducers, createStore } from "redux";

import { userReducer } from "./reducers/user";
import { State } from "./State";

const rootReducer = combineReducers<State>({
  user: userReducer,
});

// FIXME: createStore は非推奨なので Redux Toolkit に置き換える
/**
 * @package
 */
export const store = createStore(rootReducer);
