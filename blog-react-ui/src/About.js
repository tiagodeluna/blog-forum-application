import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1>About</h1>
                </div>
                <br />
                <br />
                <div className="content" id="content">
                    <h2>Luna Forum</h2>
                    <p>Luna Forum is a simple forum webapp developed by Tiago Luna (me) as part of the Vanhack Accelerator 
                    Program. It was written using <strong>React.js</strong> + <strong>PureCSS</strong> in the Frontend, 
                    and <strong>Java 8</strong> + <strong>Spring (Boot, WebMVC, Security, Data)</strong> + 
                    <strong>MongoDB</strong> in the Backend. I hope you enjoy my solution!</p>
                    <br />
                    <h2>Tiago Luna</h2>
                    <p>Hi, my name is Tiago Luna. I'm a software engineer with over nine years of programming experience. 
                    I'm very comfortable coding with Java, C#, HTML5, Javascript, and also have expertise with SQL and 
                    multiple relational databases. I enjoy working in agile teams and organizations that stimulate 
                    productivity and value good design and coding practices. Please check out 
                    my <a href="https://github.com/tiagodeluna" target="_blank" rel="noopener noreferrer">Github</a> and 
                    my <a href="http://tiagodeluna.github.io" target="_blank" rel="noopener noreferrer">personal site</a> for more info.</p>
                </div>
            </div>
        );
    }
}
