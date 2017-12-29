import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import UserAdmin from './User';
import Forum from './Forum';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	(
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={UserAdmin} />
          <Route path="/forum" component={Forum} />
        </Switch>
      </App>
    </Router>
    ),
	document.getElementById('root')
);
registerServiceWorker();
