import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserBox from './User';
import TopicBox from './Topic';
import Forum from './Forum';
import About from './About';
import Login from './components/Login';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	(
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={UserBox} />
          <Route path="/topic/new" component={TopicBox} />
          <Route path="/forum" component={Forum} />
          <Route path="/about" component={About} />
        </Switch>
      </App>
    </Router>
    ),
	document.getElementById('root')
);
registerServiceWorker();
