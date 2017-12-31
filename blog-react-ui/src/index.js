import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserBox from './User';
import TopicBox from './Topic';
import Forum from './Forum';
import About from './About';
import Login from './components/Login';
import Logout from './components/Logout';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

function checkAuthentication(nextState) {
  if(localStorage.getItem("auth-token") === null) {
    return <Redirect to="/login"/>;
  }

  return nextState;
}


ReactDOM.render(
	(
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/forum" component={Forum} />
          <Route path="/about" component={About} />
          <Route path="/topic" render={() => checkAuthentication( <TopicBox /> )}/>
          <Route path="/users" render={() => checkAuthentication( <UserBox /> )} />
        </Switch>
      </App>
    </Router>
    ),
	document.getElementById('root')
);
registerServiceWorker();
