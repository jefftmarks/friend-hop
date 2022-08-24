import React, { useEffect, useState } from "react";
import StatusDropdown from "./StatusDropdown";
import SongContainer from "./SongContainer";
import { useParams } from "react-router-dom";

import { handleAvatar } from "../utils";

function UserPage({ activeUser }) {
	const [user, setUser] = useState({});
	const [userIsActive, setUserIsActive] = useState(false);
	const [avatar, setAvatar] = useState("https://www.linkpicture.com/q/default_1.png");

	const { name, status, id } = user;

	// params.username will give us access to username value
	const params = useParams();

	// when params (i.e. user profile) changes, perform a fetch and set user to the first (and only) result
	useEffect(() => {
		fetch(`http://localhost:4000/users?username=${params.username}`)
			.then(res => res.json())
			.then(data => setUser(data[0]))
	}, [params, activeUser])

	useEffect(() => {
		if (user.username === activeUser.username) {
			setUserIsActive(true);
		}
	}, [activeUser.username, user.username])

	// when status in dropdown menu changes, run a PATCH request to update user and rerender page
	function handleStatusChange(event) {
		const newStatus = event
		fetch(`http://localhost:4000/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({status: newStatus}),
		})
			.then(res => res.json())
			.then(updatedUser => setUser(updatedUser))
	}

	// change avatar image source depending on status
	useEffect(() => {
		handleAvatar(setAvatar, status);
	}, [status])

	if (!user) return <h1>Loading...</h1>

	return (
		<div style={{
			backgroundImage: 'url("https://www.linkpicture.com/q/V02.jpg")',
			marginTop: "30px",
			width: "100%",
			height: "100vh",
			backgroundSize: "cover",
			// backgroundPosition: "50% 100%",
			}}>
			<div className="columns is-multiline">
  				
						
					
  				<div className="column is-1">
						<div className="column"></div>
						<div className="column"></div>
						<div className="column"></div>
						<div className="column"></div>
						<div className="column"></div>
						<div className="column"></div>
						
						
						<div className="buttons is-centered" style={{padding: "20px"}}>
						
							<div className="column"></div>
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
							<h1 className="is-centered">{name}'s Page</h1></div>
						<SongContainer user={user} userIsActive={userIsActive} onAddSong={setUser} />

					</div>
					<div className="column is-3">
					<div style={{
								height: "100%",
								width: "100%",
								
								backgroundImage: `url("${avatar}")`,
								backgroundPosition: "35% 70%",
								backgroundRepeat: "no-repeat",
								backgroundPositionX: "center",
								marginBottom: "20px"
							}}>
						</div>
						<div
							className="tags are-normal is-white has-addons buttons"
							style={{display: "flex", justifyContent: "center"}}
						>
							<span className="button is-static">
								{userIsActive ? "I'm feeling..." : `${user.name} is feeling...`}
							</span>
							<StatusDropdown onStatusChange={handleStatusChange} status={user.status} userIsActive={userIsActive}/>
						</div>


					</div>
			</div>			
		</div>
	)
}

export default UserPage;