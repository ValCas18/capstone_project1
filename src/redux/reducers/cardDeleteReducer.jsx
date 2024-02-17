import { DELETE_CARD } from "../actions";

const initialState = {
	cardExists: true,
};

export const deleteCard = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_CARD:
			return {
				...state,
				cardExists: false,
			};
		default:
			return state;
	}
};
