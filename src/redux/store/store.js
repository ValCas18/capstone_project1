import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { characterReducer } from "../reducers/characterReducer";

const rootReducer = combineReducers({
	character: characterReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
