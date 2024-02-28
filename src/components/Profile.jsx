import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
	const favChars = useSelector((state) => state.userData.fav);

	return (
		<Container
			fluid
			className="p-3 justify-content-center align-items-center"
			style={{
				backgroundImage: `url('https://i.imgur.com/FnbrmXD.jpeg')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "100vh",
			}}
		>
			<h2 className="">Your Favourite Characters</h2>
			{favChars.length > 0 ? (
				<Row className="gap-2 justify-content-evenly w-100">
					{favChars.map((char, index) => (
						<Col
							key={index}
							xs={12}
							md={5}
							lg={3}
							className="py-2"
							style={{ background: "rgba(255, 255, 255, 0.4)", border: "3px solid black" }}
						>
							<Row>
								<Col xs={4} className="d-flex flex-column space-between">
									{char.thumbnail_url && <img src={char.thumbnail_url} alt="Character Image" />}
									<div>
										<p className="mt-3">{char.name}</p>
										<p>{char.active_spec_name}</p>
										<p>{char.class}</p>
									</div>
								</Col>

								<Col xs={8} className="text-start">
									<p>Race: {char.race.charAt(0).toUpperCase() + char.race.slice(1)}</p>
									<p>Gender: {char.gender.charAt(0).toUpperCase() + char.gender.slice(1)}</p>
									<p>Faction: {char.faction.charAt(0).toUpperCase() + char.faction.slice(1)}</p>
									<p>Region: {char.region.toUpperCase()}</p>
									<p>Realm: {char.realm.charAt(0).toUpperCase() + char.realm.slice(1)}</p>
									<p>Achievement Points: {char.achievement_points}</p>
									<p>Honorable Kills: {char.honorable_kills}</p>
								</Col>
								<Row className="justify-content-center">
									<Col xs={12} md={8}>
										<a
											/* class="btn btn-primary w-100 d-block" */ className={
												char.faction === "alliance"
													? "btn btn-primary text-warning border-warning w-100 d-block rounded-0"
													: "btn btn-danger text-dark border-dark w-100 d-block rounded-0"
											}
											href={char.profile_url}
											role="button"
										>
											Raider.IO
										</a>
									</Col>
								</Row>
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
