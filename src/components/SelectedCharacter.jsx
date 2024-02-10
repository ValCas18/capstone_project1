import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CHARACTER } from "../redux/actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const SelectedCharacter = () => {
	const dispatch = useDispatch();
	const singleCharacter = useSelector((state) => state.character.searchChar);
	useEffect(() => {
		fetch("https://raider.io/api/v1/characters/profile?region=eu&realm=sylvanas&name=helanis")
			.then((raw) => {
				return raw.json();
			})
			.then((res) => {
				console.log(res);
				dispatch({
					type: GET_CHARACTER,
					payload: res,
				});
			});
	}, []);
	return (
		<>
			<Card style={{ width: "10rem" }}>
				<Card.Img src={singleCharacter.thumbnail_url} />
				<Card.Body>
					<Card.Title>{singleCharacter.name}</Card.Title>
					<Card.Text>
						{singleCharacter.region && singleCharacter.region.toUpperCase()}-{singleCharacter.realm}
					</Card.Text>
					<Card.Text>
						{singleCharacter.active_spec_name} {singleCharacter.class}
					</Card.Text>
					<Button variant="primary">Add to Favorite</Button>
				</Card.Body>
			</Card>
		</>
	);
};
export default SelectedCharacter;
