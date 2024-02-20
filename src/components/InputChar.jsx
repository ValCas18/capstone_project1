import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { /* DELETE_CARD */ setSearchCriteria } from "../redux/actions";

const InputChar = () => {
	const [region, setRegion] = useState("");
	const [server, setServer] = useState("");
	const [characterName, setCharacterName] = useState("");
	const dispatch = useDispatch();

	const handleSearch = (event) => {
		event.preventDefault();
		dispatch(setSearchCriteria(region, server, characterName));
		console.log("User input:", { region, server, characterName });
	};

	return (
		<Form onSubmit={handleSearch}>
			<Form.Select defaultValue={"0"} onChange={(e) => setRegion(e.target.value)} required>
				<option value="0" disabled>
					Select Region
				</option>
				<option value="US">US</option>
				<option value="EU">EU</option>
				<option value="TW">TW</option>
				<option value="KR">KR</option>
				<option value="CN">CN</option>
			</Form.Select>
			<Form.Control type="text" placeholder="Select Server" onChange={(e) => setServer(e.target.value)} required />
			<Form.Control
				type="text"
				placeholder="Select Character Name"
				onChange={(e) => setCharacterName(e.target.value)}
				required
			/>
			<Button variant="primary" type="submit">
				Search
			</Button>
			<Button variant="danger" type="reset" /* onClick={handleDeleteCard} */>
				Reset
			</Button>
		</Form>
	);
};

export default InputChar;
