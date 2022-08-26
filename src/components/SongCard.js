import React from "react";
import ReactSoundCloud from "react-soundcloud-embedded";

function SongCard({ url, user, onDeleteSong, isActiveUser }) {
	const { id } = user

	function onDeleteClick() {
		const updatedSongs = user.songs.filter(song => {
			return (song.url !== song.url)
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

	return (
		<div className="box">
			<ReactSoundCloud
				url={url}
				visual={false}
				hideRelated={true}
			/>
			{isActiveUser ? (
				<span
					className="tag is-dark"
					style={{float: "right", marginBottom: "", cursor: "pointer"}}
					onClick={onDeleteClick}
				>
					remove
				</span>
			) : null}
		</div>
	)
}

export default SongCard;