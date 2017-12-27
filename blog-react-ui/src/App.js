import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {
  render() {
    return (
    <div id="layout">
        { /*Menu toggle*/ }
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
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Profile</a></li>
                    <li className="pure-menu-item menu-item-divided pure-menu-selected">
                        <a href="#" className="pure-menu-link">Users</a>
                    </li>
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
              <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned">

                  <div className="pure-control-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" value="" />
                  </div>

                  <div className="pure-control-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" value=""  />
                  </div>

                  <div className="pure-control-group">
                    <label htmlFor="psswrd">Password</label>
                    <input id="psswrd" type="password" name="psswrd"  />
                  </div>

                  <div className="pure-control-group">
                    <label></label>
                    <button type="submit" className="pure-button pure-button-primary">Save</button>
                  </div>
                </form>
              </div>
              <div>
                <table className="pure-table pure-table-horizontal">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiago Luna</td>                
                      <td>tiago.luna@dataprev.gov.br</td>                
                    </tr>
                  </tbody>
                </table> 
              </div>             
            </div>
          </div>            

    </div>
    );
  }
}

export default App;
