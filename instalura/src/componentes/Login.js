import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {

	constructor() {
		super();
		this.state = {msg: ""};
	}

	enviar(event) {
		//Ao usar Ajax, é necessário interromper o fluxo normal do evento
		event.preventDefault();

		//Declare a "POST" request object
		const requestInfo = {
			method: "POST",
			body: JSON.stringify({login: this.login.value, senha: this.senha.value}),
			headers: new Headers({
				"Content-type":"application/json"
			})
		};

		fetch("http://localhost:8080/api/public/login", requestInfo)
			.then(response => {
				if (response.ok) {
					return response.text();
				} else {
					throw new Error("Não foi possível fazer o login");
				}
			})
			.then(token => {
				//Armazena o token do usuário para que seja acessivel de outras telas
				localStorage.setItem("auth-token-instlr", token);
				//Redireciona para a timeline
				this.props.history.push("/timeline");
			})
			.catch(erro => {
				this.setState({msg: erro.message});
			});
	}

	render (){
		return (
			<div className="login-box">
				<h1 className="header-logo">Instalura</h1>
				<span>{this.state.msg}</span>
				<form onSubmit={this.enviar.bind(this)}>
					<input type="text" ref={(input) => this.login = input} />
					<input type="password" ref={(input) => this.senha = input} />
					<input type="submit" value="Login" />
				</form>
			</div>
		);
	}
}

export default withRouter(Login);