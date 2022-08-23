import React from "react";
import { useHistory } from "react-router-dom";

function UserCard({ user, query, handleOnCardClick }) {
	const { name, username, cardImage, status, songs } = user;

	const history = useHistory();

	// when you click on a user card in the search result page, reset the input field in the search bar and programmatically navigate to that user's page
	function onCardClick() {
		handleOnCardClick("");
		history.push(`/user/${username}`)
	}

	// filter through the user's favorite songs and return an array of the songs that match the search query
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
				{/* map through the arraoy of matching songs and list in the user card */}
				<ul>{matches.map(song => (
					<li key={song.title}>{song.title} by {song.artist}</li>
				))}</ul>
			</div>
		</div>
	)
}

export default UserCard;