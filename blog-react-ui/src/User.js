import React, { Component } from 'react';
import $ from 'jquery';
import CustomInput from './components/CustomInput';

/* Retrieve data via GET request and re-render page */
function loadUsers(component) {
	$.ajax({
		url:"http://localhost:8080/api/users",
		dataType:"json",
		success:function(response){
			//Update list and re-render page
			component.setState({list:response});
		}.bind(component)
	});
}

export class UserForm extends Component {
	constructor() {
		super();
		this.state = {name:"", email:"", password:""};
		//Make 'this' from 'sendForm' refer to 'this' from UserForm
		this.sendForm = this.sendForm.bind(this);
		this.setName = this.setName.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setPassword = this.setPassword.bind(this);
	}

  	sendForm(event) {
	    event.preventDefault();

		$.ajax({
			url:"http://localhost:8080/api/users",
			type:"post",
			contentType:"application/json",
			dataType:"json",
			data:JSON.stringify({name:this.state.name, email:this.state.email, username:this.state.email, password:this.state.password}),
			success: function(response){
				console.log("Sucesso!");
				//Reload users
				loadUsers(this);
			}.bind(this),
			error: function(response){
				console.log("Error!");
			}
		});
	}

	setName(event) {
		this.setState({name: event.target.value});
	}

	setEmail(event) {
		this.setState({email: event.target.value});
	}

	setPassword(event) {
		this.setState({password: event.target.value});
	}

	render() {
		return(
			<div className="pure-form pure-form-aligned">
				<form className="pure-form pure-form-aligned" onSubmit={this.sendForm} method="post">
					<CustomInput id="name" type="text" name="name" value={this.state.name} onChange={this.setName} label="Name" />
					<CustomInput id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="Email" />
					<CustomInput id="pswd" type="password" name="pswd" value={this.state.password} onChange={this.setPassword} label="Password" />

					<div className="pure-control-group">
						<label></label>
						<button type="submit" className="pure-button pure-button-primary">Save</button>
					</div>
				</form>
			</div>
		);
	}
}

export class UsersTable extends Component {
	constructor() {
		super();
		this.state = {list:[]};
	}

	componentDidMount() {
		loadUsers(this);
	}

	loadUsers() {
		$.ajax({
			url:"http://localhost:8080/api/users",
			dataType:"json",
			success:function(response){
				//Update list and re-render page
				this.setState({list:response});
			}.bind(this)
		});
	}

	render() {
		return(
			<div>
				<table className="pure-table pure-table-horizontal">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.list.map(function(user){
							return (
								<tr key={user.id}>
									<td>{user.name}</td>
									<td>{user.email}</td>
								</tr>
							)
						})
					}
				</tbody>
				</table> 
			</div>             
		);
	}
}