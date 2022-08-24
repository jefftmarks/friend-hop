import hypernormal from "./images/default.png";
import angelic from "./images/angelic.png";
import braindead from "./images/braindead.png";
import blissedOut from "./images/happy.png";
import extraSpecial from "./images/great.png";
import hungry from "./images/hungry.png";
import inTheZone from "./images/inthezone.png";
import zoinked from "./images/sleepy.png";
import evilOblivion from "./images/cranky.png";
import margo from "./images/margo.png";
import loraine from "./images/loraine.png";
import effy from "./images/effy.png";
import jessa from "./images/jessa.png";

export function handleAvatar(cb, value) {
	let avatarImage = "";
	switch (value) {
		case "hypernormal":
				avatarImage = hypernormal;
				break;
		case "angelic":
				avatarImage = angelic;
				break;
		case "braindead":
				avatarImage = braindead;
				break;
		case "blissed out":
				avatarImage = blissedOut;
				break;
		case "extra special":
			avatarImage = extraSpecial;
			break;
		case "hungry":
			avatarImage = hungry;
			break;
		case "in the zone":
			avatarImage = inTheZone;
			break;
		case "zoinked":
			avatarImage = zoinked;
			break;
		case "evil oblivion":
			avatarImage = evilOblivion;
			break;
		case "misses warped tour":
			avatarImage = margo;
			break;
		case "is late for swim practice":
			avatarImage = loraine;
			break;
		case "is mythical apocalyspe":
			avatarImage = effy;
			break;
			case "is feeling cheeky":
				avatarImage = jessa;
				break;
		default:
			avatarImage = hypernormal;
	}
	cb(avatarImage);
}