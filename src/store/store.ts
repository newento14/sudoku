import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {boardReducer} from "./reducers/boardReducer.ts";

export const store = createStore(boardReducer, applyMiddleware(thunk))