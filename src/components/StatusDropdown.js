import React from "react";
import { Dropdown, Icon } from "react-bulma-components";

function StatusDropdown() {
	return (
		<Dropdown
				closeOnSelect={false}
				color=""
				icon={<Icon><i aria-hidden="true" className="fas fa-angle-down"/></Icon>}
				label="choose status"
			>
			<Dropdown.Item
				renderAs="a"
				value="item"
			>
				cranky
			</Dropdown.Item>
			<Dropdown.Item
				renderAs="a"
				value="other"
			>
				happy
			</Dropdown.Item>
			<Dropdown.Item
				renderAs="a"
				value="active"
			>
				sad
			</Dropdown.Item>
			<Dropdown.Item
				renderAs="a"
				value="other 2"
			>
				f*cking insane dude
			</Dropdown.Item>
		</Dropdown>
	)
}

export default StatusDropdown;