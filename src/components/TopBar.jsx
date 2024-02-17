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
				<Navbar.Collapse className="justify-content-end">
					<Link to="/registration" className="">
						Sign Up
					</Link>
					{/* <Button variant="success" className="me-3">
						Login
					</Button>
					<Button variant="light">Sign-Up</Button>{" "}
					<Navbar.Text className="text-light">
						Signed in as:{" "}
						<span href="#login" className="text-light">
							Mark Otto
						</span>
					</Navbar.Text> */}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default TopBar;
