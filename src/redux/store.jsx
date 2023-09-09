import {createStore,combineReducers} from "redux"
import cartReducer from "./CartReducer";
import itemReducer from "./Itemreducer";
import {   persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer=combineReducers({
    itemStore:itemReducer,
    cartStore:cartReducer
})

const persistConfig = {
    key: 'root',
    storage,
   
  }

const myPersistedReducer = persistReducer(persistConfig, rootReducer)

export const myStore = createStore(myPersistedReducer)
export const myPersistor=persistStore(myStore)