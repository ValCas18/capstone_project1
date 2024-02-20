import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InputChar from "./components/InputChar";
import SelectedCharacter from "./components/SelectedCharacter";
import { useSelector } from "react-redux";
import { TopBar } from "./components/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
	const region = useSelector((state) => state.input.region);
	const server = useSelector((state) => state.input.server);
	const characterName = useSelector((state) => state.input.characterName);

	return (
		<div className="App">
			<div className="backgroundDiv">
				<BrowserRouter>
					<TopBar />
					<Routes>
						<Route path="/" element={<InputChar />}></Route>
						<Route path="/registration" element={<Registration />}></Route>
						<Route path="/login" element={<Login />}></Route>
						<Route path="/profile" element={<Profile />}></Route>
					</Routes>
					{region && server && characterName ? <SelectedCharacter /> : ""}
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
