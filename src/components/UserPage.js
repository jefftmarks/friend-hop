import React, { useEffect, useState } from "react";
import StatusDropdown from "./StatusDropdown";
import { useParams } from "react-router-dom";

function UserPage({ activeUser }) {
	const [user, setUser] = useState({})

	const { name, status, songs, id } = user;

	// params.username will give us access to username value
	const params = useParams();

	// when params (i.e. user profile) changes, perform a fetch and set user to the first (and only) result
	useEffect(() => {
		fetch(`http://localhost:4000/users?username=${params.username}`)
			.then(res => res.json())
			.then(data => setUser(data[0]))
	}, [params])

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

	let avatarUrl = "";

	switch (status) {
		case "hypernormal":
				avatarUrl = "https://www.linkpicture.com/q/default_1.png";
				break;
		case "angelic":
				avatarUrl = "https://www.linkpicture.com/q/angelic.png";
				break;
		case "braindead":
				avatarUrl = "https://www.linkpicture.com/q/braindead.png";
				break;
		case "blissed out":
				avatarUrl = "https://www.linkpicture.com/q/great.png";
				break;
		case "extra special":
			avatarUrl = "https://www.linkpicture.com/q/happy_2.png";
			break;
		case "hungry":
			avatarUrl = "https://www.linkpicture.com/q/hungry.png";
			break;
		case "in the zone":
			avatarUrl = "https://www.linkpicture.com/q/inthezone.png";
			break;
		case "zoinked":
			avatarUrl = "https://www.linkpicture.com/q/sleepy_1.png";
			break;
		case "evil oblivion":
			avatarUrl = "https://www.linkpicture.com/q/cranky.png";
			break;
		default:
			avatarUrl = "https://www.linkpicture.com/q/default_1.png";
	}

	if (!user) return <h1>Loading...</h1>

	return (
		<>
			<div className="columns is-multiline">
  				<div className="column is-4">
						<div style={{
								border: "1px solid black",
								height: "500px",
								width: "80%",
								margin: "auto",
								backgroundImage: `url(${avatarUrl})`,
								backgroundSize: "190%",
								backgroundPosition: "50% 70%",
								backgroundRepeat: "no-repeat",

							}}>
							{/* <img src={avatarUrl} alt="avatar" /> */}
						</div>
						<div className="tags are-large is-white">
							<div className="tag">I'm feeling...</div>
						</div>
						<div style={{display: "flex", justifyContent: "center"}}>
							<StatusDropdown onStatusChange={handleStatusChange} status={user.status} />
						</div>
							
					</div>

  				<div className="column is-1">
						<div className="buttons is-centered">
							<button className="button is-small is-rounded">light mode</button>
							<button className="button is-small is-black is-rounded">dark mode</button>
						</div>
					</div>
					<div className="column"> 
						<div className="box"><h1>{name}'s Page</h1></div>
						add song form
					</div>
			</div>			
		</>
	)
}

export default UserPage;