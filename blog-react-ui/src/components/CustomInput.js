import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class CustomInput extends Component {

    constructor() {
        super();
        this.state = {errorMsg:""};
    }

    componentDidMount() {
        PubSub.subscribe("validation-error", function(topic, error) {
            console.log("ERROR: "+error);
            this.setState({errorMsg:error.defaultMessage});
        }.bind(this));
    }

	render (){
		return (
				<div className="pure-control-group">
					<label htmlFor={this.props.id}>{this.props.label}</label>
					<input id={this.props.id} type={this.props.type} name={this.props.name}
						value={this.props.value} required={this.props.required} onChange={this.props.onChange} />
                    <span className="error">{this.state.errorMsg}</span>
				</div>	
			);
	}
}