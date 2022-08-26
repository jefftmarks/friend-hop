import React, { useEffect } from "react";
import MessageCard from "./MessageCard";

function Inbox({ activeUser, setActiveUser }) {

	// to prevent crash on reload
	useEffect(()=>{
    const prevUsername = localStorage.getItem("user")

    if(prevUsername) {
      fetch(`http://localhost:4000/users?username=${prevUsername}`)
			.then(res => res.json())
			.then(data => setActiveUser(data[0]))
    }
  },[])


	let renderMessages;

	if (activeUser) {
		renderMessages = activeUser.messages.map(message => (
			<MessageCard
				key={Date()}
				message={message}
				activeUser={activeUser}
				setActiveUser={setActiveUser}
			/>
		))
	}

	let messageHeader;
	if (activeUser) {
		messageHeader = activeUser.messages.length === 0 ? "sorry... no messages." : "inbox";
	}

	return (
		<>
			<div
				className="box"
				style={{ width: "15%", margin: "20px", marginRight: "80%", fontSize: 25 }}>
				<h1>
					{/* If no messages, display "no messages" */}
					{ messageHeader }
				</h1>
			</div>
			<div className="columns">
				<div className="column is-three-quarters">
				{/* render a user card for each search result */}	
				{ renderMessages }
				</div>
			</div>
		</>
 )
}

export default Inbox;