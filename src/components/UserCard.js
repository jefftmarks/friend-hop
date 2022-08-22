import React from "react";
import { useHistory } from "react-router-dom";

function UserCard({ user, query }) {
	const { name, username, cardImage, status, songs } = user;

	const history = useHistory();

	function onCardClick() {
		history.push(`/user/${username}`)
	}

	const matches = songs.filter(song => {
		return song.artist.toLowerCase().includes(query.toLowerCase()) || song.title.toLowerCase().includes(query.toLowerCase());
	})

	return (
		<div className="box" style={{paddingBottom: "2.22rem", cursor: "pointer"}} onClick={onCardClick}>
			<div className="media-left" style={{float: "left"}}>
				<figure className="image is-64x64">
					<img src={cardImage} alt="avatar" />
				</figure>
			</div>
			<div>
				<h1>{name}</h1>
				<p>{name}'s status: {status}</p>
				<ul>{matches.map(song => (
					<li key={song.title}>{song.title} by {song.artist}</li>
				))}</ul>
			</div>
		</div>
	)
}

export default UserCard;