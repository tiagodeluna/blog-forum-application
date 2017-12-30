import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
//import ErrorHandler from '../ErrorHandler';

class Login extends Component {

	constructor(){
		super();
		this.state = {msg:""};
		this.sendForm = this.sendForm.bind(this);
	}

	sendForm(event) {
		event.preventDefault();

		const requestInfo = {
			method:"post",
			body:JSON.stringify({login:this.username.value, password:this.password.value}),
			headers: new Headers({
				"Content-type":"application/json"
			})
		};

		console.log(this.username.value+":"+this.password.value);

		fetch("http://localhost:8080/api/public/login", requestInfo)
			.then(response => {
				if(response.ok){
					console.log("response ok");
					console.log(response);
					return response.text();
				} else {
					console.log("response error");
					console.log(response);
	                throw new Error("Login failed");

					//Handle validation errors
					//if (response.status === 400) {
					//	new ErrorHandler().showErrors(response.responseJSON);
					//}
				}
			})
			.then(token => {
				console.log(token);
				localStorage.setItem("auth-token", token);
				//Redirects to user's page
				this.props.history.push("/users");
			})
			.catch(error => {
				this.setState({msg: error.message});
			})
	}

	render(){
		return (
	        <div>
	            <div className="header">
	                <h1>Login</h1>
	            </div>
	            <br />
	            <div className="content" id="content">
					<form className="pure-form pure-form-aligned" onSubmit={this.sendForm} method="post">
						<fieldset>
							<span className="pure-alert">{this.state.msg}</span>

							<div className="pure-control-group">
								<label htmlFor="username">Username</label>
								<input id="username" type="text" className="pure-input-1-2"
									ref={(input) => this.username = input} />
							</div>
							<div className="pure-control-group">
								<label htmlFor="password">Password</label>
								<input id="password" type="password" className="pure-input-1-2"
									ref={(input) => this.password = input} />
							</div>

							<div className="pure-control-group">
								<label></label>
								<button type="submit" className="pure-button pure-input-1-2 pure-button-primary">Login</button>
							</div>
						</fieldset>
					</form>
	            </div>
	        </div>
		);
	}
}

export default withRouter(Login);