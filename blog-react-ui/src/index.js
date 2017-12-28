import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserBox from './User';
import './index.css';
import {Router,Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	(
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route path="/users" component={UserBox} />
        <Route path="/posts" />
        <Route path="/about" />
      </div>
    </BrowserRouter>
    ),
	document.getElementById('root')
);
registerServiceWorker();
