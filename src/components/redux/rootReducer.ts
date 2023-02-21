import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export const rootReducer = combineReducers({
  userSlice,
});

export default rootReducer;
