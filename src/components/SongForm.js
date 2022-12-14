import React, { useState } from "react";

const intializedSongForm = {
	title: "",
	artist: "",
	url: "",
}

function SongForm({ user, onAddSong }) {
	const [songForm, setSongForm] = useState(intializedSongForm)
	const { id, songs } = user;	

	// Update song form data
	function handleChange(event) {
		const { name, value } = event.target;
		setSongForm(songForm => ({...songForm, [name]: value}))
	}
	
	
	// submit new song to list of songs
	function handleSubmit (event) {
		event.preventDefault();

		// Function to make sure song isn't already in your playlist
		function checkIfDuplicateSong() {
			let flag = false;
			songs.forEach(song => {
				if (songForm.url === song.url) {
					flag = true;
				}
			})
			return(flag);
		}
	
		if(checkIfDuplicateSong()) {
			alert("This song is already in your playlist!")
			setSongForm(intializedSongForm);
		} else {
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
	}

	return (

	// <div id="addmusicform" className="modal">
	// 	<div className="modal-background"></div>
	// 		<div className="modal-content">

			
		

		<form onSubmit={handleSubmit}>
		<div className="columns">
			<div className="column is-half"
			>
			{/* <div className="column"></div> */}
			{/* <span
				className="tag is-medium is-light"
				
			>
				I'm adding ...
			</span>
			<div className="column"
			style={{padding: "0.25rem", marginBottom: "0rem",}}
			></div> */}
			
			
			
			<div className="field">
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder="artist: 100 gecs"
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
						placeholder='song title: doritos &amp; fritos'
						name="title"
						value={songForm.title}
						onChange={handleChange}
						required
					/>
				</div>
			</div>
			

			
	
			<div className="field">
				<div className="control" style={{marginRight: "85px"}}>
					<input
						
						className="input"
						type="text"
						placeholder="enter soundcloud link "
						name="url"
						value={songForm.url}
						onChange={handleChange}
						required
					/>
				</div>


				
			</div>
			
			<button 
				type="submit"
				className="button is-info "
				style={{marginTop: "-3.25rem", marginBottom: "5rem", fontSize:14, padding:"-30%", height:"40px", marginLeft: "88%"}}
			>
				submit
			</button>
			
			</div>
			</div>
		</form>
		// </div>
	// </div>
	)
}

export default SongForm;

