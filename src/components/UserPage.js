import React, { useEffect, useState } from "react";
import StatusDropdown from "./StatusDropdown";
import SongContainer from "./SongContainer";
import Avatar from "./Avatar";
import NonBasedAvatar from "./NonBasedAvatar";
import UserHeader from "./UserHeader";
import { useParams } from "react-router-dom";

function UserPage({ activeUser, setActiveUser }) {
	const [user, setUser] = useState({});
	const [isActiveUser, setIsActiveUser] = useState(false);
	const [isYourFriend, setIsYourFriend] = useState(false);
	const [isBasedMode, setIsBasedMode] = useState(true);

	const { pageImage, status, id } = user;

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
				setIsBasedMode(user.isBased);

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

	// toggle basedMode on and off
	function handleToggleBasedMode(boolean) {
		fetch(`http://localhost:4000/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({isBased: boolean}),
		})
			.then(res => res.json())
			.then(updatedUser => setActiveUser(updatedUser))
			.catch(e => console.error(e));
	}

	if (!user) return <h1>Loading...</h1>

	return (
		<div className ="userPage" style={{
			backgroundImage: isBasedMode ? "url(https://i.postimg.cc/SxWNgN9D/photo-1577412647305-991150c7d163.jpg)" : `url(${pageImage})`,
			marginTop: "20px",
			width: "102%",
			height: "100vh",
			backgroundSize: "cover",
			backgroundPosition: "center",
			}}>
			<div className="columns">
					
  				<div className="column is-1" style={{marginLeft: "25px", marginRight: "45px"}}>
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

							{/* display basedMode buttons if we're on our own page */}
							{ isActiveUser ? (
								<>
									<span
										className={isBasedMode ? "tag is-normal is-rounded" : "tag is-normal is-warning is-rounded"}
										style={{padding: "12px", marginLeft: "30px", cursor: "pointer", textAlign: "center", fontSize: "12px"}}
										onClick={() => handleToggleBasedMode(true)}
									>
										non-anime mode
									</span>
									<div className="column is-2"></div>

									<span
										className={isBasedMode ? "tag is-normal is-warning is-rounded" : "tag is-normal is-rounded"}
										style={{marginLeft: "25px", cursor: "pointer", padding:"12px", fontSize: "12px"}}
										onClick={() => handleToggleBasedMode(false)}
									>
										based mode
									</span>
									<div className="column is-2"></div>
								</>
							) : null}
						
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

					{isBasedMode ? <NonBasedAvatar status={status} /> : <Avatar status={status} /> }

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