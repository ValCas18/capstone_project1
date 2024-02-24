import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { characterReducer } from "../reducers/characterReducer";
import { inputReducer } from "../reducers/inputReducer";
import { cardExistsReducer } from "../reducers/cardExistsReducer";
import { userReducer } from "../reducers/userReducer";
import { favouriteReducer } from "../reducers/favouriteReducer";

const rootReducer = combineReducers({
	character: characterReducer,
	input: inputReducer,
	userData: userReducer,
	cardExists: cardExistsReducer,
	isFav: favouriteReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
