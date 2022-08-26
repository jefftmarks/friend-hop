import React, { useState } from "react";

function MessageForm({ name, id, activeUser, messages, setMessageFormIsActive }) {
	const initializedForm = {
		name: activeUser.name,
		username: activeUser.username,
		messageText: "",
		cardImage: activeUser.cardImage,
		date: Date(),
	}

	const [formData, setFormData] = useState (initializedForm)

	function handleOnChange(event) {
		const { name, value } = event.target;
		setFormData({...formData, [name]: value})
	}

	// send message to user
	function handleSubmit(event) {
		event.preventDefault();
		fetch(`http://localhost:4000/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				messages: [...messages, formData]
			})
		})
			.then(res => res.json())
			.then(data => {
				alert("message sent!");
				setFormData(initializedForm)
				setMessageFormIsActive(false);
			})
	}

	return (
		<form onSubmit={handleSubmit}>
			<textarea
				name="messageText"
				rows="4"
				cols="30"
				minLength="1"
				maxLength="500"
				placeholder={` hi ${name}...`}
				onChange={handleOnChange}
				value={formData.messageText}
			/>
			<button type="submit">send</button>
		</form>
	)
}

export default MessageForm;