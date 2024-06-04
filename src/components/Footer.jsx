import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
	return (
		<div className="bg-dark text-light p-3">
			<Container>
				<Row>
					<Col className="border border-light kode-mono-font p-1">
						<h4>My Contacts</h4>
						<span className="fs-5">LinkedIn: </span>
						<span>https://www.linkedin.com/in/valerio-casadei-frontenddeveloper/</span> <br></br>
						<span className="fs-5">GitHub: </span>
						<span>https://github.com/ValCas18</span>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
