import { configureStore } from "@reduxjs/toolkit";
import { Allreducers } from "./Reducers/rootReducer";
import logger from "redux-logger";

const middleWarwe = process.env.NODE_ENV === "development" ? [logger].filter(Boolean) : []

export const Store = configureStore({
 reducer:Allreducers,
 middleware:(getDefaultMiddleWare)=> getDefaultMiddleWare().concat(middleWarwe)
})


