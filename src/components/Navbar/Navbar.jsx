import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "./../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
	const [menu, setMenu] = useState("home");
	const { getTotalCartQuantity } = useContext(StoreContext);

	return (
		<div className="navbar">
			<Link to="/">
				<img src={assets.logo} alt="" className="navbar-logo" />
			</Link>

			<ul className="navbar-menu">
				<Link
					to="/"
					onClick={() => setMenu("home")}
					className={menu === "home" ? "active" : ""}
				>
					Home
				</Link>
				{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a
					href="#explore-menu"
					onClick={() => setMenu("menu")}
					className={menu === "menu" ? "active" : ""}
				>
					Menu
				</a>
				{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a
					href="#app-download"
					onClick={() => setMenu("mobile-app")}
					className={menu === "mobile-app" ? "active" : ""}
				>
					Mobile-App
				</a>
				{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a
					href="#footer"
					onClick={() => setMenu("contact-us")}
					className={menu === "contact-us" ? "active" : ""}
				>
					Contact Us
				</a>
			</ul>

			<div className="navbar-right">
				<img src={assets.search_icon} alt="" />
				<div className="navbar-search-icon">
					<Link to="/cart">
						<img src={assets.basket_icon} alt="" />
						<div className={"dot"}>{getTotalCartQuantity()}</div>
					</Link>
				</div>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className="navbar-button" onClick={() => setShowLogin(true)}>
					Sign In
				</button>
			</div>
		</div>
	);
};

export default Navbar;
