import React, { useEffect, useState } from "react"
import UserCard from "./UserCard";
import { useParams } from "react-router-dom";

function SearchResults({ handleOnCardClick }) {
	const [searchResults, setSearchResults] = useState([]);

	// Invoke useParams to grab value of query from the search input
	const query = useParams().query;

	// When search value changes, set results state to users whose data matches query value
	useEffect(() => {
		fetch(`http://localhost:4000/users?q=${encodeURI(query)}`)
			.then(res => res.json())
			.then(results => setSearchResults(results.filter(result => {

				// Conditions below to make sure we are only searching according to certain fields: name, username, status, and song title and song artist

				let titles = "";
				result.songs.forEach(song => {
					titles = titles + " " + song.title.toLowerCase();
				})

				let artists = "";
				result.songs.forEach(song => {
					artists = artists + " " + song.artist.toLowerCase();
				})

				if (result.name.toLowerCase().includes(query.toLowerCase())) {
					return true;
				} else if (result.username.toLowerCase().includes(query.toLowerCase())) {
					return true;
				} else if (result.status.toLowerCase().includes(query.toLowerCase())) {
					return true;
				} else if (titles.includes(query.toLowerCase())) {
					return true;
				} else if (artists.includes(query.toLowerCase())) {
					return true;
				} else {
					return false;
				}
			})))
			.catch(e => console.error(e));
	}, [query]);

	const renderedUserCards = searchResults.map(result => (
		<UserCard
			key={result.username}
			user={result}
			query={query}
			handleOnCardClick={handleOnCardClick}
		/>
	))

	return (
		<>
			<div className="box" style={{ width: "15%", margin: "20px", marginRight: "80%", fontSize: 25 }}>
				<h1>
					{/* If no results, display "no results" */}
					{searchResults.length === 0 ? "sorry... no results." : "search results" }
				</h1>
			</div>
			<div className="columns">
				<div className="column is-three-quarters">
				{/* render a user card for each search result */}	
				{ renderedUserCards }
			</div>
			</div>
		</>
 )
}

export default SearchResults;