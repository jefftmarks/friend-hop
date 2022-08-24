import React, { useEffect, useState } from "react";
import StatusDropdown from "./StatusDropdown";
import SongContainer from "./SongContainer";
import { useParams } from "react-router-dom";

import { handleAvatar } from "../utils";
import hypernormal from "../images/default.png";

function UserPage({ activeUser }) {
	const [user, setUser] = useState({});
	const [isActiveUser, setIsActiveUser] = useState(false);
	const [avatar, setAvatar] = useState(hypernormal);

	const { name, pageImage, status } = user;

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
				// if username matches our activeUser.username (user currently logged in), set isActiveUser to true, enabling certain features
				if (user.username === activeUser.username) {
					setIsActiveUser(true);
				}
			})
			.catch(e => console.error(e));
	}, [params, user, activeUser])

	if (!user) return <h1>Loading...</h1>



	return (
		<div style={{
			backgroundImage: `url(${pageImage})`,
			marginTop: "30px",
			width: "100%",
			height: "100vh",
			backgroundSize: "cover"
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
						<article>
							<section style={{overflowY: "auto", display: "flex", height: "100%", flexDirection: "column"}}>
								<SongContainer user={user} isActiveUser={isActiveUser} onChangeSongs={setUser} />
							</section>
						</article>	
					</div>
					<div className="column is-3">
					<div style={{
								height: "100%",
								width: "100%",
								
								backgroundImage: `url("${avatar}")`,
								backgroundPosition: "35% 50%",
								backgroundRepeat: "no-repeat",
								backgroundPositionX: "center",
								marginBottom: "10px"
							}}>
						</div>

						{/* if user is one of our preset bot users, page layout will be slightly different */}
						{user.isStatic ? (

							<div
							className="tags are-normal is-white has-addons buttons"
							style={{display: "flex", justifyContent: "center"}}
						>
							<span className="button is-static">
								{`${user.name} ${status}`}
							</span>
						</div>

						) : (


							<div
							className="tags are-normal is-white has-addons buttons"
							style={{display: "flex", justifyContent: "center", position: "20%"}}
						>
							<span className="button is-static">
								{isActiveUser ? "I'm feeling..." : `${user.name} is feeling...`}
							</span>
							<StatusDropdown
								onStatusChange={setUser}
								user={user}
								isActiveUser={isActiveUser}
							/>
						</div>

						)}
						
					</div>
			</div>			
		</div>
	)
}

export default UserPage;