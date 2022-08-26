import React from "react";
import { act } from "react-dom/test-utils";
import SongCard from "./SongCard";
import SongForm from "./SongForm";

function SongContainer({ user, activeUser, isActiveUser, setActiveUser, onUpdateSongs }) {
	const { songs } = user;

	// if songs present, map song cards
	const renderedSongCards = songs ? songs.map(song => (
		<SongCard
			key={song.url}
			song={song}
			user={user}
			onDeleteSong={onUpdateSongs}
			activeUser={activeUser}
			isActiveUser={isActiveUser}
			setActiveUser={setActiveUser}
		/>
	)) : null;

	return (
		<div>
			{renderedSongCards}
			{isActiveUser ? <SongForm user={user} onAddSong={onUpdateSongs} /> : null}
		</div>
	)
}

export default SongContainer;

