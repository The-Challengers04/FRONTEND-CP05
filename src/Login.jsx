import React, { useState } from "react";
import { Input } from "./components/Forms";
import { Form, Button } from "react-bootstrap";

export default function Login() {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
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

		return isFormValid;
	}

	function findUser() {
		const userList = JSON.parse(localStorage.getItem("users")) || [];
		const userObj = userList.find((c) => c.user === user);
		return userObj;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const isFormValid = validateForm();
		if (!isFormValid) return;

		const userObj = findUser();

		if (!userObj) {
			setErrorToEntity("user", "Usuário não encontrado.");
			return;
		}

		if (userObj.password !== password) {
			setErrorToEntity("password", "Senha incorreta.");
			return;
		}
		let user = {
			type: "Customer",
			data: userObj,
		};
		localStorage.setItem("loggedUser", JSON.stringify(user));
		window.location.href = "/";
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

				<Button variant="primary" type="submit">
					Entrar
				</Button>
			</Form>
			<a href="/Register">Não tem um registro?</a>
			<br />
			<a href="/">Ir para Home</a>
		</>
	);
}
