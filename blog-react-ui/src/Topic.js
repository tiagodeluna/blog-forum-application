import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import CustomInput from './components/CustomInput';
import CustomTextArea from './components/CustomTextArea';
import ErrorHandler from './ErrorHandler';

var UPDATE_TOPIC_LIST = "update-topic-list";
var NEW_TOPIC_CREATED = "new-topic-created";

//Generates new topic form
class TopicForm extends Component {

	constructor() {
		super();
		this.state = {title:"", content:"", tags: []};
		//Make 'this' in each function refer to 'this' from UserForm
		this.sendForm = this.sendForm.bind(this);
		this.setTitle = this.setTitle.bind(this);
		this.setContent = this.setContent.bind(this);
		this.setTags = this.setTags.bind(this);
	}

  	sendForm(event) {
	    event.preventDefault();

	    const user = JSON.parse(localStorage.getItem("userdata"));

		$.ajax({
			url:"http://localhost:8080/api/posts",
			type:"post",
			contentType:"application/json",
			dataType:"json",
			data:JSON.stringify({title:this.state.title, content:this.state.content,
				tags:this.state.tags, author: user}),
			success: function(response){
				//TODO: Direcionar para a tela de detalhe do Tópico

				//Reload list of data
				PubSub.publish(NEW_TOPIC_CREATED, {});
				//Clear fields
				//this.setState({title:"", content:"", author: "", tags: []});
				//Redirects to details page
				//this.props.history.push(`/topic/${response.id}`);
			}.bind(this),
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

	publishPostPreview() {
		PubSub.publish(UPDATE_TOPIC_LIST, this.state);
	}

	setTitle(event) {
		this.setState({title: event.target.value}, function() {
			this.publishPostPreview();
		});
	}

	setContent(event) {
		this.setState({content: event.target.value}, function() {
			this.publishPostPreview();
		});
	}

	setTags(event) {
		this.setState({tags: event.target.value.split(",")}, function() {
			this.publishPostPreview();
		});
	}

	render() {
		return(
			<form className="pure-form pure-form-stacked" onSubmit={this.sendForm} method="post">
				<fieldset>
					<CustomInput id="title" type="text" name="title" value={this.state.title} required="required"
						onChange={this.setTitle} label="Title" />
					<CustomTextArea name="content" value={this.state.content} required="required"
						onChange={this.setContent} placeholder="Place the topic content here..." />
					<CustomInput id="tags" type="text" name="tags" value={this.state.tags} required=""
						onChange={this.setTags} label="Tags" />
					<div className="pure-control-group">
						<button type="submit" className="pure-button pure-button-primary">Create</button>
					</div>
				</fieldset>
			</form>
		);
	}
}

//Generates a preview of the topic
class TopicPreview extends Component {

	constructor() {
		super();
		this.state = {preview: {title:"", content:"", tags: []}};
	}

	componentDidMount() {
		//Subscribes to reload the list when it changes
		PubSub.subscribe(UPDATE_TOPIC_LIST, function(topic, data) {
			this.setState({preview: data});
		}.bind(this));
	}

	render() {
		const title = this.state.preview.title ? this.state.preview.title : "No title";
		const content = this.state.preview.content ? this.state.preview.content : "No content...";
		const author = JSON.parse(localStorage.getItem("userdata"));
		const tags = this.state.preview.tags.length > 0 ? this.state.preview.tags : ["Uncategorized"];

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
	                            tags.map(function(tag){
	                            	if (tag.trim()){
	                                	return (
	                                    	<a key={tag} className="post-category">{tag}</a> )
	                            	}
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

	constructor(props){
		super(props);
	}
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
					<TopicPreview />
	            </div>
	        </div>
		);
	}
}

export default withRouter(TopicBox);