import React from "react";

function SearchBar() {
	return (
		<>
			<div class="field is-horizontal">
  			<div class="field-label is-normal">
					<label class="label">what are my friends listening to?</label>
				</div>
			</div>
			<div class="control">
  			<input class="input is-rounded" type="text" placeholder='"100 Gecs"' />
			</div>
		</>
		
	)
}

export default SearchBar;