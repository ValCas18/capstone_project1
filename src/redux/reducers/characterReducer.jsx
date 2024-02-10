import { GET_CHARACTER, SET_QUERY } from "../actions";

const initialState = {
	searchChar: [],
	query: "",
};

export const characterReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CHARACTER:
			return {
				...state,
				searchChar: action.payload,
			};
		case SET_QUERY:
			return {
				...state,
				query: action.payload,
			};
		default:
			return state;
	}
};
