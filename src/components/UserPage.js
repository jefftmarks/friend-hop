import React from "react";
import { useParams } from "react-router-dom";

function UserPage() {
	const params = useParams();

	return (
		<h1>{params.username}'s' Page</h1>
	)
}

export default UserPage;