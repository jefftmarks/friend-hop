import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { Form, Button, Box } from "react-bulma-components"

const initializedForm = {username: "", password: ""};

function Login({ setHasAccount, setActiveUser }) {
	const [formData, setFormData] = useState(initializedForm)
	const history = useHistory();

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData(formData => ({...formData, [name]: value}))
	}

	function handleSubmit(event) {
		event.preventDefault();
		fetch(`http://localhost:4000/users?username=${formData.username}`)
			.then(res => res.json())
			.then(data => handleLogin(data[0]))
			.catch(e => console.error(e));
	}

	function handleLogin(user) {
		if (!user) {
			alert("username does not exist");
			setFormData(initializedForm);
		} else if (formData.password !== user.password) {
			alert("password incorrect");
			setFormData(initializedForm);
		} else {
			setActiveUser(user);
			localStorage.setItem("user",user.username)
			history.push(`/user/${user.username}`);
		}
	}

	return (
		<Box style={{ width: 400, margin: "20px" }}>
			<form onSubmit={handleSubmit}>
				<Form.Field>
					<Form.Label htmlFor="username">username</Form.Label>
					<Form.Control>
						<Form.Input
							type="text"
							placeholder="sky_rules"
							id="loginUsername"
          					name="username"
							value={formData.username}
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
							name="password"
							value={formData.password}
							required
							onChange={handleChange}
						/>
					</Form.Control>
				</Form.Field>
				<Button.Group align="right">
					<Button className="is-info">login</Button>
					<Button className="is-warning" onClick={setHasAccount}>sign up</Button>
					
				</Button.Group>
				
					
				
					
			</form>
		</Box>
	)
}

export default Login;