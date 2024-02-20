import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterAsync } from "../redux/actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SelectedCharacter = () => {
	const dispatch = useDispatch();
	const singleCharacter = useSelector((state) => state.character.singleChar);
	const region = useSelector((state) => state.input.region);
	const server = useSelector((state) => state.input.server);
	const characterName = useSelector((state) => state.input.characterName);
	const cardExists = useSelector((state) => state.deleteCard.cardExists);

	useEffect(() => {
		dispatch(getCharacterAsync());
	}, [region, server, characterName]);

	return (
		<>
			<div className="d-flex justify-content-center">
				{cardExists ? (
					<Card style={{ width: "10rem" }}>
						<Card.Img src={singleCharacter.thumbnail_url} />
						<Card.Body>
							<Card.Title>{singleCharacter.name}</Card.Title>
							<Card.Text>
								{singleCharacter.active_spec_name} {singleCharacter.class}
							</Card.Text>
							<Button
								className={singleCharacter.faction === "alliance" ? "bg-primary text-warning" : "bg-danger text-dark"}
							>
								Add to Favorite!
							</Button>{" "}
							{/* potrei rendere il colore di ogni pulsante uguale a quello della classe con uno switch?*/}
							{/* style={{ backgroundColor: "orange" }}  */}
						</Card.Body>
					</Card>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default SelectedCharacter;
