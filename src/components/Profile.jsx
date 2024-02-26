import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Profile = () => {
	const favChars = useSelector((state) => state.userData.fav);

	return (
		<div>
			<h2 className="text-light">Favourite Characters</h2>
			{favChars.length > 0 ? (
				favChars.map((char, index) => (
					<Card key={index} style={{ width: "10rem" }}>
						<Card.Img src={char.thumbnail_url} />
						<Card.Body>
							<Card.Title>{char.name}</Card.Title>
							<Card.Text>
								{char.active_spec_name} {char.class}
							</Card.Text>
							<Button
								/* onClick={} */
								className={char.faction === "alliance" ? "bg-primary text-warning" : "bg-danger text-dark"}
							>
								Remove From Favourite!
							</Button>{" "}
							{/* potrei rendere il colore di ogni pulsante uguale a quello della classe con uno switch?*/}
							{/* style={{ backgroundColor: "classcolor" }}  */}
						</Card.Body>
					</Card>
				))
			) : (
				<h4 className="text-light">No characters selected.</h4>
			)}
		</div>
	);
};

export default Profile;
