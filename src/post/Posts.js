import React, { Component } from "react";
import { list } from "./apiPost";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  loadPosts = (page) => {
    list(page).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ posts: data });
      }
    });
  };

  componentDidMount() {
    this.loadPosts();
  }

  renderPosts = (posts) => {
    return (
      <div className="row">
        {posts.map((post, i) => {
          return (
            <div className="card col-md-4" key={i}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <br />
                <p className="font-italic mark">
                  Posted on {new Date(post.createdDate).toDateString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { posts } = this.state;
    return <div className="container">{this.renderPosts(posts)}</div>;
  }
}

export default Posts;
