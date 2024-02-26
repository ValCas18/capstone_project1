import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg1 from "../assets/img/bg1.avif";

export const Registration = () => {
	const [formData, setFormData] = useState({
		userName: "",
		email: "",
		password: "",
		confPassword: "",
	});
	const [error, setError] = useState({});
	const [valid, setValid] = useState(true);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		let isValid = true;
		let validationError = {};

		if (!/\S+@\S+\.\S+/.test(formData.email)) {
			isValid = false;
			validationError.email = "Email is not valid.";
		}
		if (formData.password.length < 8) {
			isValid = false;
			validationError.password = "Password must be at least 8 characters long.";
		}
		if (formData.password !== formData.confPassword) {
			isValid = false;
			validationError.confPassword = "Passwords don't match, please try again.";
		}

		setError(validationError);
		setValid(isValid);

		if (Object.keys(validationError).length === 0) {
			fetch("http://localhost:8000/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...formData, fav: [] }),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					return response.json();
				})
				.then((data) => {
					alert("Registration successful!");
					navigate("/login");
				})
				.catch((error) => {
					console.error("There was a problem with your fetch operation:", error);
				});
		}
	};

	return (
		<div
			className="pb-5 d-flex justify-content-center align-items-center"
			style={{
				backgroundImage: `url('https://i.imgur.com/jhoP8OT.jpeg')`,
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
							className="mt-5 p-4"
							style={{
								backgroundColor: "rgba(255, 255, 255, 0.3)",
							}}
						>
							<h4 className="mb-3 text-dark">Create Your Account</h4>
							{valid ? (
								<></>
							) : (
								<span className="text-danger">
									{error.email} <br></br>
									{error.password} <br></br>
									{error.confPassword} <br></br>
								</span>
							)}
							<div>
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
										onChange={(event) => setFormData({ ...formData, userName: event.target.value })}
										required
									/>
								</div>
								{/* EMAIL */}
								<div className="mb-2">
									<label>
										Email<span className="text-danger">*</span>
									</label>
									<input
										type="text"
										name="Lname"
										className="form-control"
										placeholder="Enter Email"
										onChange={(event) => setFormData({ ...formData, email: event.target.value })}
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
										onChange={(event) => setFormData({ ...formData, password: event.target.value })}
										required
									/>
								</div>
								{/* CONFIRM PSW*/}
								<div className="mb-4">
									<label>
										Confirm Password<span className="text-danger">*</span>
									</label>
									<input
										type="password"
										name="confirmpassword"
										className="form-control"
										placeholder="Confirm Password"
										onChange={(event) => setFormData({ ...formData, confPassword: event.target.value })}
										required
									/>
								</div>
								<div>
									<button className="btn btn-primary float-center mb-3">Sign Up Now</button>
								</div>
							</div>
							<p className="text-center text-secondary">
								If you already have account, please <Link to="/login">Login Now</Link>.
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registration;
