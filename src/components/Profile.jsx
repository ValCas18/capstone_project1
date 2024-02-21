import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Profile = () => {
	const favChars = useSelector((state) => state.isFavourite.favourites);

	return (
		<div>
			<h2 className="text-light">Favourite Characters</h2>
			{favChars ? (
				<Card style={{ width: "10rem" }}>
					<Card.Img src={favChars.thumbnail_url} />
					<Card.Body>
						<Card.Title>{favChars.name}</Card.Title>
						<Card.Text>
							{favChars.active_spec_name} {favChars.class}
						</Card.Text>
						<Button
							/* onClick={} */
							className={favChars.faction === "alliance" ? "bg-primary text-warning" : "bg-danger text-dark"}
						>
							Remove From Favourite!
						</Button>{" "}
						{/* potrei rendere il colore di ogni pulsante uguale a quello della classe con uno switch?*/}
						{/* style={{ backgroundColor: "classcolor" }}  */}
					</Card.Body>
				</Card>
			) : (
				""
			)}
		</div>
	);
};

export default Profile;
