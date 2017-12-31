import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import UserBox from './User';
import TopicBox from './Topic';
import Profile from './Profile';
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
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/forum" component={Forum} />
          <Route path="/about" component={About} />
          <Route path="/topic" render={() => checkAuthentication( <TopicBox /> )}/>
          <Route path="/signin" component={UserBox} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </App>
    </Router>
    ),
	document.getElementById('root')
);
registerServiceWorker();
