import React, { useState, useEffect } from "react";

import hypernormal from "../images/default.png";
import angelic from "../images/angelic.png";
import braindead from "../images/braindead.png";
import blissedOut from "../images/happy.png";
import extraSpecial from "../images/great.png";
import hungry from "../images/hungry.png";
import inTheZone from "../images/inthezone.png";
import zoinked from "../images/sleepy.png";
import evilOblivion from "../images/cranky.png";
import margo from "../images/margo.png";
import loraine from "../images/loraine.png";
import effy from "../images/effy.png";
import jessa from "../images/jessa.png";

function Avatar({ status }) {
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
			case "misses warped tour":
				setAvatar(margo);
				break;
			case "is late for swim practice":
				setAvatar(loraine);
				break;
			case "is mythical apocalyspe":
				setAvatar(effy);
				break;
				case "is feeling cheeky":
					setAvatar(jessa);
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

export default Avatar;