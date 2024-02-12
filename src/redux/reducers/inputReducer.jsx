import { SET_SEARCH_CRITERIA } from "../actions";

const initialState = {
	region: "",
	server: "",
	characterName: "",
};

export const inputReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH_CRITERIA:
			return {
				...state,
				region: action.payload.region,
				server: action.payload.server,
				characterName: action.payload.characterName,
			};
		default:
			return state;
	}
};
