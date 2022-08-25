import React from "react";

function UserHeader({ user, activeUser, isActiveUser, setActiveUser, isYourFriend }) {

	const { name, username, cardImage, songs } = user;

	// add new friend to active user's array of friends and reset activeuser, which will rerender "besties" dropdown
	function handleAddFriend() {

		if (activeUser.friends.length === 5) {
			alert(`You can only have five besties! Remove a different bestie before adding ${name}`)

		} else {

			const updatedFriends = [...activeUser.friends, {
				name: name,
				username: username,
				cardImage: cardImage
			}]
	
			fetch(`http://localhost:4000/users/${activeUser.id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					friends: updatedFriends
				})
			})
				.then(res => res.json())
				.then(updatedUser => setActiveUser(updatedUser))
				.catch(e => console.error(e));
		}
	}


	// same as above except filter out friend and run same patch
	function handleDeleteFriend() {
		const updatedFriends = activeUser.friends.filter(friend => {
			return friend.username !== username;
		})

		fetch(`http://localhost:4000/users/${activeUser.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				friends: updatedFriends
			})
		})
			.then(res => res.json())
			.then(updatedUser => setActiveUser(updatedUser))
			.catcn(e => console.error(e));
	}

	// Conditional statement to render prompt to add songs if user is logged in and doesn't have any songs
	let addSongInstructions;

	if (songs) {
		addSongInstructions = songs.length===0 ? (
			<div className="box" style={{ width: "49%", paddingLeft: "15px", fontSize: "20px"}}>
				why don't you have any songs? <br />use the form below to add your favs
			</div>
		) : null
	}

	return (
		<>
			
			<div className="box has-text-centered" style={{ width: 300, fontSize: "25px"}}>
				<span className="is-centered">{name}'s Page</span>

				{/* add a star to reflect whether frieds or not */}
				{isYourFriend ?<span style={{color: "gray", fontSize: "17px", marginLeft: "7px"}}>&#9733;</span> : null}

				{/* if not your own page, show friend status and render depending on whether you're friends or not */}

				{!isActiveUser ? (
					<div
						className="tag"
						style={{color:  "red", cursor: "pointer"}}
						onClick={isYourFriend ? handleDeleteFriend : handleAddFriend}
					>
						{isYourFriend ? `remove ${name} from your besties` : `add ${name} to your besties`}
					</div>
				) : null}

			</div>
			{/* add song instructions will only show on your own page */}
			{isActiveUser ? addSongInstructions : null}
		</>
	)
}

export default UserHeader;