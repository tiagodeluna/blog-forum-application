import React from "react";
import ReactDOM from "react-dom";
import "./css/reset.css";
import "./css/timeline.css";
import "./css/login.css";
import App from "./App";
import Login from "./componentes/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*
To start the backend application, execute:
 java -jar -Dspring.datasource.password=YOUR_PASSWORD instalura.jar
*/

ReactDOM.render((
	<Router>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/login" component={Login} />
			<Route path="/timeline" component={App} />
		</Switch>
	</Router>
	), document.getElementById("root")
);
