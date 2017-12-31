import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PubSub from 'pubsub-js';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {msg: ""};
		this.sendForm = this.sendForm.bind(this);
	}

	retrieveUserData(token){
        fetch(`http://localhost:8080/api/login/userdata?u-auth-token=${token}`)
            .then(response => {
                if(response.ok){
                    return response.text();
                } else {
                    console.log("response error");
                    throw new Error("Failed to retrieve user data");
                }
            })
        .then(user => {
        	localStorage.setItem("userdata", user);
			PubSub.publish("user-data", user);
        })
    }

	sendForm(event) {
		event.preventDefault();

		const requestInfo = {
			method:"post",
			body:JSON.stringify({username:this.username.value, password:this.password.value}),
			headers: new Headers({
				"Content-type":"application/json"
			})
		};

		fetch("http://localhost:8080/api/public/login", requestInfo)
			.then(response => {
				if(response.ok){
					return response.text();
				} else {
	                throw new Error("Login failed");
				}
			})
		.then(token => {
			localStorage.setItem("auth-token", token);
			//Retrieve and store userdata
			this.retrieveUserData(token);
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
							<span className="custom-error">{this.state.msg}</span>

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