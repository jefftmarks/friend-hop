import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function SearchBar({ setSearchInput, searchInput }) {
	const [searchQuery, setSearchQuery] = useState("");

	const history = useHistory();

	/*
	When user changes input value in search bar, update state of searchInput, which lives in parent App component. When searchInput changes, this will trigger useEffect below, which will update our state of searcQuery after delay of 0.5 seconds
	 */

	function onSearchInputChange(event) {
		// Characters % or / will break search
		if (event.target.value.includes("%") || event.target.value.includes("/")) {
			alert("please refrain from entering the characters % or / in search bar");
			setSearchInput("");
		} else {
			setSearchInput(event.target.value);
		}
	}

	useEffect(() => {
    const scheduledUpdate = setTimeout(() => {
      setSearchQuery(searchInput);
    }, 500)
    
    return () => {
      clearTimeout(scheduledUpdate);
    }
  }, [setSearchQuery, searchInput]);

	/*
	When the searchQuery value is updated (and isn't an empty string), invoke useHistory to programatically navigate to the Search Results page. The url parameter will match the query, which we'll be able to access with useParams in the SearchResults component
	*/

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
					// Immediately changes search input state, which lives in App component
					onChange={onSearchInputChange}
				/>
			</div>
		</>
		
	)
}

export default SearchBar;