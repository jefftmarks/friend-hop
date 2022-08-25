import React from "react";

function UserHeader({ user, activeUser, isActiveUser, setActiveUser, isYourFriend }) {

	const { name, username, cardImage } = user;

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


	return (
		<div className="box has-text-centered" style={{ width: 300}}>
			<h1 className="is-centered">{name}'s Page</h1>

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
	)
}

export default UserHeader;