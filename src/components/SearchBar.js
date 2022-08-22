import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function SearchBar() {
	const [searchInput, setSearchInput] = useState("");
	const [searchQuery, setSearchQuery] = useState("");

	const history = useHistory();

	useEffect(() => {
    const scheduledUpdate = setTimeout(() => {
      setSearchQuery(searchInput);
    }, 500)
    
    return () => {
      clearTimeout(scheduledUpdate);
    }
  }, [setSearchQuery, searchInput]);

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
					onChange={event => setSearchInput(event.target.value)}
				/>

			</div>
		</>
		
	)
}

export default SearchBar;