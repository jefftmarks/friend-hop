import React from "react";
import SearchBar from "./SearchBar";
import FriendDropdown from "./FriendDropdown";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function NavBar({ activeUser, onClickLogout, setSearchInput, searchInput }) {

	return (
		<nav
			className="navbar"
			style={{justifyContent: "center"}}
			role="navigation"
			aria-label="main navigation">
			<div className="navbar-brand" style={{height: "70px"}}>
				{/* If user is logged in, link directs to user's profile, otherwise login page*/}
				<Link className="navbar-item" to={activeUser ? `/user/${activeUser.username}` : "/"} >
					<img src={logo} alt="logo"  />
				</Link>

				<a role="button" className="navbar-burger is-active" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="false"></span>
					<span aria-hidden="false"></span>
					<span aria-hidden="false"></span>
				</a>
			</div>

			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">
					{/* If user is logged in, link says "profile" and directs to user's profile. Otherwise, link says "home" and directs to login page*/}
					<Link
						className="navbar-item"
						to={activeUser ? `/user/${activeUser.username}` : "/"}
						onClick={() => setSearchInput("")}
					>
						{activeUser ? "profile" : "home"}
					</Link>

					<Link
						className="navbar-item"
						to="/about"
						onClick={() => setSearchInput("")}
					>
						about
					</Link>

					{/* If activeUsername, a logout button appears. On click, will set active user to false */}
					{activeUser ? (
						<Link className="navbar-item" to="/" onClick={() => {
							localStorage.clear();
							setSearchInput("");
							onClickLogout(false);
						}}
						>	
						logout
					</Link>
					) : null}
				</div>

				{/* If activeUsername, show Searchbar and FriendDropdown. This ternary could be merged with above, but leaving separate for now */}
				{activeUser ? (
					<div className="navbar-end">
						<div className="navbar-item">
							<SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
						</div>
						<div className="navbar-item">
							<FriendDropdown user={activeUser} />
						</div>
					</div>
				) : null}

			</div>
		</nav>
	)
}

export default NavBar;