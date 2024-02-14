export const GET_CHARACTER = "GET_CHARACTER";
export const SET_SEARCH_CRITERIA = "SET_SEARCH_CRITERIA";

export const setSearchCriteria = (region, server, characterName) => ({
	type: SET_SEARCH_CRITERIA,
	payload: { region, server, characterName },
});

export const getCharacterAsync = () => {
	return async (dispatch, getState) => {
		try {
			const { region, server, characterName } = getState().input;
			const res = await fetch(
				`https://raider.io/api/v1/characters/profile?region=${region}&realm=${server}&name=${characterName}`
			);
			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}
			const data = await res.json();
			dispatch({
				type: GET_CHARACTER,
				payload: data,
			});
		} catch (error) {
			console.log("Error fetching data:", error);
		}
	};
};
export default getCharacterAsync;
