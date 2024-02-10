import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const InputChar = () => {
	return (
		<>
			<Form.Select defaultValue={"0"} required>
				<option value="0" disabled>
					Select Region
				</option>
				<option value="1">US</option>
				<option value="2">EU</option>
				<option value="3">TW</option>
				<option value="4">KR</option>
				<option value="5">CN</option>
			</Form.Select>
			<Form.Control type="text" placeholder="Select Server" required />
			<Form.Control type="text" placeholder="Select Character Name" required />
			<Button variant="primary" type="submit">
				Search
			</Button>
			<Button variant="danger" type="button">
				Reset
			</Button>{" "}
		</>
	);
};

export default InputChar;
