import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/actions";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:8000/login", { email, password })
			.then((result) => {
				console.log(result);
				alert("Login Successful!");
				navigate("/");
				dispatch(getUser(result.data.user));
				localStorage.setItem("token", result.data);
				/* result.data.map((user) => {
					if (user.email === email) {
						if (user.password === password) {
							alert("Login Successful!");
							navigate("/");
							dispatch(getUser(user));
						} else {
							alert("Your user ID or password is incorrect.");
						}
					} else {
						alert("Your user ID or password is incorrect.");
					}
				}); */
			})
			.catch((err) => console.log(err));
	};

	return (
		<div
			className="px-5 d-flex justify-content-center align-items-center"
			style={{
				backgroundImage: `url('https://i.imgur.com/yaBmveW.jpeg')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "100vh",
			}}
		>
			<div className="row">
				<div className="col-xs-12">
					<div className="signup-form">
						<form
							onSubmit={handleSubmit}
							className="p-4 "
							style={{
								backgroundColor: "rgba(255, 255, 255, 0.3)",
							}}
						>
							<h4 className="mb-3 ">Enter Your Credentials</h4>
							<div className="row">
								<div className="mb-2">
									<label>
										Email<span className="text-danger">*</span>
									</label>
									<input
										type="text"
										name="fname"
										className="form-control"
										placeholder="Enter Email"
										onChange={(event) => setEmail(event.target.value)}
										required
									/>
								</div>
								<div className="mb-4">
									<label className="">
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
							<p className="text-center text-dark">
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
