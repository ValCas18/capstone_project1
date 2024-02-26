import { GET_USER } from "../actions";

const initialState = {
	userName: "",
	password: "",
	id: null,
	fav: [],
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER:
			return {
				...action.payload,
			};
		default:
			return state;
	}
};
