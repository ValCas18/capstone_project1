import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TopBar } from "./components/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";

function App() {
	const userData = useSelector((state) => state.userData);
	return (
		<div className="App">
			<div className="backgroundDiv">
				<BrowserRouter>
					<TopBar />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/registration" element={<Registration />}></Route>
						<Route path="/login" element={<Login />}></Route>
						<Route path={`/users/${userData.userId}`} element={<Profile />}></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
