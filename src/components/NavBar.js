import React from "react";
import SearchBar from "./SearchBar";
import FriendDropdown from "./FriendDropdown";


function NavBar() {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="https://bulma.io">
					<img src="https://www.linkpicture.com/q/Screen-Shot-2022-08-22-at-10.58.54-AM_1.png" alt="logo" width="112" height="28" />
				</a>

				<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					<a className="navbar-item">
						home
					</a>

					<a className="navbar-item">
						about
					</a>
				</div>

				<div className="navbar-end">
					<div className="navbar-item">
						<SearchBar />
					</div>
					<div className="navbar-item">
						<FriendDropdown />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar;