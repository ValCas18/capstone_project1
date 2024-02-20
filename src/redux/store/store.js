import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { characterReducer } from "../reducers/characterReducer";
import { inputReducer } from "../reducers/inputReducer";

const rootReducer = combineReducers({
	character: characterReducer,
	input: inputReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
