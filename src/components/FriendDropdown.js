import React from "react";
import { Dropdown, Icon } from "react-bulma-components";

function FriendDropdown ({ user }) {

	const { friends } = user

	// function renderCardImage(friend) {
	// 	fetch
	// }

	// if user has friends, render a dropdown item for each friend and route to their page
	const renderedFriends = friends ? friends.map(friend => (
		<Dropdown.Item
			key={friend}
			renderAs="a"
			value={friend}
			href={`/user/${friend}`}
		>
			{/* <img src={} alt="user"/> */}
			{friend}
		</Dropdown.Item>
	)) : (
		<>
			<Dropdown.Item
			key="no-friends"
			>
			you have no friends
			</Dropdown.Item>
		</>
		
		
	)

	return (
			<Dropdown
				closeOnSelect={false}
				right={true}
				color=""
				icon={<Icon><i className="fa-solid fa-chevron-down"/></Icon>}
				label="besties"
			>
				{renderedFriends}
			</Dropdown>
	)
}

export default FriendDropdown;