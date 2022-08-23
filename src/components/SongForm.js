import React, { useState } from "react";

function SongForm({ user, onAddSong }) {
	const [songForm, setSongForm] = useState({
		title: "",
		artist: "",
		url: "",
	})
	const { id, songs } = user;

	// update form data
	function handleChange(event) {
		const { name, value } = event.target;
		setSongForm(songForm => ({...songForm, [name]: value}))
	}

	// submit new song to list of songs
	function handleSubmit (event) {
		event.preventDefault();
		fetch(`http://localhost:4000/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				songs: [...songs, songForm]
			}),
		})
			.then(res => res.json())
			.then(updatedUser => onAddSong(updatedUser) )
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="tag is-small">song title:</div>
			<div className="field has-addons">
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder="doritos &amp; fritos"
						name="title"
						value={songForm.title}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="tag is-small">artist:</div>
			<div className="field has-addons">
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder='100 gecs'
						name="artist"
						value={songForm.artist}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="tag is-small">link:</div>
			<div className="field has-addons">
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder="sad soundcloud link"
						name="url"
						value={songForm.url}
						onChange={handleChange}
					/>
				</div>
			</div>

			<button type="submti" className="button is-white">
				add song
			</button>
		</form>
	)
}

export default SongForm;

