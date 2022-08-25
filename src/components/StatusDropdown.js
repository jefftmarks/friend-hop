import React from "react";
import { Dropdown, Icon } from "react-bulma-components";

function StatusDropdown({ onStatusChange, user, isActiveUser }) {
	const { id, status } = user;

	// when status in dropdown menu changes, run a PATCH request to update user and rerender page
	function handleOnChange(event) {
		const newStatus = event
		fetch(`http://localhost:4000/users/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({status: newStatus}),
		})
			.then(res => res.json())
			.then(updatedUser => onStatusChange(updatedUser) )
			.catch(e => console.error(e));
	}

	return (
		<Dropdown
				className="dropdown is-up is-right"
				closeOnSelect={true}
				color=""
				icon={<Icon><i aria-hidden="true" className="fas fa-angle-down"/></Icon>}
				label="choose status"
				onChange={handleOnChange}
				value={status}
				disabled={!isActiveUser}
			>

			<Dropdown.Item renderAs="a" value="hypernormal">hypernormal</Dropdown.Item>
			
			<Dropdown.Item renderAs="a" value="angelic">angelic</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="braindead">braindead</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="blissed out">blissed out</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="extra special">extra special</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="hungry">hungry</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="in the zone">in the zone</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="zoinked">zoinked</Dropdown.Item>

			<Dropdown.Item renderAs="a" value="evil oblivion">evil oblivion</Dropdown.Item>

		</Dropdown>
	)
}

export default StatusDropdown;