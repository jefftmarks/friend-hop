import React, { useEffect, useState } from "react";
import StatusDropdown from "./StatusDropdown";
import SongContainer from "./SongContainer";
import { useParams } from "react-router-dom";

import { handleAvatar } from "../utils";
import hypernormal from "../images/default.png";

function UserPage({ activeUsername }) {
	const [user, setUser] = useState({});
	const [isActiveUser, setIsActiveUser] = useState(false);
	const [avatar, setAvatar] = useState(hypernormal);

	const { name, id } = user;

	const params = useParams();

	// when params (i.e. username) changes, perform a fetch looking for that username
	useEffect(() => {
		fetch(`http://localhost:4000/users?username=${params.username}`)
			.then(res => res.json())
			.then(data => {
				const user = data[0]; // set user to the first (and only) result
				setUser(user);
				// change avatar image depending on user status
				handleAvatar(setAvatar, user.status)
				// if username matches our activeUsername (user currently logged in), set isActiveUser to true, enabling certain features
				if (user.username === activeUsername) {
					setIsActiveUser(true);
				}
			})
			.catch(e => console.error(e));
	}, [params, user, activeUsername])

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
							
						<SongContainer user={user} isActiveUser={isActiveUser} onChangeSongs={setUser} />

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
								{isActiveUser ? "I'm feeling..." : `${user.name} is feeling...`}
							</span>
							<StatusDropdown onStatusChange={setUser} id={id} status={user.status} isActiveUser={isActiveUser}/>
						</div>


					</div>
			</div>			
		</div>
	)
}

export default UserPage;