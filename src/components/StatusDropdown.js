import React from "react";
import { Dropdown, Icon } from "react-bulma-components";

function StatusDropdown({ onStatusChange, status, userIsActive }) {
	return (
		<Dropdown
				className="dropdown is-up is-right"
				closeOnSelect={true}
				color=""
				icon={<Icon><i aria-hidden="true" className="fas fa-angle-down"/></Icon>}
				label="choose status"
				onChange={event => onStatusChange(event)}
				value={status}
				disabled={!userIsActive}
			>

			<Dropdown.Item renderAs="a" value="hypernormal">hypernormal</Dropdown.Item>
			
			<Dropdown.Item renderAs="a" value="angelic">angelic</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="braindead">braindead</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="blissed out">blissed out</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="extra special">happy</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="hungry">hungry</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="in the zone">in the zone</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="zoinked">zoinked</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="evil oblivion">evil oblivion</Dropdown.Item>

		</Dropdown>
	)
}

export default StatusDropdown;