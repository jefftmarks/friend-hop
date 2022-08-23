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
  				<div className="column is-2">
					avatar image 
					<div className="column is-7">
        			
						<div className="tags are-large is-white is-centered">
							<span className="tag">I'm feeling...</span>
					</div>
						<StatusDropdown />
     			</div>	
			</div>

  				<div className="column is-1">
					<div className="buttons is-centered">
					<button className="button is-small is-rounded">light mode</button>
					
					<button className="button is-small is-black is-rounded">dark mode</button>
					</div>
				</div>
 				<div className="column"> 
				<div className="box"><h1>{name}'s Page</h1>
				</div> add song form </div>
			</div>



			
		</>
	)
}

export default UserPage;