import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setSearchCriteria } from "../redux/actions";

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
		<div className="d-flex justify-content-center align-items-center col" style={{ minHeight: "50vh" }}>
			<Form onSubmit={handleSearch} className="mb-3" style={{ width: "50%" }}>
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
				<div className="d-flex justify-content-center gap-3 mt-3">
					<Button className="text-warning border border-dark" type="submit">
						Search
					</Button>
					<Button className="bg-danger text-dark border border-dark" type="reset">
						Reset
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default InputChar;
