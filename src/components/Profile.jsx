import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
	const favChars = useSelector((state) => state.userData.fav);

	return (
		<Container
			fluid
			className="px-5 justify-content-center align-items-center"
			style={{
				backgroundImage: `url('https://i.imgur.com/FnbrmXD.jpeg')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "100vh",
			}}
		>
			<h2 className="my-3">Your Favourite Characters</h2>
			{favChars.length > 0 ? (
				<Row>
					{favChars.map((char, index) => (
						<Col
							key={index}
							xs={12}
							md={6}
							className="py-2"
							style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", border: "3px solid black" }}
						>
							<Row>
								<Col xs={3} className="d-flex flex-column space-between">
									{char.thumbnail_url && <img src={char.thumbnail_url} alt="Character Image" />}
									<div>
										<p className="mt-3">{char.name}</p>
										<p>{char.active_spec_name}</p>
										<p>{char.class}</p>
									</div>
									<Button className="mt-auto">Remove From Favourite</Button>
								</Col>

								<Col xs={9} style={{ textAlign: "left" }}>
									<p>Race: {char.race.charAt(0).toUpperCase() + char.race.slice(1)}</p>
									<p>Gender: {char.gender.charAt(0).toUpperCase() + char.gender.slice(1)}</p>
									<p>Faction: {char.faction.charAt(0).toUpperCase() + char.faction.slice(1)}</p>
									<p>Region: {char.region.toUpperCase()}</p>
									<p>Achievement Points: {char.achievement_points}</p>
									<p>Honorable Kills: {char.honorable_kills}</p>
									<p>Profile URL: {char.profile_url}</p>
								</Col>
							</Row>
						</Col>
					))}
				</Row>
			) : (
				<h4>No characters selected.</h4>
			)}
		</Container>
	);
};

export default Profile;
