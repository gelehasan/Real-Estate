import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer/userReducer.js";
import { propertyReducer } from "../../../Store/propertyReducer/propertiesSlice.js";
export const Reducers = combineReducers({
    user:userReducer,
    properties:propertyReducer
})