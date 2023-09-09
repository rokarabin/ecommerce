import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from "./authReducer";
import cartReducer from "./CartReducer";
import itemReducer from "./Itemreducer";

const rootReducer = combineReducers({
  itemStore: itemReducer,
  cartStore: cartReducer,
  authStore: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const myPersistedReducer = persistReducer(persistConfig, rootReducer);

export const myStore = createStore(myPersistedReducer);
export const myPersistor = persistStore(myStore);
