import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const TopBar = () => {
	const userData = useSelector((state) => state.userData);

	return (
		<Navbar expand="sm" style={{ backgroundColor: "#262321" }} className="p-3 sticky-top">
			<Container>
				<Link to="/" className="text-light">
					Awesome WoW Character Finder
				</Link>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<div className="d-flex gap-3 align-items-center">
						{userData.userName ? (
							<div className="d-flex align-items-center gap-2">
								<span className="text-light">For Azeroth, {userData.userName.toUpperCase()}!</span>{" "}
								<Link to={`/users/${userData.id}`}>
									<Button className="bg-transparent border-info">Profile</Button>
								</Link>
								<Button className="bg-transparent border-light">Logout</Button>
							</div>
						) : (
							<>
								<Link to="/registration">
									<Button className="text-warning border border-dark">Sign Up</Button>
								</Link>
								<Link to="/login">
									<Button className="bg-danger text-dark border border-dark">Login</Button>
								</Link>
							</>
						)}
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default TopBar;
