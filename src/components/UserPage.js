import React, { useEffect, useState } from "react";
import StatusDropdown from "./StatusDropdown";
import { useParams } from "react-router-dom";

function UserPage() {
	const [user, setUser] = useState({})
	const { name, username, status, songs } = user;

	const params = useParams();

	useEffect(() => {
		fetch(`http://localhost:4000/users?username=${params.username}`)
			.then(res => res.json())
			.then(data => setUser(data[0]))
	}, [params])

	if (!user) return <h1>Loading...</h1>

	return (
		<>
			

			<div className="columns">
  			<div className="column is-one-fifth">
					avatar image and 
					<div className="box">
  				I'm feeling...
					
					</div>
					<StatusDropdown />
					</div>
  				<div className="column is-one-fifth">
					darkmode/lightmode
					 toggles go here
					</div>
 				<div className="column"> 
				<div className="box"><h1>{name}'s Page</h1>
				</div> and add song form go here</div>
			</div>



			
		</>
	)
}

export default UserPage;