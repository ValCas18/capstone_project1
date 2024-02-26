import React from "react";
import InputChar from "./InputChar";
import SelectedCharacter from "./SelectedCharacter";
import { useSelector } from "react-redux";

const Home = () => {
	const region = useSelector((state) => state.input.region);
	const server = useSelector((state) => state.input.server);
	const characterName = useSelector((state) => state.input.characterName);
	return (
		<div
			style={{
				backgroundImage: `url('https://i.imgur.com/83JAb6U.jpeg')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "100vh",
			}}
		>
			<InputChar />
			{region && server && characterName ? <SelectedCharacter /> : ""}
		</div>
	);
};

export default Home;
