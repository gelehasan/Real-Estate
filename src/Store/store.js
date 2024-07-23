import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage';  
import { persistStore, persistReducer } from 'redux-persist';
import { Allreducers } from "./Reducers/rootReducer";
 
const middleWarwe = process.env.NODE_ENV === "development" ? [logger].filter(Boolean) : []

export const Store = configureStore({
    reducer: Allreducers,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(middleWarwe)
})
 
 
const middleWare = process.env.NODE_ENV === "development" ? [logger].filter(Boolean) : []
 


export const store = configureStore({
    reducer: Allreducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWare)
  });
  
 
