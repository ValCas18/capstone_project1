import { GET_USER } from "../actions";

const initialState = {
	userName: "",
	password: "",
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER:
			return {
				...state,
				userName: action.payload.userName,
				password: action.payload.password,
			};
		default:
			return state;
	}
};
