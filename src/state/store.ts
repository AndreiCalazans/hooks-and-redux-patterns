import { createStore, combineReducers } from "redux";

const anyReducer = () => ({});

const reducers = combineReducers({ anyReducer });

export const store = createStore(reducers);
