import React, { Component } from 'react';

//Generates admin User page
class Profile extends Component {

	constructor() {
		super();
		this.state = {user: localStorage.getItem("userdata")};
	}

	render() {
		const userdata = JSON.parse(this.state.user);

		return (
	        <div>
	            <div className="header">
	                <h1>User Profile</h1>
	                <h2>Hi, {userdata.name}! Check your account info below.</h2>
	            </div>
	            <br />
	            <div className="content" id="content">
					<form className="pure-form pure-form-stacked" method="post">
						<fieldset>
							<div className="pure-control-group">
								<label htmlFor="name">Full Name</label>
								<input id="name" type="text" value={userdata.name} readOnly className="pure-input-1" />
							</div>
							<div className="pure-control-group">
								<label htmlFor="username">Username</label>
								<input id="username" type="text" value={userdata.username} readOnly className="pure-input-1" />
							</div>
							<div className="pure-control-group">
								<label htmlFor="email">Email</label>
								<input id="email" type="email" value={userdata.email} readOnly className="pure-input-1" />
							</div>
							<label htmlFor="description">Description</label>
							<div className="pure-control-group">
								<textarea id="description" className="pure-input-1" rows="10"
			                        placeholder="Nothing to declare..." value={userdata.profileDescription} readOnly />
							</div>	
						</fieldset>
					</form>
	            </div>
	        </div>
		);
	}
}

export default Profile;