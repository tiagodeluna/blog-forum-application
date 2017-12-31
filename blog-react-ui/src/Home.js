import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {

        return (
            <div>
                <div className="header">
                    <h1>Welcome to Luna Forum</h1>
                    <h2>Forum application developed as part of the Vanhack Accelerator Program</h2>
                </div>
                <br />
                <br />
                <div className="content" id="content">
                    <p>Hi, my name is Tiago Luna. I'm a experienced software engineer and a passionate coder. 
                    I developed this application as part of the Vanhack Accelerator Program. I used React v4 + PureCSS in 
                    the Frontend and Java 8 + Spring (Boot, WebMVC, Security, Data) + MongoDB in the Backend. I hope you 
                    enjoy it!</p>

                    <p>Please take a look at our super exciting topics <Link to="/forum">HERE</Link>.</p>
                </div>
            </div>
        );
    }
}
