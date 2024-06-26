import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER, getCharacterAsync } from "../redux/actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const SelectedCharacter = () => {
	const singleCharacter = useSelector((state) => state.character.singleChar);
	const userData = useSelector((state) => state.userData);
	const userInput = useSelector((state) => state.input);
	const dispatch = useDispatch();
	const [isAddedToFav, setIsAddedToFav] = useState(false);

	const addToFavHandler = async () => {
		try {
			const updatedUser = {
				...userData,
				fav: [...userData.fav, singleCharacter],
			};

			const response = await axios.patch(`http://localhost:8000/users/${userData.id}`, { fav: updatedUser.fav });
			console.log("PUT request successful:", response.data);
			dispatch({
				type: GET_USER,
				payload: response.data,
			});
			setIsAddedToFav(true);
		} catch (error) {
			console.error("Error making PUT request:", error);
		}
	};

	{
		/* FETCH */
	}
	useEffect(() => {
		dispatch(getCharacterAsync());
	}, [userInput.region, userInput.server, userInput.characterName]);

	return (
		<>
			<div className="d-flex justify-content-center">
				{singleCharacter.name ? (
					<Card
						style={{ width: "10rem" }}
						className={
							singleCharacter.faction === "alliance" ? "border-primary border-5 mb-5" : "border-danger border-5 mb-5"
						}
					>
						<Card.Img src={singleCharacter.thumbnail_url} />
						<Card.Body>
							<Card.Title>{singleCharacter.name}</Card.Title>
							<Card.Text>
								{singleCharacter.active_spec_name} {singleCharacter.class}
							</Card.Text>
							<Button
								onClick={addToFavHandler}
								disabled={isAddedToFav}
								className={
									singleCharacter.faction === "alliance" ? "text-warning rounded-0" : "bg-danger text-dark rounded-0"
								}
							>
								{isAddedToFav ? "Added to Favourites!" : "Add to Favourites"}
							</Button>
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
