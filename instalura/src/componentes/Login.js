import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
	render (){
		return (
			<div className="login-box">
				<h1 className="header-logo">Instalura</h1>
				<form>
					<input type="text" />
					<input type="password" />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default withRouter(Login);