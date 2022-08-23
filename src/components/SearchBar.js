import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function SearchBar({ onChangeSearchInput, searchInput }) {
	const [searchQuery, setSearchQuery] = useState("");

	const history = useHistory();

	// when user changes input value in search bar (updates searchInput state, which lives in parent App component), update the searchQuery state after delay of 0.5 seconds.
	useEffect(() => {
    const scheduledUpdate = setTimeout(() => {
      setSearchQuery(searchInput);
    }, 500)
    
    return () => {
      clearTimeout(scheduledUpdate);
    }
  }, [setSearchQuery, searchInput]);

	// when the searchQuery value is updated (and isn't an empty string), invoke useHistory to programatically nvagiate to the search results page. The url parameter will equal the query, which we'll be able to access with useParams in the SearchResults component
	useEffect(() => {
		if(searchQuery) history.push(`/search/${searchQuery}`);
	}, [searchQuery, history])
	

	return (
		<>
			<div className="field is-horizontal">
  			<div className="field-label is-normal">
					<label className="label" htmlFor="search">what are my friends listening to?</label>
				</div>
			</div>
			<div className="control">
  			<input
					className="input is-rounded is-small"
					type="text"
					placeholder='"100 Gecs"'
					name="search"
					value={searchInput}
					// Immediately changes search input state, which lives in parent App component
					onChange={event => onChangeSearchInput(event.target.value)}
				/>
			</div>
		</>
		
	)
}

export default SearchBar;