import React from "react";
import SearchBar from "./SearchBar";
import FriendDropdown from "./FriendDropdown";
import { Link } from "react-router-dom";

function NavBar({ activeUser, onClickLogout, onChangeSearchInput, searchInput }) {

	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand" height="100px">
				{/* If user is logged in, link directs to user's profile, otherwise login page*/}
				<Link className="navbar-item" to={activeUser ? `/user/${activeUser.username}` : "/"} >
					<img src="https://www.linkpicture.com/q/logo1_7.png" alt="logo" width="112" height="28" />
				</Link>

				<a role="button" className="navbar-burger is-active" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					{/* If user is logged in, link says "profile" and directs to user's profile. Otherwise, link says "home" and directs to login page*/}
					<Link className="navbar-item" to={activeUser ? `/user/${activeUser.username}` : "/"}>
						{activeUser ? "profile" : "home"}
					</Link>

					<Link className="navbar-item" to="/about">
						about
					</Link>

					{/* If activeuser, a logout button appears. On click, will set active user to false */}
					{activeUser ? (
						<Link className="navbar-item" to="/" onClick={() => onClickLogout(false)}>
						logout
					</Link>
					) : null}
				</div>

				{/* If activeuser, show Searchbar and FriendDropdown. This ternary could be merged with above, but leaving separate for now */}
				{activeUser ? (
					<div className="navbar-end">
						<div className="navbar-item">
							<SearchBar onChangeSearchInput={onChangeSearchInput} searchInput={searchInput} />
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