import React, { useState } from "react";
import { Input } from "./components/Forms";
import { Form, Button } from "react-bootstrap";

export default function Register() {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});

	function setErrorToEntity(entityName, errorMessage) {
		setErrors((prevValue) => {
			const newObject = { ...prevValue };
			if (!newObject[entityName]) newObject[entityName] = errorMessage;
			return newObject;
		});
	}

	function validateForm() {
		let isFormValid = true;
		if (!user) {
			setErrorToEntity("user", "O campo de usuário é obrigatório.");
			isFormValid = false;
		}

		if (!password) {
			setErrorToEntity("password", "O campo de senha é obrigatório.");
			isFormValid = false;
		}
		if (password != confirmPassword) {
			setErrorToEntity("confirmPassword", "As senhas devem ser iguais.");
			isFormValid = false;
		}

		return isFormValid;
	}

	function checkIfUserIsAvailable(user) {
		const userList = JSON.parse(localStorage.getItem("users")) || [];
		const entityWithUser = userList.find((c) => c.user === user);
		console.log("Ja existe um usuário com esse login: ", !entityWithUser);
		return !entityWithUser;
	}

	function addUserToList(user) {
		const userList = JSON.parse(localStorage.getItem("users")) || [];
		userList.push(user);
		localStorage.setItem("users", JSON.stringify(userList));
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const isFormValid = validateForm();
		if (!isFormValid) return;

		const isUserAvailable = checkIfUserIsAvailable(user);
		if (!isUserAvailable) {
			setErrorToEntity("user", "Esse usuário já esta sendo usado no momento.");
			return;
		}

		let userObj = {
			user,
			password,
		};
		addUserToList(userObj);
		window.location.href = "/Login";
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Input
					controlId="email"
					label="Email"
					type="text"
					placeholder="Digite seu email"
					entity={user}
					setEntity={setUser}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"user"}
				/>
				<Input
					controlId="password"
					label="Senha"
					type="password"
					placeholder="Digite sua senha"
					entity={password}
					setEntity={setPassword}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"password"}
				/>
				<Input
					controlId="confirmPassword"
					label="Confirme a Senha"
					type="password"
					placeholder="Digite sua senha novamente"
					entity={confirmPassword}
					setEntity={setConfirmPassword}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"confirmPassword"}
				/>

				<Button variant="primary" type="submit">
					Entrar
				</Button>
			</Form>
			<a href="/login">Já tem um registro?</a>
			<br />
			<a href="/">Ir para Home</a>
		</>
	);
}
