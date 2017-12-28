import React, { Component } from 'react';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import CustomInput from './components/CustomInput';
import ErrorHandler from './ErrorHandler';

var UPDATE_LIST_TOPIC = "update-user-list";

class UserForm extends Component {

	constructor() {
		super();
		this.state = {name:"", email:"", password:""};
		//Make 'this' in each function refer to 'this' from UserForm
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
				//Reload list of data
				PubSub.publish(UPDATE_LIST_TOPIC, response);
			},
			error: function(response){
				//Handle validation error
				if (response.status === 400) {
					//TODO: recuperar erros
					//TODO: exibir mensagem nos campos
					new ErrorHandler().showErrors(response.responseJSON);
				}
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
					<CustomInput id="name" type="text" name="name" value={this.state.name} required="" onChange={this.setName} label="Name" />
					<CustomInput id="email" type="email" name="email" value={this.state.email} required="" onChange={this.setEmail} label="Email" />
					<CustomInput id="pswd" type="password" name="pswd" value={this.state.password} required="" onChange={this.setPassword} label="Password" />

					<div className="pure-control-group">
						<label></label>
						<button type="submit" className="pure-button pure-button-primary">Save</button>
					</div>
				</form>
			</div>
		);
	}
}

class UsersTable extends Component {

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
						this.props.list.map(function(user){
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

export default class UserBox extends Component {

	constructor() {
		super();
		this.state = {list:[]};
		this.loadUsers = this.loadUsers.bind(this);
	}

	componentDidMount() {
		this.loadUsers();

		//Subscribes to reload the list when it changes
		PubSub.subscribe(UPDATE_LIST_TOPIC, function(topic, data) {
			if (data != null) {
				this.loadUsers();
			}
		}.bind(this));
	}

	//Retrieve data via GET request and re-render page
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
		return (
			<div>
              <UserForm />
              <UsersTable list={this.state.list} />
            </div>
		);
	}
}