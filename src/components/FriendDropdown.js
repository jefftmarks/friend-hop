import React from "react";
import { Dropdown, Icon } from "react-bulma-components";

function FriendDropdown ({ user }) {

	const { friends } = user

	return (
			<Dropdown
				closeOnSelect={false}
				right={true}
				color=""
				icon={<Icon><i className="fa-solid fa-chevron-down"/></Icon>}
				label="besties"
			>

				{friends.map(friend => (
					<Dropdown.Item
						key={friend}
						renderAs="a"
						value={friend}
						href={`/user/${friend}`}
					>
						{friend}
					</Dropdown.Item>
				))}


			</Dropdown>
	)
}

export default FriendDropdown;