import React, { useEffect, useState } from "react"
import UserCard from "./UserCard";
import { useParams } from "react-router-dom";

function SearchResults() {
	const [searchResults, setSearchResults] = useState([]);

	const query = useParams().query;

	useEffect(() => {
		fetch(`http://localhost:4000/users?q=${encodeURI(query)}`)
			.then(res => res.json())
			.then(results => setSearchResults(results))
	}, [query]);

 return (
	<>
		<h1>Search Results</h1>
		{searchResults.map(result => (
			<UserCard key={result.username} user={result} />
		))}
	</>
 )
}

export default SearchResults;