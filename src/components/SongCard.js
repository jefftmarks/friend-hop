import React from "react";
import ReactSoundCloud from "react-soundcloud-embedded";

function SongCard({ url }) {

	return (
		<div>
			<ReactSoundCloud
				url={url}
				showUser={false}
				visual={false}
				hideRelated={true}
			/>
		</div>
	)
}

export default SongCard;