import React, { Component } from 'react';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import CustomInput from './components/CustomInput';
import ErrorHandler from './ErrorHandler';

var UPDATE_USER_LIST = "update-user-list";

class UserAdminForm extends Component {

	constructor() {
		super();
		this.state = {name:"", email:"", role:""};
		//Make 'this' in each function refer to 'this' from UserAdminForm
		this.sendForm = this.sendForm.bind(this);
		this.setName = this.setName.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setRole = this.setRole.bind(this);
	}

  	sendForm(event) {
	    event.preventDefault();

		$.ajax({
			url:`http://localhost:8080/api/users?u-auth-token=${localStorage.getItem("auth-token")}`,
			type:"post",
			contentType:"application/json",
			dataType:"json",
			data:JSON.stringify({name:this.state.name, email:this.state.email, username:this.state.email, role:this.state.role}),
			success: function(response){
				//Reload list of data
				PubSub.publish(UPDATE_USER_LIST, {});
				//Clear fields
				this.setState({name:"", email:"", role:""});
			}.bind(this),
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

	setEmail(event) {
		this.setState({email: event.target.value});
	}

	setRole(event) {
		this.setState({role: event.target.value});
	}

	render() {
		return(
			<form className="pure-form pure-form-stacked" onSubmit={this.sendForm} method="post">
				<fieldset>
					<CustomInput id="name" type="text" value={this.state.name} required="required" onChange={this.setName} label="Name" />
					<CustomInput id="email" type="email" value={this.state.email} required="required" onChange={this.setEmail} label="Email" />
					<div className="pure-control-group">
						<label htmlFor="role">Role</label>
						<select id="role" value={this.state.role} onChange={this.setRole}>
							<option value="">Select a role</option>
						{
							this.props.roles.map(function(role){
								return <option value={role}>{role.charAt(0) + role.slice(1).toLowerCase()}</option>
							})
						}
						</select>
	                    <span className="pure-form-message custom-error">{this.state.errorMsg}</span>
					</div>	
					<button type="submit" className="pure-button pure-button-primary">Save</button>
				</fieldset>
			</form>
		);
	}
}

//Generates users table
class UsersTable extends Component {

	render() {
		return(
			<div>
				<table className="pure-table pure-table-horizontal">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Role</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.list.map(function(user){
							return (
								<tr key={user.id}>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.role}</td>
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

//Generates admin User page
export default class UserAdminBox extends Component {

	constructor() {
		super();
		this.state = {list:[], roles: []};
		this.loadUsers = this.loadUsers.bind(this);
	}

	componentDidMount() {
		this.loadUsers();

		//Subscribes to reload the list when it changes
		PubSub.subscribe(UPDATE_USER_LIST, function(topic) {
			this.loadUsers();
		}.bind(this));
	}

	//Retrieve data via GET request and re-render page
	loadUsers() {
		$.ajax({
			url:`http://localhost:8080/api/users?u-auth-token=${localStorage.getItem("auth-token")}`,
			dataType:"json",
			success:function(response){
				//Update list and re-render page
				this.setState({list:response});
			}.bind(this)
		});
	}

	render() {
		return (
	        <div>
	            <div className="header">
	                <h1>User Admin Area</h1>
	                <h2>You can manage your users. You can search, create, edit and delete your user accounts here.</h2>
	            </div>
	            <br />
	            <div className="content" id="content">
					<UserAdminForm roles={this.state.roles} />
					<UsersTable list={this.state.list} />
	            </div>
	        </div>
		);
	}
}