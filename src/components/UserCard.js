import React from "react";
import { useHistory } from "react-router-dom";

function UserCard({ user, setActiveUser }) {
	const { name, username, cardImage } = user;

	const history = useHistory();

	function onCardClick() {
		setActiveUser(user);
		history.push(`/user/${username}`)
	}

	return (
		<div className="box" style={{paddingBottom: "2.22rem", cursor: "pointer"}} onClick={onCardClick}>
			<div className="media-left" style={{float: "left"}}>
				<figure className="image is-64x64">
					<img src={cardImage} alt="avatar" />
				</figure>
			</div>
			<div>
				<h1>{name}</h1>
				<h1>{username}</h1>
			</div>
		</div>
	)
}

export default UserCard;