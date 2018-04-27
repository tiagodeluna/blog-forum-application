import React from "react";
import ReactDOM from "react-dom";
import "./css/reset.css";
import "./css/timeline.css";
import "./css/login.css";
import App from "./App";
import Login from "./componentes/Login";
import { BrowserRouter as Router, Route, Switch/*, Redirect*/ } from "react-router-dom";

/*
	To start the backend application, execute:
		java -jar -Dspring.datasource.password=123456 instalura.jar
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
