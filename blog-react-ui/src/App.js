import React, { Component } from 'react';
import './css/pure.css';
import './css/blog.css';
import './css/side-menu.css';
import './css/custom.css';
import './css/font-awesome.min.css';
import UserInfo from './components/UserInfo';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
    <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
            <span></span>
        </a>

        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" href="#">Luna Forum</a>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item menu-item-divided pure-menu-selected">
                        <Link to="/" className="pure-menu-link">Home</Link>
                    </li>
                    <li className="pure-menu-item"><Link to="/forum" className="pure-menu-link">Topics</Link></li>
                    <li className="pure-menu-item"><Link to="/topic/new" className="pure-menu-link">New Topic</Link></li>
                    <li className="pure-menu-item"><Link to="/users" className="pure-menu-link">Users</Link></li>
                    <li className="pure-menu-item"><Link to="/about" className="pure-menu-link">About</Link></li>
                </ul>
            </div>
        </div>

        <div id="main">
            <UserInfo />
            {this.props.children}
        </div>            

    </div>
    );
  }
}

export default App;
