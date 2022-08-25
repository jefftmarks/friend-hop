import React, { useEffect, useState } from "react";
import StatusDropdown from "./StatusDropdown";
import SongContainer from "./SongContainer";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import UserHeader from "./UserHeader";

function UserPage({ activeUser, setActiveUser }) {
	const [user, setUser] = useState({});
	const [isActiveUser, setIsActiveUser] = useState(false);
	const [isYourFriend, setIsYourFriend] = useState(false);

	const { pageImage, status } = user;

	const params = useParams();

	// modal try out demo thingy 
	// function handlePopUp(e) {
	// }

	// When params (i.e. username) changes, perform a fetch query looking for that username

	useEffect(() => {
		fetch(`http://localhost:4000/users?username=${params.username}`)
			.then(res => res.json())
			.then(data => {

				// set user of the page we're currently on to the first (and only) result
				const user = data[0]; 
				setUser(user);

				// function to determine whether we're on our page or someone else's
				function checkIfActiveUser() {
					if (user.username === activeUser.username) {
						setIsActiveUser(true);
					}
				}
		
				// function: if we're on someone else's page, are we already friends?
				function checkFriendStatus() {
					if (user.username !== activeUser.username) {
						const matches = activeUser.friends.filter(friend => {
							return friend.username === user.username
						})
						if (matches.length >= 1) {
							setIsYourFriend(true);
						} else {
							setIsYourFriend(false);
						}
					}
				}

				// run the above two functions once activeUser has been passed down (otherwise throws error)
				if (activeUser) {
					checkIfActiveUser();
					checkFriendStatus();
				}
				
			})
			.catch(e => console.error(e));
	}, [activeUser, params.username])

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

						<UserHeader
							user={user}
							activeUser={activeUser}
							isActiveUser={isActiveUser}
							isYourFriend={isYourFriend}
							setActiveUser={setActiveUser}
						/>

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