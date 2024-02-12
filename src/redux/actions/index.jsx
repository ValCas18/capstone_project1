export const GET_CHARACTER = "GET_CHARACTER";
export const SET_REGION = "SET_REGION";
export const SET_SEARCH_CRITERIA = "SET_SEARCH_CRITERIA";

export const setSearchCriteria = (region, server, characterName) => ({
	type: SET_SEARCH_CRITERIA,
	payload: { region, server, characterName },
});
