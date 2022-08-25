import React from "react";
import SongCard from "./SongCard";
import SongForm from "./SongForm";

function SongContainer({ user, isActiveUser, onChangeSongs }) {
	const { songs } = user;

	console.log(songs)

	// if songs present, map song cards
	const renderedSongCards = songs ? songs.map(song => (
		<SongCard key={song.title} url={song.url} user={user} onDeleteSong={onChangeSongs} isActiveUser={isActiveUser} />
	)) : null;

	return (
		<div>
			{renderedSongCards}
			{isActiveUser ? <SongForm user={user} onAddSong={onChangeSongs} /> : null}
		</div>
	)
}

export default SongContainer;

