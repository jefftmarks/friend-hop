import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Box } from "react-bulma-components";

const initializedForm = {
	name: "",
	username: "",
	password: "",
	isActive: true,
	cardImage: "https://www.linkpicture.com/q/defaultuser.png",
	songs: [],
	status: "new to friend hop",
}

function Signup({ setHasAccount, setActiveUsername }) {
	const [formData, setFormData] = useState(initializedForm);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordsMatch, setPasswordsMatch] = useState(false);
	const history = useHistory();

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData(formData => ({...formData, [name]: value}))
	}

	useEffect(() => {
		if (
			formData.password === confirmPassword
			&& formData.password !== ""
			&& formData.password.length >= 3
		) {
			setPasswordsMatch(true);
		} else {
			setPasswordsMatch(false);
		}
	}, [confirmPassword, formData.password])

	function handleSubmit(event) {
		event.preventDefault();
		fetch(`http://localhost:4000/users?username=${formData.username}`)
			.then(res => res.json())
			.then(data => {
				if (data.length === 1) {
					alert("username already exists");
					setFormData(initializedForm);
					setConfirmPassword("");
				} else {
					fetch("http://localhost:4000/users", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(formData),
					})
						.then(res => res.json())
						.then(newUser => {
							setActiveUsername(newUser.username);
							history.push(`/user/${newUser.username}`);
						})
						.catch(e => console.error(e))
				}
			})
			.catch(e => console.error(e));
	}

	return (
		<Box style={{ width: 400, margin: "20px" }}>
			<form onSubmit={handleSubmit}>
				<Form.Field>
					<Form.Label htmlFor="name">name</Form.Label>
					<Form.Control>
						<Form.Input
							type="text"
							placeholder="Sky"
							id="signupName"
							name="name"
							value={formData.name}
							required
							onChange={handleChange}
						/>
					</Form.Control>
				</Form.Field>
				<Form.Field>
					<Form.Label htmlFor="username">username</Form.Label>
					<Form.Control>
						<Form.Input
							type="text"
							placeholder="sky_rules"
							id="signupUsername"
							name="username"
							value={formData.username}
							minLength="3"
							maxLength="15"
							required
							onChange={handleChange}
						/>
					</Form.Control>
				</Form.Field>
				<Form.Field>
					<Form.Label htmlFor="password">password</Form.Label>
					<Form.Control>
						<Form.Input
							type="password"
							placeholder="*************"
							id="signupPassword"
							name="password"
							value={formData.password}
							minLength="3"
							maxLength="25"
							required
							onChange={handleChange}
						/>
					</Form.Control>
				</Form.Field>
				<Form.Field>
					<Form.Label
						htmlFor="confirmPassword"
						style={passwordsMatch ? { color: "green"} : { color: "red"}}
					>
						confirm password
					</Form.Label>
					<Form.Control>
						<Form.Input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							value={confirmPassword}
							minLength="3"
							maxLength="25"
							required
							onChange={(event) => setConfirmPassword(event.target.value)}
						/>
					</Form.Control>
				</Form.Field>
				<Button.Group align="right">
					<Button color="primary" type="submit" disabled={!passwordsMatch}>create account</Button>
					<Button color="primary" type="button" onClick={setHasAccount}>back to login</Button>
				</Button.Group>
			</form>
		</Box>
	)
}

export default Signup;