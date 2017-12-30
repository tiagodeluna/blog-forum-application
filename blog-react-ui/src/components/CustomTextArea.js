import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class CustomTextArea extends Component {

    constructor() {
        super();
        this.state = {errorMsg:""};
    }

    componentDidMount() {
        //Subscribe to handle validation errors
        PubSub.subscribe("validation-error", function(topic, error) {
            if (error.field === this.props.name) {
                this.setState({errorMsg:error.defaultMessage});
            }
        }.bind(this));

        //Subscribe to clear error messages
        PubSub.subscribe("clear-errors", function(topic) {
            this.setState({errorMsg:""});
        }.bind(this));
    }

	render (){
		return (
				<div className="pure-control-group">
					<textarea id={this.props.id} required={this.props.required} className="pure-input-1" rows="10"
                        onChange={this.props.onChange} placeholder={this.props.placeholder} value={this.props.value} />
                    <span className="pure-form-message">{this.state.errorMsg}</span>
				</div>	
			);
	}
}