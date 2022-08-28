import React from "react";
import { Link } from "react-router-dom";

function MessageCard({ message, activeUser, setActiveUser }) {
	const { messageText, name, username, cardImage, date } = message;

	function onDeleteMessage() {
		const updatedMessages = activeUser.messages.filter(message => {
			return message.date !== date;
		})

		fetch(`http://localhost:4000/users/${activeUser.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({messages: updatedMessages}),
		})
			.then(res => res.json())
			.then(updatedUser => setActiveUser(updatedUser))
	}

	return (
		<div
			className="box"
			style={{
				paddingTop:"20px",
				paddingBottom: "60px",
				cursor: "pointer",
				width: "auto",
				margin: "20px",
				marginRight: "40%" }}
		>
			<div className="media-left" style={{float: "left"}}>
				<figure className="image is-96x96">
					<img src={cardImage} alt="avatar" />
			</figure>
			</div>
			<div>
				<h1 style={{fontSize: 20}}>from: {name}</h1>
				<h1 style={{fontSize: 20}}>message: {messageText}</h1>
				<Link to={`/user/${username}`}>message back {name}</Link>
				<button
					style={{display: "block"}}
					onClick={onDeleteMessage}
				>
					delete message
				</button>
			</div>
		</div>
	)	
}

export default MessageCard;