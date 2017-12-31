import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>About Us</h1>
                </div>
                <br />
                <br />
                <div className="content" id="content">
                    <h1>Luna Forum</h1>
                    <p>Luna Forum is a simples forum webapp developed by Tiago Luna as part of the Vanhack Accelerator 
                    Program. It was written using <strong>React.js</strong> + <strong>PureCSS</strong> in the Frontend, 
                    and <strong>Java 8</strong> + <strong>Spring (Boot, WebMVC, Security, Data)</strong> + 
                    <strong>MongoDB</strong> in the Backend. I hope you enjoy my solution!</p>
                    <br />
                    <h1>Tiago Luna</h1>
                    <p>Hi, my name is Tiago Luna. I'm a software engineer with over nine years of programming experience. 
                    I'm very comfortable coding with Java, C#, HTML5, Javascript, and also have expertise with SQL and 
                    multiple relational databases. I enjoy working in agile teams and organizations that stimulate 
                    productivity and value good design and coding practices. Please check out 
                    my <a href="https://github.com/tiagodeluna" target="_blank">Github</a> and 
                    my <a href="http://tiagodeluna.github.io" target="_blank">personal site</a> for more info.</p>
                </div>
            </div>
        );
    }
}
