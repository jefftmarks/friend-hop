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
			.then(results => {

				const searchTerm = query.toLowerCase();

				// filter to show results that match name, username, status, or song title and artist
				const updatedResults = results.filter(result => {
					let titles = "";
					let artists = "";

					result.songs.forEach(song => {
					titles = titles + " " + song.title.toLowerCase();
					artists = artists + " " + song.artist.toLowerCase();
					})

					return (
						result.name.toLowerCase().includes(searchTerm)
						|| result.username.toLowerCase().includes(searchTerm)
						|| result.status.toLowerCase().includes(searchTerm)
						|| titles.includes(searchTerm)
						|| artists.includes(searchTerm)
					)

				})

				setSearchResults(updatedResults);
			})
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