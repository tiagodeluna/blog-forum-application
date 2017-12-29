import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

//List all posts
class PostList extends Component {

    render() {
        return(
            <div>
                { /*A wrapper for all the blog posts*/ }
                <div className="posts">
                    <h1 className="content-subhead">Recent Topics</h1>
                    {
                        // Iterates to display each post in decreasing order of publication
                        this.props.list.map(function(post){
                            return (
                                <section className="post" key={post.id}>
                                    <header className="post-header">
                                        { /*<img width="48" height="48" alt="Tilo Mitra&#x27;s avatar" class="post-avatar" src="/img/common/tilo-avatar.png">*/ }

                                        <h2 className="post-title">{post.title}</h2>

                                        <p className="post-meta">
                                            By <a href="#" className="post-author">{post.author.name}</a> under
                                            {
                                                post.tags.map(function(tag){
                                                    return ( <Link key={tag.label} to={"/forum/"+tag.label} className="post-category" style={{background: tag.color}}>{tag.label}</Link> )
                                                })
                                            }
                                        </p>
                                    </header>

                                    <div className="post-description">
                                        <p>{post.content}</p>
                                    </div>
                                </section>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

//List posts by Tag
function ListByTag(props) {
    return(
        <div>Sorry, but the player was not found: {props.match.params.tagLabel}</div>
    );
}

export default class Forum extends Component {

    constructor() {
        super();
        this.state = {list:[]};
        this.loadPosts = this.loadPosts.bind(this);
    }

    componentDidMount() {
        this.loadPosts();

        //Subscribes to reload the list when it changes
        //PubSub.subscribe(UPDATE_POST_LIST_TOPIC, function(topic) {
        //    this.loadPosts();
        //}.bind(this));
    }

    //Retrieve data via GET request and re-render page
    loadPosts() {
        $.ajax({
            url:"http://localhost:8080/api/posts",
            dataType:"json",
            success:function(response){
                //Update list and re-render page
                this.setState({list:response});
            }.bind(this)
        });
    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Forum</h1>
                </div>
                <br />
                <br />
                <div className="content" id="content">
                     <PostList list={this.state.list} />
                </div>
            </div>
        );
    }
}