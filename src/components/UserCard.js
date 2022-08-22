import React from "react";
import { Box } from "react-bulma-components";

function UserCard({ user }) {
	const { name, username } = user;

	return (
		<Box>
			<h1>Name: {name} </h1>
			<h2>Username: {username}</h2>
		</Box>
	)
}

export default UserCard;