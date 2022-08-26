import React from "react";
import ReactSoundCloud from "react-soundcloud-embedded";

function SongCard({ song, user, onDeleteSong, activeUser, isActiveUser, setActiveUser }) {
	const { id, songs } = user;
	const { url } = song;

	// remove song for your page
	function onDeleteClick() {

		const updatedSongs = songs.filter(song => {
			return song.url !== url;
		})

		fetch(`http://localhost:4000/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...user,
				songs: updatedSongs,
			})
		})
			.then(res => res.json())
			.then(updatedUser => onDeleteSong(updatedUser))
	}


	// Ddd song from someone else's page to yours
	function onAddClick () {

		// Function to make sure song isn't already in your playlist
		function checkIfDuplicateSong() {
			let flag = false;
			activeUser.songs.forEach(song => {
				if (song.url === url) {
					flag = true;
				}
			})
			return(flag);
		}

		if(checkIfDuplicateSong()) {
			alert("This song is already in your playlist!")
		} else {
			fetch(`http://localhost:4000/users/${activeUser.id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					songs: [...activeUser.songs, song]
				}),
			})
				.then(res => res.json())
				.then(updatedUser => {
					alert(`${song.title} by ${song.artist} has been added to your page!`);
					setActiveUser(updatedUser)
				})
				.catch(e => console.error(e))
		}
	}

	return (
		<div className="box">
			<ReactSoundCloud
				url={url}
				visual={false}
				hideRelated={true}
			/>
			{/* If on your own page, show remove button, otherwise show a button to add song to your own page */}
			{isActiveUser ? (
				<span
					className="tag is-dark"
					style={{float: "right", marginBottom: "", cursor: "pointer"}}
					onClick={onDeleteClick}
				>
					remove
				</span>
			) : (
				<span
					className="tag is-dark"
					style={{float: "right", marginBottom: "", cursor: "pointer"}}
					onClick={onAddClick}
				>
					add song to your page
				</span>
			)}
		</div>
	)
}

export default SongCard;