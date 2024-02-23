import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/actions";

const Login = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState({});
	const [valid, setValid] = useState(true);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		let isValid = true;
		let validationError = {};

		axios
			.get("http://localhost:8000/users")
			.then((result) => {
				result.data.map((user) => {
					if (user.userName === userName) {
						if (user.password === password) {
							alert("Login Successful!");
							navigate("/");
							dispatch(getUser({ userId: user.id, userName: user.userName, password: user.password }));
						} else {
							isValid = false;
							validationError.password = "Wrong Password.";
						}
					}
				});
				setError(validationError);
				setValid(isValid);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="signup-form">
						<form className="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
							<h4 className="mb-3 text-secondary">Enter Your Credentials</h4>
							{valid ? (
								<></>
							) : (
								<span className="text-danger">
									{error.email} <br></br>
									{error.password} <br></br>
									{error.confPassword} <br></br>
								</span>
							)}
							<div className="row">
								{/* USER NAME */}
								<div className="mb-2">
									<label>
										User Name<span className="text-danger">*</span>
									</label>
									<input
										type="text"
										name="fname"
										className="form-control"
										placeholder="Enter User Name"
										onChange={(event) => setUserName(event.target.value)}
										required
									/>
								</div>
								{/* PSW */}
								<div className="mb-2">
									<label>
										Password<span className="text-danger">*</span>
									</label>
									<input
										type="password"
										name="password"
										className="form-control"
										placeholder="Enter Password"
										onChange={(event) => setPassword(event.target.value)}
										required
									/>
								</div>
								<div>
									<button className="btn btn-success float-center mb-3">Login</button>
								</div>
							</div>
							<p className="text-center text-secondary">
								If you do not have an account, please <Link to="/registration">Sign Up</Link>.
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
