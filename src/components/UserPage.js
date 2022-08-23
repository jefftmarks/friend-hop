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
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			backgroundPosition: "50% 100%",
			width: "100%",
			height: "100vh"
			}}>
			<div className="columns is-multiline">
  				<div className="column is-4">
						<div style={{
								height: "520px",
								width: "80%",
								margin: "auto",
								backgroundImage: `url("${avatar}")`,
								backgroundSize: "180%",
								backgroundPosition: "50% 70%",
								backgroundRepeat: "no-repeat",
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
  				<div className="column is-1">
						<div className="column"></div>
						<div className="column"></div>
						<div className="column"></div>
						<div className="buttons is-centered">
							<button className=" button is-small is-rounded">light mode</button>
							<button className="button is-small is-black is-rounded">dark mode</button>
						</div>
					</div>
					<div className="column"> 
						<div className="column"></div>
						<div className="column"></div>
						<div className="column"></div>
						<div className="box has-text-centered"><h1 className="is-centered">{name}'s Page</h1></div>
						<SongContainer user={user} userIsActive={userIsActive} onAddSong={setUser} />
					</div>
			</div>			
		</div>
	)
}

export default UserPage;