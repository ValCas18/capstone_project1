import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const InputChar = () => {
	return (
		<>
			<Form.Select aria-label="Default select example" required>
				<option selected="selected" disabled="disabled" required>
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
			<Button variant="primary">Search</Button>
			<Button variant="danger">Reset</Button>{" "}
		</>
	);
};

export default InputChar;
