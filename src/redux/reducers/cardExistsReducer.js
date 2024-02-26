import { CARD_EXISTS } from "../actions";

const initialState = {
	cardStatus: true,
};

export const cardExistsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CARD_EXISTS:
			return {
				...state,
				cardExists: false,
			};
		default:
			return state;
	}
};
