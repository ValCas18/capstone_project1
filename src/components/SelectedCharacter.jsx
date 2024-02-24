import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, getCharacterAsync } from "../redux/actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const SelectedCharacter = () => {
	const singleCharacter = useSelector((state) => state.character.singleChar);
	const userData = useSelector((state) => state.userData);
	const cardExists = useSelector((state) => state.cardExists.cardExists);
	const dispatch = useDispatch();
	const [isAddedToFav, setIsAddedToFav] = useState(false);

	const addToFavHandler = async () => {
		try {
			const response = await axios.put(`http://localhost:8000/users/${userData.userId}`, {
				...userData,
				fav: [singleCharacter],
			});
			console.log("PUT request successful:", response.data);
			dispatch(addToFav(singleCharacter));
			setIsAddedToFav(true);
		} catch (error) {
			console.error("Error making PUT request:", error);
		}
	};

	useEffect(() => {
		dispatch(getCharacterAsync());
	}, []);

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
							<Button onClick={addToFavHandler} disabled={isAddedToFav}>
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
