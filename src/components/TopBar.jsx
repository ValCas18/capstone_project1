import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const TopBar = () => {
	return (
		<Navbar expand="sm" style={{ backgroundColor: "#262321" }}>
			<Container>
				<Link to="/" className="text-light">
					Awesome WoW Character Searcher
				</Link>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end gap-3">
					<Link to="/registration">
						<Button className="text-warning">Sign Up</Button>
					</Link>
					<Link to="/login">
						<Button className="bg-danger text-dark">Login</Button>
					</Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default TopBar;
