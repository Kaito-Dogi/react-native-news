import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import { userReducer } from "./reducers/user";
import { State } from "./State";

const rootReducer = combineReducers<State>({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whiteList: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// FIXME: createStore は非推奨なので Redux Toolkit に置き換える
/**
 * @package
 */
export const store = createStore(persistedReducer);

/**
 * @package
 */
export const persistor = persistStore(store);
