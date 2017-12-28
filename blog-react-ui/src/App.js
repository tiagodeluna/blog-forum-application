import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import {UserForm,UsersTable} from './User';

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
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">About</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Topics</a></li>
                    <li className="pure-menu-item menu-item-divided pure-menu-selected">
                        <a href="#" className="pure-menu-link">Users</a>
                    </li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Profile</a></li>
                </ul>
            </div>
        </div>

        <div id="main">
            <div className="header">
                <h1>Users</h1>
                <h2>Forum application developed as part of the Vanhack Accelerator Program</h2>
            </div>
            <br />
            <br />
            <div className="content" id="content">
              <UserForm />
              <UsersTable />
            </div>
          </div>            

    </div>
    );
  }
}

export default App;
