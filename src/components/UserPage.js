import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPage() {
	const [user, setUser] = useState({})

	const { name, username } = user;

	const params = useParams();

	useEffect(() => {
		fetch(`http://localhost:4000/users?username=${params.username}`)
			.then(res => res.json())
			.then(data => setUser(data[0]))
	}, [params])

	if (!user) return <h1>Loading...</h1>

	return (
		<h1>{name}'s Page</h1>
	)
}

export default UserPage;