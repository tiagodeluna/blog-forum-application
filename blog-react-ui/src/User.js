import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import $ from 'jquery';
import PubSub from 'pubsub-js';
import CustomInput from './components/CustomInput';
import CustomTextArea from './components/CustomTextArea';
import ErrorHandler from './ErrorHandler';

var USER_ACCOUNT_CREATED = "user-account-created";

class UserForm extends Component {

	constructor() {
		super();
		this.state = {name:"", username: "", email:"", password:"", description: ""};
		//Make 'this' in each function refer to 'this' from UserForm
		this.sendForm = this.sendForm.bind(this);
		this.setName = this.setName.bind(this);
		this.setUsername = this.setUsername.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setDescription = this.setDescription.bind(this);
		this.setPassword = this.setPassword.bind(this);
	}

  	sendForm(event) {
	    event.preventDefault();

		$.ajax({
			url:"http://localhost:8080/api/users",
			type:"post",
			contentType:"application/json",
			dataType:"json",
			data:JSON.stringify({name:this.state.name, email:this.state.email, username:this.state.username,
				password:this.state.password, profileDescription: this.state.description}),
			success: function(response){
				PubSub.publish(USER_ACCOUNT_CREATED, {});
			},
			error: function(response){
				//Handle validation errors
				if (response.status === 400) {
					new ErrorHandler().showErrors(response.responseJSON);
				}
			},
			beforeSend: function(){
				PubSub.publish("clear-errors", {});
			}
		});
	}

	setName(event) {
		this.setState({name: event.target.value});
	}

	setUsername(event) {
		this.setState({username: event.target.value});
	}

	setEmail(event) {
		this.setState({email: event.target.value});
	}

	setDescription(event) {
		this.setState({description: event.target.value});
	}

	setPassword(event) {
		this.setState({password: event.target.value});
	}

	render() {
		return(
			<form className="pure-form pure-form-stacked" onSubmit={this.sendForm} method="post">
				<fieldset>
					<span className="custom-success">{this.state.msg}</span>
					<CustomInput id="name" type="text" value={this.state.name} required="required"
						onChange={this.setName} label="Full Name" />
					<CustomInput id="username" type="text" value={this.state.username} required="required"
						onChange={this.setUsername} label="Username" />
					<CustomInput id="email" type="email" value={this.state.email} required="required"
						onChange={this.setEmail} label="Email" />
					<CustomTextArea name="description" value={this.state.description} required=""
						onChange={this.setDescription} placeholder="Say something cool about you!" />
					<CustomInput id="password" type="password" value={this.state.password} required="required"
						onChange={this.setPassword} label="Password" />

					<button type="submit" className="pure-button pure-button-primary">Save</button>
				</fieldset>
			</form>
		);
	}
}

//Generates admin User page
class UserBox extends Component {

	constructor() {
		super();
		this.state = {msg: ""};
	}

	componentDidMount() {
		//Subscribes to redirect when it changes
		PubSub.subscribe(USER_ACCOUNT_CREATED, function(topic) {
			//Redirects to user's page
			this.props.history.push("/login");
		}.bind(this));
	}

	render() {
		return (
	        <div>
	            <div className="header">
	                <h1>Create Your Account</h1>
	                <h2>Hey! Spend just a few minutes to create your user account and start using the wonderful Luna Forum!</h2>
	            </div>
	            <br />
	            <div className="content" id="content">
					<UserForm />
	            </div>
	        </div>
		);
	}
}

export default withRouter(UserBox);