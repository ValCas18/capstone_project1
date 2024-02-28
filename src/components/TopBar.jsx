import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const TopBar = () => {
	const userData = useSelector((state) => state.userData);

	return (
		<Navbar expand="sm" className="p-3 sticky-top bg-dark">
			<Container>
				<Link to="/" className="text-light fs-5 kode-mono-font text-decoration-none border border-light p-2">
					WoW Armory 2.0
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
									<Button className="text-warning border border-warning rounded-0">Sign Up</Button>
								</Link>
								<Link to="/login">
									<Button className="bg-danger text-dark border border-dark rounded-0">Login</Button>
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
