import { ADD_FAV, REMOVE_FAV } from "../actions";

const initialState = {
	fav: [],
};

export const favouriteReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAV:
			return {
				...state,
				fav: action.payload,
			};
		case REMOVE_FAV:
			return {};
		default:
			return state;
	}
};
