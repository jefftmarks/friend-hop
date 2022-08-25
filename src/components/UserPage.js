import React, { useEffect, useState } from "react";
import StatusDropdown from "./StatusDropdown";
import SongContainer from "./SongContainer";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";

function UserPage({ activeUser, setActiveUser }) {
	const [user, setUser] = useState({});
	const [isActiveUser, setIsActiveUser] = useState(false);
	const [isYourFriend, setIsYourFriend] = useState(false);

	const { name, username, pageImage, cardImage, status, friends } = user;

	const params = useParams();

	// modal try out demo thingy 
	// function handlePopUp(e) {
	// }

	// When params (i.e. username) changes, perform a fetch query looking for that username

	useEffect(() => {
		fetch(`http://localhost:4000/users?username=${params.username}`)
			.then(res => res.json())
			.then(data => {
				const user = data[0]; // set user to the first (and only) result
				setUser(user);
			})
			.catch(e => console.error(e));
	}, [params.username])

	// After user is set, update state of whether we're on our own page or someone else's and whether we're already friends with that other person

	useEffect(() => {

		// handleAvatar(setAvatar, user.status);

		function checkIfActiveUser() {
			if (user.username === activeUser.username) {
				setIsActiveUser(true);
			}
		}

		function checkFriendStatus() {
			if (user.username !== activeUser.username) {
				activeUser.friends.forEach(friend => {
					if (friend.username === user.username ) {
						setIsYourFriend(true);
					}
				})
			}
		}

		if (activeUser) {
			checkIfActiveUser();
			checkFriendStatus();
		}

	}, [user, activeUser])

	function handleAddFriend() {
		fetch(`http://localhost:4000/users/${activeUser.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				friends: [...activeUser.friends, {name: name, username: username, cardImage: cardImage}]
			})
		})
			.then(res => res.json())
			.then(updatedUser => setActiveUser(updatedUser))
	}

	if (!user) return <h1>Loading...</h1>


	return (
		<div style={{
			backgroundImage: `url(${pageImage})`,
			backgroundColor: "black",
			marginTop: "20px",
			width: "100%",
			height: "100vh",
			backgroundSize: "cover",
			backgroundPosition: "center",

			}}>
			<div className="columns">
					
  				<div className="column is-1">
						<div className="column"></div>
						<div className="column"></div>
						<div className="column"></div>
						<div className="column"></div>
						<div className="column"></div>
						<div className="column"></div>
						
						<div className="buttons is-centered" style={{padding: "20px"}}>
						
							<div className="column"></div>
							{/* <button className="js-modal-trigger" onClick={handlePopUp}>
  									Open JS example modal
							</button> */}
							<button className="tag is-normal is-dark" style={{marginLeft: "20px"}}>based mode</button>
							<div className="column is-2"></div>
							<button className="tag is-small is-dark" style={{marginLeft: "20px"}}>non-anime mode</button>
							<div className="column is-2"></div>
						
						</div>
							<div className="column"></div>
							<div className="column"></div>
							<div className="column"></div>
							<div className="column"></div>
							<div className="column"></div>
							<div className="column"></div>
							<div className="column"></div>
							<div className="column"></div>
							<div className="column"></div>
							<div className="column"></div>
					
					</div>
					<div className="column"> 
						<div className="column"></div>
						<div className="column"></div>
						<div className="column"></div>
						<div className="box has-text-centered" style={{ width: 300}}>
							<h1 className="is-centered">{name}'s Page</h1>
							{!isActiveUser ? (
								<div
									className="tag"
									style={{color: "red", cursor: "pointer"}}
									onClick={handleAddFriend}
								>
									{isYourFriend ? `remove ${name} from your friends` : `add ${name} to your besties`}
								</div>
							) : null}
						</div>
						<article style={{maxHeight: "1000px"}}>
							<section style={{overflowY: "auto", display: "flex", height: "100%", maxHeight: "640px",flexDirection: "column"}}>
								<SongContainer user={user} isActiveUser={isActiveUser} onChangeSongs={setUser} />
							</section>
						</article>	
					</div>
					<div className="column is-3" style={{position: "relative"}}>

					<Avatar status={status} />

						<div
							className="tags are-normal is-white has-addons buttons"
							style={{display: "flex", justifyContent: "center", marginLeft: "0px", marginTop: "190%"}}
						>
						
						{/* If one of our premade "static" users, render content differently */}
						{user.isStatic ? (

							<span className="button is-static">{`${user.name} ${status}`}</span>

						) : (

							<>
								<span className="button is-static">
									{/* If our page or another user's, render content differently */}
									{isActiveUser ? "I'm feeling..." : `${user.name} is feeling...`}
								</span>
								<StatusDropdown
									onStatusChange={setUser}
									user={user}
									isActiveUser={isActiveUser}
								/>	
							</>	

						)}

						</div>
					</div>
			</div>			
		</div>
	)
}

export default UserPage;