import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CHARACTER } from "../redux/actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

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
			<Row>
				<Col xs={12} className="justify-content-center">
					<Card style={{ width: "10rem" }}>
						<Card.Img src={singleCharacter.thumbnail_url} />
						<Card.Body>
							<Card.Title>{singleCharacter.name}</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</Card.Text>
							<Button variant="primary">Add to Favorite</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};
export default SelectedCharacter;
