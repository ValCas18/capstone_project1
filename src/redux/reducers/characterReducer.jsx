import { GET_CHARACTER } from "../actions";

const initialState = {
	searchChar: [],
};

export const characterReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CHARACTER:
			return {
				...state,
				searchChar: action.payload,
			};
		default:
			return state;
	}
};
