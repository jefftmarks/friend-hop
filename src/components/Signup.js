import React from "react";
import { Form, Button, Box } from "react-bulma-components";

function Signup({ setHasAccount }) {
	return (
		<Box style={{ width: 400, margin: "20px" }}>
			<form>
			<Form.Field>
					<Form.Label>Name</Form.Label>
					<Form.Control>
						<Form.Input
							type="text"
							placeholder="Sky"
						/>
					</Form.Control>
				</Form.Field>
				<Form.Field>
					<Form.Label>Username</Form.Label>
					<Form.Control>
						<Form.Input
							type="text"
							placeholder="sky_rules"
						/>
					</Form.Control>
				</Form.Field>
				<Form.Field>
					<Form.Label>Password</Form.Label>
					<Form.Control>
						<Form.Input type="password" placeholder="*************" />
					</Form.Control>
				</Form.Field>
				<Button.Group align="right">
					<Button color="primary" onClick={setHasAccount}>Back to Login</Button>
					<Button color="primary">Signup</Button>
				</Button.Group>
			</form>
		</Box>
	)
}

export default Signup;