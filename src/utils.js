export function handleAvatar(cb, value) {
	let avatarImage = "";
	switch (value) {
		case "hypernormal":
				avatarImage = "https://www.linkpicture.com/q/default_1.png";
				break;
		case "angelic":
				avatarImage = "https://www.linkpicture.com/q/angelic.png";
				break;
		case "braindead":
				avatarImage = "https://www.linkpicture.com/q/braindead.png";
				break;
		case "blissed out":
				avatarImage = "https://www.linkpicture.com/q/happy_2.png";
				break;
		case "extra special":
			avatarImage = "https://www.linkpicture.com/q/great.png";
			break;
		case "hungry":
			avatarImage = "https://www.linkpicture.com/q/hungry.png";
			break;
		case "in the zone":
			avatarImage = "https://www.linkpicture.com/q/inthezone.png";
			break;
		case "zoinked":
			avatarImage = "https://www.linkpicture.com/q/sleepy_1.png";
			break;
		case "evil oblivion":
			avatarImage = "https://www.linkpicture.com/q/cranky.png";
			break;
		default:
			avatarImage = "https://www.linkpicture.com/q/default_1.png";
	}
	cb(avatarImage);
}