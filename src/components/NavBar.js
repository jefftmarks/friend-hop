import React from "react";
import SearchBar from "./SearchBar";
import FriendDropdown from "./FriendDropdown";
import { Link } from "react-router-dom";

function NavBar({ activeUser, setActiveUser }) {

	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<Link className="navbar-item" to={activeUser ? `/user/${activeUser.username}` : "/"} >
					<img src="https://www.linkpicture.com/q/Screen-Shot-2022-08-22-at-10.58.54-AM_1.png" alt="logo" width="112" height="28" />
				</Link>

				<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<Link className="navbar-item" to={activeUser ? `/user/${activeUser.username}` : "/"}>
						home
					</Link>

					<Link className="navbar-item" to="/about">
						about
					</Link>

					{activeUser ? (
						<Link className="navbar-item" to="/" onClick={() => setActiveUser(false)}>
						logout
					</Link>
					) : null}
				</div>

				{activeUser ? (
					<div className="navbar-end">
						<div className="navbar-item">
							<SearchBar />
						</div>
						<div className="navbar-item">
							<FriendDropdown />
						</div>
					</div>
				) : null}

			</div>
		</nav>
	)
}

export default NavBar;