import React from "react";
import Logo from "../images/logo.svg";
import { socialLink } from "../Data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img src={Logo} className="nav-logo" alt="backroads" />
					<button type="button" className="nav-toggle" id="nav-toggle">
						<i className="fas fa-bars"></i>
					</button>
				</div>
				<PageLinks parentClass="nav-links" itemClass="nav-link" />
				<SocialLinks parentClass="nav-icons" itemClass="nav-icon" />
			</div>
		</nav>
	);
};

export default Navbar;
