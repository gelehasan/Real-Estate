import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer/userReducer";
import { propertyReducer } from "../propertyReducer/propertiesSlice";
export const Allreducers = combineReducers({
    user: userReducer,
    properties:propertyReducer
})