import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer/userReducer";
export const Reducers = combineReducers({
    user:userReducer
})