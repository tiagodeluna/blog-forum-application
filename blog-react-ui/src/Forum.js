import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

//Writes the list of posts
function PostList(props) {
        return(
            <div>
                { /*A wrapper for all the blog posts*/ }
                <div className="posts">
                    <h1 className="content-subhead">Recent Topics</h1>
                    {
                        //Iterates to display each post in decreasing order of publication
                        props.list.map(function(post){
                            return (
                                <section className="post" key={post.id}>
                                    <header className="post-header">
                                        <h2 className="post-title">{post.title}</h2>
                                        <p className="post-meta">
                                            By <a href="#" className="post-author">{post.author.name}</a> under
                                            {
                                                post.tags.map(function(tag){
                                                    return (
                                                        <Link key={tag.label} to={"/forum/tag/"+tag.label} className="post-category" style={{background: tag.color}}>{tag.label}</Link>
                                                    )
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
        )
}

//List posts by Tag
class ListByTag extends Component {

    constructor(props) {
        super(props);
        this.state = {list:[]};
        this.loadPosts = this.loadPosts.bind(this);
    }

    componentDidMount() {
        this.loadPosts();
    }

    //Retrieve data via GET request and re-render page
    loadPosts() {
        $.ajax({
            url:"http://localhost:8080/api/posts/tag/"+this.props.match.params.tagLabel,
            dataType:"json",
            success:function(response){
                //Update list and re-render page
                this.setState({list:response});
            }.bind(this)
        });
    }

    render() {
        return(
            <PostList list={this.state.list} />
        );
    }

}

//List all posts
class ListAllPosts extends Component {

    constructor() {
        super();
        this.state = {list:[]};
        this.loadPosts = this.loadPosts.bind(this);
    }

    componentDidMount() {
        this.loadPosts();
    }

    // Retrieve data via GET request and re-render page
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
            <PostList list={this.state.list} />
        );
    }
}

//Displays the post list according to the selected route
export default function Forum() {

    return (
        <div>
            <div className="header">
                <h1>Forum</h1>
            </div>
            <br />
            <br />
            <div className="content" id="content">
                <Switch>
                    <Route exact path="/forum" component={ListAllPosts} />
                    <Route path="/forum/tag/:tagLabel" component={ListByTag} />
                    <Route path="/forum/new" component={ListByTag} />
                </Switch>
            </div>
        </div>
    );
}