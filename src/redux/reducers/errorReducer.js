import { REMOVE_ERROR, SET_ERROR } from "../actions";

const initialState = {
	status: [],
};
export const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ERROR:
			return {
				...state,
				status: [...state.status, action.payload],
			};
		case REMOVE_ERROR:
			return {
				...state,
				status: state.status.filter((error, index) => index !== action.payload),
			};

		default:
			return state;
	}
};
