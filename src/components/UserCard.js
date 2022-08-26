import React from "react";
import { useHistory } from "react-router-dom";

function UserCard({ user, query, handleOnCardClick }) {
	const { name, username, cardImage, status, songs } = user;

	const history = useHistory();

	// When you click on a user card in the search result page, reset the input field in the search bar and programmatically navigate to that user's page

	function onCardClick() {
		handleOnCardClick("");
		history.push(`/user/${username}`)
	}

	// Filter through the user's favorite songs and return an array of the songs that match the search query to display as additional information in the user card

	const matches = songs.filter(song => {
		return song.artist.toLowerCase().includes(query.toLowerCase()) || song.title.toLowerCase().includes(query.toLowerCase());
	})
	
	return (
			<div className="box" style={{paddingTop:"20px", paddingBottom: "60px", cursor: "pointer", width: "auto", margin: "20px", marginRight: "40%" }} onClick={onCardClick}>
				<div className="media-left" style={{float: "left"}}>
					<figure className="image is-96x96">
						<img src={cardImage} alt="avatar" />
				</figure>
			</div>
			<div>
				<h1 style={{fontSize: 20}}>{name}</h1>
				<p style={{fontSize: 16}}>status: {status}</p>
				{/* map through the array of matching songs and list in the user card */}
				<ul>{matches.map(song => (
					<li style={{fontSize: 14}} key={song.title}>{song.title} by {song.artist}</li>
				))}</ul>
			</div>
		</div>
	)
}

export default UserCard;