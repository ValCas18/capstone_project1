import { GET_CHARACTER } from "../actions";

const initialState = {
	singleChar: [],
};

export const characterReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CHARACTER:
			return {
				...state,
				singleChar: action.payload,
			};
		default:
			return state;
	}
};
