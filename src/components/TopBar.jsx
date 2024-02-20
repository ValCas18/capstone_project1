import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const TopBar = () => {
	const userData = useSelector((state) => state.userData);
	const userName = userData.userName.toString();

	return (
		<Navbar expand="sm" style={{ backgroundColor: "#262321" }}>
			<Container>
				<Link to="/" className="text-light">
					Awesome WoW Character Finder
				</Link>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<div className="d-flex gap-3 align-items-center">
						{userName ? (
							<div className="d-flex align-items-center">
								<span className="text-light me-2">For Azeroth, {userName.toUpperCase()}!</span>{" "}
								<Button className="bg-transparent border-info">Logout</Button>
							</div>
						) : (
							<>
								<Link to="/registration">
									<Button className="text-warning">Sign Up</Button>
								</Link>
								<Link to="/login">
									<Button className="bg-danger text-dark">Login</Button>
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
