import { combineReducers } from "redux";
import { allDocumentListReducer } from "./allDocumentListReducer";

export const rootReducer = combineReducers({
  allDocumentList: allDocumentListReducer,
})
