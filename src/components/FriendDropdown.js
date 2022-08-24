import React from "react";
import { Dropdown, Icon } from "react-bulma-components";

function FriendDropdown () {

	return (
			<Dropdown
				closeOnSelect={false}
				right={true}
				color=""
				icon={<Icon><i className="fa-solid fa-chevron-down"/></Icon>}
				label="Dropdown label"
			>
				<Dropdown.Item
					renderAs="a"
					value="item"
				>
					Dropdown item
				</Dropdown.Item>
				<Dropdown.Item
					renderAs="a"
					value="other"
				>
					Other Dropdown item
				</Dropdown.Item>
				<Dropdown.Item
					renderAs="a"
					value="active"
				>
					Active Dropdown item
				</Dropdown.Item>
				<Dropdown.Item
					renderAs="a"
					value="other 2"
				>
					Other Dropdown item
				</Dropdown.Item>
			</Dropdown>
	)
}

export default FriendDropdown;