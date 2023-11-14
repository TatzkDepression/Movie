import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { spinnerReducer } from "./spinnerReducer";

export let rootReducer = combineReducers({ userReducer, spinnerReducer });
