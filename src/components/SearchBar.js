import React from "react";

function SearchBar() {
	return (
		<>
			<div className="field is-horizontal">
  			<div className="field-label is-normal">
					<label className="label">what are my friends listening to?</label>
				</div>
			</div>
			<div className="control">
  			<input className="input is-rounded" type="text" placeholder='"100 Gecs"' />
			</div>
		</>
		
	)
}

export default SearchBar;