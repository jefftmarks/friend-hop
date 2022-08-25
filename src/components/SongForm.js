import React, { useState } from "react";

const intializedSongForm = {
	title: "",
	artist: "",
	url: "",
}

function SongForm({ user, onAddSong }) {
	const [songForm, setSongForm] = useState(intializedSongForm)
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
			.then(updatedUser => {
				onAddSong(updatedUser);
				setSongForm(intializedSongForm);
			})
			.catch(e => console.error(e))
	}

	return (

	// <div id="addmusicform" className="modal">
	// 	<div className="modal-background"></div>
	// 		<div className="modal-content">

			
		

		<form onSubmit={handleSubmit}>
		<div className="columns">
			<div className="column is-half">
			{/* <div className="column"></div> */}
			<span
				className="tag is-medium is-light"
	
			>
				I'm adding ...
			</span>
			<div className="column"></div>
			
			
			
			<div className="field">
				<div className="control">
					<input
						className="input is-normal"
						type="text"
						placeholder="song title: doritos &amp; fritos"
						name="title"
						value={songForm.title}
						onChange={handleChange}
						required
					/>
				</div>
			</div>
			
			<div className="field">
				<div className="control">
					<input
						className="input is-normal"
						type="text"
						placeholder='artist: 100 gecs'
						name="artist"
						value={songForm.artist}
						onChange={handleChange}
						required
					/>
				</div>
			</div>
			

			
			
			<div className="field">
				<div className="control">
					<input
						className="input is-normal"
						type="text"
						placeholder="enter soundcloud link "
						name="url"
						value={songForm.url}
						onChange={handleChange}
						required
					/>
				</div>
			</div>
			
			
{/* 
			<div className="column"></div> */}
			<button
				type="submit"
				className="button is-white is-small"
			>
				click to add song!
			</button>
			
			</div>
			</div>
		</form>
		// </div>
	// </div>
	)
}

export default SongForm;

