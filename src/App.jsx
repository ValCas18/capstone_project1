import "./App.css";
import InputChar from "./components/InputChar";
import SelectedCharacter from "./components/SelectedCharacter";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const region = useSelector((state) => state.input.region);
	const server = useSelector((state) => state.input.server);
	const characterName = useSelector((state) => state.input.characterName);
	return (
		<div className="App">
			<InputChar />
			{region && server && characterName ? <SelectedCharacter /> : ""}
		</div>
	);
}

export default App;
