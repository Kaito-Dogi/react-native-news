import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";

import { userReducer,UserState } from "./reducers/user";

type State = {
  user: UserState;
};

const rootReducer = combineReducers<State>({
  user: userReducer,
});

// FIXME: createStore は非推奨なので Redux Toolkit に置き換える
/**
 * @package
 */
export const store = createStore(rootReducer, composeWithDevTools());
