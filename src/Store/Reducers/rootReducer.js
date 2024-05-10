import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer/userReducer";
export const Allreducers = combineReducers({
    user:userReducer
})