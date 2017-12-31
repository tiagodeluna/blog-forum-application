import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PubSub from 'pubsub-js';

export default class UserInfo extends Component {

	constructor() {
		super();
		this.state = {user: localStorage.getItem("userdata")};
	}

	componentDidMount() {
		PubSub.subscribe("user-data", function(topic, data) {
			this.setState({user: data});
		}.bind(this));
	}

	//Shows just a login button
	displayLoginButton() {
		return (
			<div className="pure-u-5-5">
				<Link to="/login" className="pure-button pure-button-primary custom-button-right">Login</Link>
				<Link to="/signin" className="pure-button custom-button-right">
					<i className="fa fa-user-plus fa-lg"></i> Sing In</Link>
			</div>
		);
	}

	//Shows active User info and a logout button
	displayUserData() {
		const userdata = JSON.parse(this.state.user);
		
		return (
			<div className="pure-u-5-5">
				<Link to="/logout" className="pure-button pure-button-primary custom-button-right">Logout</Link>
				<Link to="/profile" className="pure-button custom-button-right">
					<i className="fa fa-cog fa-lg"></i> {userdata.name}</Link>
			</div>
		);
	}

	render(){
	    //Hide/show links according to the token
	    return (this.state.user === null) ? this.displayLoginButton() : this.displayUserData();
	}
}