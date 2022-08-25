import React, { useState, useEffect } from "react";

import hypernormal from "../images/michael_cera/hypernormal1.png";
import angelic from "../images/michael_cera/angelic1.png";
import braindead from "../images/michael_cera/braindead1.png";
import blissedOut from "../images/michael_cera/blissedout1.png";
import extraSpecial from "../images/michael_cera/extraspecial1.png";
import hungry from "../images/michael_cera/hungry1.png";
import inTheZone from "../images/michael_cera/inthezone1.png";
import zoinked from "../images/michael_cera/zoinked1.png";
import evilOblivion from "../images/michael_cera/eviloblivion1.png";
// import margo from "../images/michael_cera/hypernormal1.png";
// import loraine from "../images/michael_cera/hypernormal1.png";
// import effy from "../images/michael_cera/hypernormal1.png";
// import jessa from "../images/michael_cera/hypernormal1.png";

function NonBasedAvatar({ status }) {
	const [avatar, setAvatar] = useState(hypernormal);

	useEffect(() => {

		// Switch statement to determine avatar image
		
		switch (status) {
			case "hypernormal":
					setAvatar(hypernormal);
					break;
			case "angelic":
					setAvatar(angelic);
					break;
			case "braindead":
					setAvatar(braindead);
					break;
			case "blissed out":
					setAvatar(blissedOut);
					break;
			case "extra special":
				setAvatar(extraSpecial);
				break;
			case "hungry":
				setAvatar(hungry);
				break;
			case "in the zone":
				setAvatar(inTheZone);
				break;
			case "zoinked":
				setAvatar(zoinked);
				break;
			case "evil oblivion":
				setAvatar(evilOblivion);
				break;
			default:
				setAvatar(hypernormal);
		}
	}, [status])

	return (
		<img
			src={avatar}
			alt="avatar"
			style={{
				position: "absolute",
				top: "-4em",
				right: "3.5em",
				marginLeft: "10%",
				maxHeight:"120%",
				width: "80%",
			}}
		/>
	)

}

export default NonBasedAvatar;