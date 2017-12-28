import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import { Link } from 'react-router-dom';
import UserBox from './User';

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
                        <Link to="#" className="pure-menu-link">Home</Link>
                    </li>
                    <li className="pure-menu-item"><Link to="#" className="pure-menu-link">About</Link></li>
                    <li className="pure-menu-item"><Link to="#" className="pure-menu-link">Topics</Link></li>
                    <li className="pure-menu-item"><Link to="/users" className="pure-menu-link">Users</Link></li>
                </ul>
            </div>
        </div>

        <div id="main">
            <div className="header">
                <h1>Welcome to Luna Forum</h1>
                <h2>Forum application developed as part of the Vanhack Accelerator Program</h2>
            </div>
            <br />
            <br />
            <div className="content" id="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>            

    </div>
    );
  }
}

export default App;
