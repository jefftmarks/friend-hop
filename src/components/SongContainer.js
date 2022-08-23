import React from "react";
import SongCard from "./SongCard";
import SongForm from "./SongForm";

function SongContainer({ user, userIsActive, onAddSong }) {
	const { songs } = user;

	// if songs present, map song cards
	const renderedSongCards = songs ? songs.map(song => (
		<SongCard key={song.title} url={song.url} />
	)) : null;

	return (
		<div>
			{renderedSongCards}
			{userIsActive ? <SongForm user={user} onAddSong={onAddSong} /> : null}
		</div>
	)
}

export default SongContainer;

