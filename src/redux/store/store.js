import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { characterReducer } from "../reducers/characterReducer";
import { inputReducer } from "../reducers/inputReducer";
import { deleteCard } from "../reducers/cardDeleteReducer";

const rootReducer = combineReducers({
	character: characterReducer,
	input: inputReducer,
	deleteCard: deleteCard,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
