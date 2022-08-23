import React, { useEffect, useState } from "react"
import UserCard from "./UserCard";
import { useParams } from "react-router-dom";

function SearchResults({ handleOnCardClick }) {
	const [searchResults, setSearchResults] = useState([]);

	// invoke useParams to grab value of search from searchbar
	const query = useParams().query;

	// when search value changes, set results to users whose data matches query value
	useEffect(() => {
		fetch(`http://localhost:4000/users?q=${encodeURI(query)}`)
			.then(res => res.json())
			.then(results => setSearchResults(results))
	}, [query]);

 return (
	<>
		<div className="columns">
			{/* map a userccard for each search result value */}
  		<div className="column is-three-quarters">{searchResults.map(result => (
			<UserCard key={result.username} user={result} query={query} handleOnCardClick={handleOnCardClick}/>
		))}</div>
		</div>
	</>
 )
}

export default SearchResults;