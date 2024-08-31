import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
	const [currentState, setCurrenState] = useState("Sign Up");
	return (
		<div className="login-popup">
			<form className="login-popup-container">
				<div className="login-popup-title">
					<h2>{currentState}</h2>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<img
						onClick={() => setShowLogin(false)}
						src={assets.cross_icon}
						alt=""
					/>
				</div>
				<div className="login-popup-inputs">
					{currentState === "Sign Up" ? (
						<>
							<input type="text" placeholder="Your name" required />
						</>
					) : (
						<></>
					)}
					<input type="email" placeholder="Your email" required />
					<input type="password" placeholder="Your password" required />
				</div>
				<button type="submit">
					{currentState === "Sign Up" ? "Create account" : "Login"}
				</button>
				<div className="login-popup-condition">
					<input type="checkbox" required />
					<p>By continuing, I agree to the terms of use & privacy policy.</p>
				</div>
				{currentState === "Login" ? (
					<p>
						Create a new account?
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<span
							className="login-popup-link"
							onClick={() => setCurrenState("Sign Up")}
						>
							Click here
						</span>
					</p>
				) : (
					<p>
						Already have an account?
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<span
							className="login-popup-link"
							onClick={() => setCurrenState("Login")}
						>
							Login here
						</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default LoginPopup;
