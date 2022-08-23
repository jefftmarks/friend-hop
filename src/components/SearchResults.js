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
			.then(results => setSearchResults(results.filter(result => {

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