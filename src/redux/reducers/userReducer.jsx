import { GET_USER } from "../actions";

const initialState = {
	userName: "",
	password: "",
	userId: null,
	favourites: [],
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER:
			return {
				...state,
				userName: action.payload.userName,
				password: action.payload.password,
				userId: action.payload.userId,
			};
		default:
			return state;
	}
};
