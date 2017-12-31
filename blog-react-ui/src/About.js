import React, { Component } from 'react';

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
                    <p>Hi, my name is Tiago Luna. I'm a software engineer with over nine years of programming experience. 
                    I developed this application as part of the Vanhack Accelerator Program. I used React v4 + PureCSS in 
                    the Frontend and Java 8 + Spring (Boot, WebMVC, Security, Data) + MongoDB in the Backend. I hope you 
                    enjooy my solution!</p>
                </div>
            </div>
        );
    }
}
