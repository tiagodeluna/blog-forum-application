import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import CustomInput from './components/CustomInput';
import CustomTextArea from './components/CustomTextArea';
import ErrorHandler from './ErrorHandler';

var NEW_TOPIC_CREATED = "new-topic-created";

//Generates new topic form
class TopicForm extends Component {

	constructor() {
		super();
		this.state = {title:"", content:"", tags: ""};
	}

  	sendForm(event) {
	    event.preventDefault();

	    const user = JSON.parse(localStorage.getItem("userdata"));

		$.ajax({
			url:`http://localhost:8080/api/posts?u-auth-token=${localStorage.getItem("auth-token")}`,
			type:"post",
			contentType:"application/json",
			dataType:"json",
			data:JSON.stringify({title:this.state.title, content:this.state.content,
				tags:this.state.tags, author: user}),
			success: function(response){
				//Reload list of data
				PubSub.publish(NEW_TOPIC_CREATED, {});
			},
			error: function(response){
				//Handle validation errors
				if (response.status === 400) {
					new ErrorHandler().showErrors(response.responseJSON);
				}
			},
			beforeSend: function(){
				PubSub.publish("clear-errors", {});
			}
		});
	}

	saveChange(inputName, event){
		this.setState({[inputName]:event.target.value});
	}

	render() {
		return(
			<div>
				<form className="pure-form pure-form-stacked" onSubmit={this.sendForm} method="post">
					<fieldset>
						<CustomInput id="title" type="text" name="title" value={this.state.title} required="required"
							onChange={this.saveChange.bind(this,"title")} label="Title" />
						<CustomTextArea name="content" value={this.state.content} required="required"
							onChange={this.saveChange.bind(this,"content")} placeholder="Place the topic content here..." />
						<CustomInput id="tags" type="text" name="tags" value={this.state.tags} required=""
							onChange={this.saveChange.bind(this,"tags")} label="Tags" />
						<div className="pure-control-group">
							<button type="submit" className="pure-button pure-button-primary">Create</button>
						</div>
					</fieldset>
				</form>
				<TopicPreview data={this.state} />
			</div>
		);
	}
}

//Generates a preview of the topic
class TopicPreview extends Component {

	constructor() {
		super();
	}

	render() {
		const title = this.props.data.title ? this.props.data.title : "No title";
		const content = this.props.data.content ? this.props.data.content : "No content...";
		const author = JSON.parse(localStorage.getItem("userdata"));
		const tags = this.props.data.tags.trim().length > 0 ? this.props.data.tags.split(",") : ["Uncategorized"];

		return(
            <div className="posts custom-gray-box">
                <h1 className="content-subhead">Topic Preview</h1>
	            <section className="post">
	                <header className="post-header">
	                    <h2 className="post-title">{title}</h2>
	                    <p className="post-meta">
	                        By <a>{author.name}</a> under
	                        {
	                        	//Display tags
	                            tags.map(function(tag, index){

	                            	if (tag.trim()){
	                                	return (
	                                    	<a key={index} className="post-category">{tag}</a> )
	                            	}
	                            	return "";
	                            })
	                        }
	                    </p>
	                </header>

	                <div className="post-description">
	                    <p>{content}</p>
	                </div>
	            </section>
		    </div>
		);
	}
}

//Generates topic form page
class TopicBox extends Component {

	componentDidMount(){
		//Substribe
		PubSub.subscribe(NEW_TOPIC_CREATED, function(topic) {
			this.props.history.push(`/forum`);
		}.bind(this));
	}

	render() {
		return (
	        <div>
	            <div className="header">
	                <h1>New Topic</h1>
	                <h2>Fill in the fields of the new topic below. You can use the Markdown syntax to write the title and content of the post.</h2>
	            </div>
	            <br />
	            <br />
	            <div className="content" id="content">
					<TopicForm />
	            </div>
	        </div>
		);
	}
}

export default withRouter(TopicBox);