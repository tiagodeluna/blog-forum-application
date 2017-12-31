import { Component } from 'react';
import { withRouter } from "react-router-dom";
import PubSub from 'pubsub-js';

class Logout extends Component {

	componentWillMount() {
		localStorage.removeItem("auth-token");
		localStorage.removeItem("userdata");
		PubSub.publish("user-data", null);
		this.props.history.push("/login");
	}

	render(){
		return null;
	}
}

export default withRouter(Logout);